import React, { Component } from 'react';
import courses from '../courses';
import SearchCourses from '../components/SearchCourses';
import DisplayCourse from '../components/DisplayCourses';
import DividedSemester from '../components/DividedSemester';
import { globalSemester } from '../components/DividedSemester';
import SelectSubject from '../components/SelectSubject';
import RenderCourses from '../components/RenderCourses';
import style from '../containers/App.module.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: courses,
      searchCourses: [],
      checkedCourses: [],
      subjectCourses: [],
      semester1: [],
      semester2: [],
      semester3: [],
      semester4: [],
      semesterChosen: 0,
      maxCreditHoursAllowed: 18
    }
  }

  getCourseSearchValue = (event) => {
    const searchedCourse = event.target.value;

    if (searchedCourse.length === 0) {
      this.setState({ searchCourses: [] });
      return;
    }

    const schoolCourses = this.state.courses;

    const filteredCourses = schoolCourses.filter((course) => {
      return course.prefix.toLowerCase().includes(searchedCourse.toLowerCase());
    });


    this.setState({ searchCourses: filteredCourses })

  }

  getSemesterValue = (event) => {
    const selectedSemester = Number(event.target.value);
    this.setState({ semesterChosen: selectedSemester });

  }

  getCheckBoxValue = (event) => {

    const allSemesters = [...this.state.semester1, ...this.state.semester2, ...this.state.semester3, ...this.state.semester4];

    if (!(allSemesters.includes(event.target.value))
      && event.target.checked) {

      switch (this.state.semesterChosen) {
        case 1:
          if (globalSemester.oneTotalHours >= this.state.maxCreditHoursAllowed) {
            alert('too many hours')
            return;
          }
          const semesterOneCheckedCourses = [...this.state.semester1];
          semesterOneCheckedCourses.push(event.target.value);
          this.setState({ semester1: semesterOneCheckedCourses });
          break;

        case 2:
          if (globalSemester.twoTotalHours >= this.state.maxCreditHoursAllowed) {
            alert('too many hours')
            return;
          }
          const semesterTwoCheckedCourses = [...this.state.semester2];
          semesterTwoCheckedCourses.push(event.target.value);
          this.setState({ semester2: semesterTwoCheckedCourses });
          break;

        case 3:
          if (globalSemester.threeTotalHours >= this.state.maxCreditHoursAllowed) {
            alert('too many hours')
            return;

          }
          const semesterThreeCheckedCourses = [...this.state.semester3];
          semesterThreeCheckedCourses.push(event.target.value);
          this.setState({ semester3: semesterThreeCheckedCourses });
          break;

        case 4:
          if (globalSemester.fourTotalHours >= this.state.maxCreditHoursAllowed) {
            alert('too many hours')
            return;
          }
          const semesterFourCheckedCourses = [...this.state.semester4];
          semesterFourCheckedCourses.push(event.target.value);
          this.setState({ semester4: semesterFourCheckedCourses });
          break;

        default:
          alert('Please choose a semester')

      }
    }
    else if (allSemesters.includes(event.target.value)) {
      return;
    }



  }


  removeClass = (event) => {

    const course = event.target.value;
    const userChosenSemester = this.state.semesterChosen;
    let semester = [];

    switch (userChosenSemester) {
      case 1:
        semester = [...this.state.semester1];
        break;

      case 2:
        semester = [...this.state.semester2];
        break;

      case 3:
        semester = [...this.state.semester3];
        break;

      case 4:
        semester = [...this.state.semester4];
        break;

      default:
        alert('choose a semester');
    }

    for (let i = 0; i < semester.length; i++) {
      if (course === semester[i]) {
        semester.splice(i, 1);
      }
    }

    switch (userChosenSemester) {
      case 1:
        this.setState({ semester1: semester });
        break;

      case 2:
        this.setState({ semester2: semester });
        break;

      case 3:
        this.setState({ semester3: semester });
        break;

      case 4:
        this.setState({ semester4: semester });
        break;

      default:
        alert('choose a semester');
    }
  }

  getSelectedSubject = (event) => {
    const subject = event.target.value;
    const courses = this.state.courses;

    if(subject === ' ') {
      return;
    }

    const filteredCourses = courses.filter(course => course.courseId.toLowerCase().includes(subject.toLowerCase()));

    this.setState({ subjectCourses: filteredCourses });
  }

  render() {
    let searchCoursesChecked = null;
    if (this.state.searchCourses.length !== 0) {

      searchCoursesChecked = (
        <div className={style.displayCourses}>

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
            change={this.getCourseSearchValue}
            semester={this.getSemesterValue} />
          
          <SelectSubject
            courses={this.state.courses}
            getSubject={this.getSelectedSubject} />
        </div>

        <div className={style.color}>
          <h3>Courses</h3>
          <RenderCourses
            displayCourses={this.state.subjectCourses}
            checkCheckbox={this.getCheckBoxValue} />
        </div>

        <DividedSemester
          semesterOne={this.state.semester1}
          semesterTwo={this.state.semester2}
          semesterThree={this.state.semester3}
          semesterFour={this.state.semester4}
          delete={this.removeClass}
          courses={this.state.courses} />

      </div>
    );
  }
}

export default App;

