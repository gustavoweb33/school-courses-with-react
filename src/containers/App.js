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
      previousState: {},
      semesterCourses: [],
      semesterChosen: 0
    }
  }

  getInputValue = (event) => {
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
    event.preventDefault();
    const selectedSemester = Number(event.target.value);
    this.setState({ semesterChosen: selectedSemester })
  }

  getCheckBoxValue = (event) => {
    //remove the unchecked boxes(courses) from the array
    const checkedCoursesList = [...this.state.checkedCourses];

    if (!(this.state.checkedCourses.includes(event.target.value)) && event.target.checked) {
      checkedCoursesList.push(event.target.value)
    }
    else {
      alert('course already included');
    }

    this.setState({ checkedCourses: checkedCoursesList });
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
          change={this.getInputValue}
          submit={this.getSemesterValue} />

        {searchCoursesChecked}
        <SemesterTables 
        semesterValue={this.state.semesterChosen}
        chosenCourses={this.state.checkedCourses}/>
      </div>
    );
  }
}

export default App;
