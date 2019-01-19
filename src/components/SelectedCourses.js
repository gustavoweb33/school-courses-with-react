import React from 'react';
import style from '../containers/SelectedCourses.module.css';
//import style from '../containers/errorStyles.module.css';

export let globalFilteredCourses = [];
export let globalTotalCreditHours = 0;

const SemesterTables = (props) => {
    let warningStyle = null;
    const errorMessage = <p>You have surpassed the maximum credit hours allowed. 
    You must delete some courses before adding more.</p>;

    const userChosenSemester = props.semesterValue;
    const userChosenCourses = props.chosenCourses;
    let totalCreditHours = 0;

    const filteredCourses = [];
    for (let i = 0; i < props.courses.length; i++) {
        if (userChosenCourses.includes(props.courses[i].courseId)) {
            filteredCourses.push(props.courses[i])
        }
    }

    filteredCourses.forEach(course => totalCreditHours += course.creditHours)

    if (totalCreditHours >= props.maxHoursAllowed) {
        warningStyle = style.errorColor;
    }
    globalTotalCreditHours = totalCreditHours;
    globalFilteredCourses = filteredCourses;
  
    return (
        <div className={style.backColor}>
            <div>
                <h3>Semester:  {userChosenSemester}</h3>

                {/*
                    userChosenCourses.map((course, index) => {
                        return (
                            <div key={index}>
                                <li key={course}> {course}</li>
                                <button value={course} onClick={props.deleteCourse}>Delete</button>
                            </div>
                        )
                    })
               */}
                <div className={style.gridContainer}>
                    {
                        filteredCourses.map((course, index) => {

                            return (

                                <div key={index} className={[style.space,  style.subGridContainer].join(' ')}>

                                    <li 
                                        key={course.courseId}>
                                        {course.courseId}
                                         ({course.creditHours})
                                    </li>
                                    <button value={course.courseId} onClick={props.deleteCourse}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>

                <h3 className={warningStyle}>Total Credit Hours: {totalCreditHours}</h3>
                <span className={style.errorMessage}>{totalCreditHours >= 21 ? errorMessage : null}</span>
            </div>
        </div>
    );

}

export default SemesterTables;