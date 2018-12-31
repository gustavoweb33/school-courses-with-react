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
      checkedCourses: []
    }
  }

  getInputValue = (event) => {
    let name = event.target.value;

    if (name.length === 0) {
      this.setState({ searchCourses: [] });
      return;
    }

    const schoolCourses = this.state.courses;

    let filteredCourses = schoolCourses.filter((course) => {
      return course.prefix.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({ searchCourses: filteredCourses })

  }

  getSemesterValue = (event) => {
    event.preventDefault();
    const semester = event.target.value;
    console.log(semester);
  }

  getCheckBoxValue = (event) => {
    let checkedCoursesList = [...this.state.checkedCourses];

    if (!(this.state.checkedCourses.includes(event.target.value)) && event.target.checked) {
      checkedCoursesList.push(event.target.value)
    }
    else {
      alert('course already included');
    }

    this.setState({ checkedCourses: checkedCoursesList });
  }


  render() {
    console.log('object:' + this.state.checkedCourses)
    let searchCoursesChecked = null;
    if (this.state.searchCourses.length !== 0) {

      searchCoursesChecked = (
        <div>
          <DisplayCourse newCourses={this.state.searchCourses} checkCheckbox={this.getCheckBoxValue} />
        </div>
      );
    }


    return (
      <div>
        <SearchForm
          courses={this.state.courses}
          change={this.getInputValue}
          submit={this.getSemesterValue} />

        {searchCoursesChecked}
        <SemesterTables />
      </div>
    );
  }
}

export default App;
