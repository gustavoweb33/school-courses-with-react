import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import DisplayCourse from '../components/DisplayCourses';
import SemesterTables from '../components/SemesterTables';
import courses from '../courses';



class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: courses,
      searchCourses: [],
      checkedCourses: [],
      totalCreditHours: 0,
      semesterChosen: 0
    }
  }

  getCourseSearchValue = (event) => {
    const name = event.target.value;

    if (name.length === 0) {
      this.setState({ searchCourses: [] });
      return;
    }

    const schoolCourses = this.state.courses;

    const filteredCourses = schoolCourses.filter((course) => {
      return course.prefix.toLowerCase().includes(name.toLowerCase());
    });


    this.setState({ searchCourses: filteredCourses })
    
  }

  getSemesterValue = (event) => {
    const selectedSemester = Number(event.target.value);
    this.setState({ semesterChosen: selectedSemester })
  }

  getCheckBoxValue = (event) => {
    const checkedCoursesList = [...this.state.checkedCourses];

    if (!(this.state.checkedCourses.includes(event.target.value)) && event.target.checked) {
      checkedCoursesList.push(event.target.value)
    }
    else if (checkedCoursesList.includes(event.target.value)) {
      return;
    }

    this.setState({ checkedCourses: checkedCoursesList });
  }

  deleteCourse = (event) => {
    const courseToDelete = event.target.value;
    const previouslyCheckedCourses = [...this.state.checkedCourses];

    for (let i = 0; i < previouslyCheckedCourses.length; i++) {
      if (courseToDelete === previouslyCheckedCourses[i]) {
        previouslyCheckedCourses.splice(i, 1);

      }
    }
    this.setState({ checkedCourses: previouslyCheckedCourses });
  }

  render() {
    let searchCoursesChecked = null;
    if (this.state.searchCourses.length !== 0) {

      searchCoursesChecked = (
        <div>
          <DisplayCourse newCourses={this.state.searchCourses} checkCheckbox={this.getCheckBoxValue} />
        </div>
      );
    }


    return (
      <div >
        <SearchForm
          courses={this.state.courses}
          change={this.getCourseSearchValue}
          semester={this.getSemesterValue} />

        {searchCoursesChecked}
        <SemesterTables
          semesterValue={this.state.semesterChosen}
          chosenCourses={this.state.checkedCourses}
          deleteCourse={this.deleteCourse} 
          courses={this.state.courses}/>
      </div>
    );
  }
}

export default App;


//display credit hours along with the course numbers and create a sum for the total credit hours