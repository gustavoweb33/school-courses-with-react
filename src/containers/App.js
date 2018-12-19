import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import DisplayCourse from '../components/DisplayCourses';

//import './App.css';
import courses from '../courses';

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: courses,
      searchCourses: []
    }
  }

  getInputValue = (event) => {
    let name = event.target.value;
    const schoolCourses = this.state.courses;

    let filteredCourses = schoolCourses.filter((course) => {
      return course.prefix.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({ searchCourses: filteredCourses })
    
  }

  //  returnNewCourses = () => {
  //   console.log(this.state.searchCourses)
  // }


  render() {

    return (
      <div>
        <SearchForm
          courses={this.state.courses}
          change={this.getInputValue} />

        {
          this.state.searchCourses.length !== 0 ? 
          <div>
            <DisplayCourse newCourses={this.state.searchCourses} />
          </div>
            : null
        }

      </div>
    );
  }
}

export default App;

//create an input -> takes its value and pass it to forms.js -> loop through the courses that match the value and pass it to selectCourses.js to render them.