import React, { Component } from 'react';
import SearchCourses from '../components/SearchCourses';
import DisplayCourse from '../components/DisplayCourses';
import SelectedCourses from '../components/SelectedCourses';
import FullSemesterTable from '../components/FullSemester';
import courses from '../courses';
import style from '../containers/App.module.css'



class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: courses,
      searchCourses: [],
      checkedCourses: [],
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
    this.setState({ semesterChosen: selectedSemester });

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
        <div className={style.displayCourses}>
          <h3>Courses Displayed</h3>
          <DisplayCourse
            newCourses={this.state.searchCourses}
            checkCheckbox={this.getCheckBoxValue} />
        </div>
      );
    }


    return (
      <div className={style.gridContainer}>
        <div>
          <SearchCourses
            courses={this.state.courses}
            change={this.getCourseSearchValue}
            semester={this.getSemesterValue} />
        </div>
        {searchCoursesChecked}
        <div className={style.selectedCourses} >
          <SelectedCourses
            semesterValue={this.state.semesterChosen}
            chosenCourses={this.state.checkedCourses}
            deleteCourse={this.deleteCourse}
            courses={this.state.courses} />
        </div>
        <div className={style.detailedSemester}>
          <FullSemesterTable
            chosenCourses={this.state.checkedCourses}
            courses={this.state.courses} />
        </div>
      </div>
    );
  }
}

export default App;


//display credit hours along with the course numbers and create a sum for the total credit hours