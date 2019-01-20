import React, { Component } from 'react';
import courses from '../courses';
import SearchCourses from '../components/SearchCourses';
import DisplayCourse from '../components/DisplayCourses';
import SelectedCourses from '../components/SelectedCourses';
import { globalTotalCreditHours } from '../components/SelectedCourses';
import FullSemesterTable from '../components/FullSemester';
import style from '../containers/App.module.css'



class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: courses,
      searchCourses: [],
      checkedCourses: [],
      semester1: [],
      semester2: [],
      semester3: [],
      semester4: [],
      semesterChosen: 0,
      maxCreditHoursAllowed: 21
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
    if (globalTotalCreditHours >= this.state.maxCreditHoursAllowed) {
      return;
    }

    const checkedCoursesList = [...this.state.checkedCourses];



    if (!(this.state.checkedCourses.includes(event.target.value)) && event.target.checked) {
      checkedCoursesList.push(event.target.value)
    }
    else if (checkedCoursesList.includes(event.target.value)) {
      return;
    }


    // if (this.state.semesterChosen === 1) {
    //   semesterOneCheckedCourses.push(event.target.value);
    //   this.setState({ semesterOne: semesterOneCheckedCourses });
    //   console.log(`Semester One: ${this.state.semesterOne}`);

    // }
    // else if (this.state.semesterChosen === 2) {
    //   semesterTwoCheckedCourses.push(event.target.value);
    //   this.setState({ semesterTwo: semesterTwoCheckedCourses });
    //   console.log(`Semester two: ${semesterTwoCheckedCourses}`);
    // }

    switch (this.state.semesterChosen) {
      case 1:
        const semesterOneCheckedCourses = [...this.state.semester1];
        semesterOneCheckedCourses.push(event.target.value);
        this.setState({ semester1: semesterOneCheckedCourses });
        break;

      case 2:
        const semesterTwoCheckedCourses = [...this.state.semester2];
        semesterTwoCheckedCourses.push(event.target.value);
        this.setState({ semester2: semesterTwoCheckedCourses });
        break;

      case 3:
        const semesterThreeCheckedCourses = [...this.state.semester3];
        semesterThreeCheckedCourses.push(event.target.value);
        this.setState({ semester3: semesterThreeCheckedCourses });
        break;

      case 4:
        const semesterFourCheckedCourses = [...this.state.semester4];
        semesterFourCheckedCourses.push(event.target.value);
        this.setState({ semester4: semesterFourCheckedCourses });
        break;

      default:
        console.log('default');

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

    console.log(this.state.semester1, this.state.semester2, this.state.semester3, this.state.semester4 )

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
        <div className={style.searchedCourses}>
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
            maxHoursAllowed={this.state.maxCreditHoursAllowed}
            courses={this.state.courses} />
        </div>
        <div className={style.detailedSemester}>
          <FullSemesterTable />
        </div>
      </div>
    );
  }
}

export default App;


//TODO: 1) update FullSemesterTable to show all divided semesters 
      //2) create new components to render courses corresponding with their respectfull semester
      //3) keep track of the total credit hour per semester. ensure hours dont surpass the maximum CH
      //4) add a delete function to remove courses from specific semeseter
