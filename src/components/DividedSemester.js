import React from 'react';
import style from '../containers/DividedSemester.module.css';

export const globalSemester = {
    oneTotalHours: 0,
    twoTotalHours: 0,
    threeTotalHours: 0,
    fourTotalHours: 0,
}

const maxHoursCheck = (hours) => {


    if (hours >= 18) {
        return false;
    }
    return true;
}

const maxHours = 18;

const DividedSemester = (props) => {
    const errorMessage = <p className={style.error}>You have reached the maximum hours allowed for this semester.
    You must first delete some classes before you can add more</p>
    const courses = props.courses;

    const propsSemester = {
        one: props.semesterOne,
        two: props.semesterTwo,
        three: props.semesterThree,
        four: props.semesterFour
    }

    const semester = {
        one: [],
        two: [],
        three: [],
        four: [],
        oneTotalHours: 0,
        twoTotalHours: 0,
        threeTotalHours: 0,
        fourTotalHours: 0,
    }

    for (let i = 0; i < courses.length; i++) {
        if (propsSemester.one.includes(courses[i].courseId)
            && maxHoursCheck(semester.oneTotalHours)) {
            semester.one.push(courses[i]);
            semester.oneTotalHours += courses[i].creditHours;

        }
        else if (propsSemester.two.includes(courses[i].courseId)
            && maxHoursCheck(semester.twoTotalHours)) {
            semester.two.push(courses[i]);
            semester.twoTotalHours += courses[i].creditHours;
        }
        else if (propsSemester.three.includes(courses[i].courseId)
            && maxHoursCheck(semester.threeTotalHours)) {
            semester.three.push(courses[i]);
            semester.threeTotalHours += courses[i].creditHours;
        }
        else if (propsSemester.four.includes(courses[i].courseId)
            && maxHoursCheck(semester.fourTotalHours)) {
            semester.four.push(courses[i]);
            semester.fourTotalHours += courses[i].creditHours;
        }
    }


    globalSemester.oneTotalHours = semester.oneTotalHours;
    globalSemester.twoTotalHours = semester.twoTotalHours;
    globalSemester.threeTotalHours = semester.threeTotalHours;
    globalSemester.fourTotalHours = semester.fourTotalHours;


    return (
        <div className={style.grid}>

            <div>
                <h2>Semester One</h2>

                {
                    semester.one.map(course => {
                        return (
                            <div key={course.courseId} className={style.innerGrid}>
                                <p key={course.courseID}>
                                    {course.courseId}
                                    {course.description}
                                </p>

                                <p>{course.creditHours} </p>
                                <button value={course.courseId} onClick={props.delete}>X</button>
                            </div>

                        )
                    })

                }
                <h3>Total Credit Hours : {semester.oneTotalHours}</h3>
                <h4>{semester.oneTotalHours >= maxHours ? errorMessage : null}</h4>
            </div>



            <div>
                <h2>Semester Two</h2>
                {
                    semester.two.map(course => {
                        return (
                            <div key={course.courseId} className={style.innerGrid}>
                                <p key={course.courseID}>
                                    {course.courseId}
                                    {course.description}
                                </p>

                                <p>{course.creditHours} </p>
                                <button value={course.courseId} onClick={props.delete}>X</button>
                            </div>
                        )
                    })
                }
                <h3>Total Credit Hours : {semester.twoTotalHours}</h3>
                <h4>{semester.twoTotalHours >= maxHours ? errorMessage : null}</h4>
            </div>



            <div>
                <h2>Semester Three</h2>
                {
                    semester.three.map(course => {
                        return (
                            <div key={course.courseId} className={style.innerGrid}>
                                <p key={course.courseID}>
                                    {course.courseId}
                                    {course.description}
                                </p>

                                <p>{course.creditHours} </p>
                                <button value={course.courseId} onClick={props.delete}>X</button>
                            </div>
                        )
                    })

                }
                <h3>Total Credit Hours : {semester.threeTotalHours}</h3>
                <h4>{semester.threeTotalHours >= maxHours ? errorMessage : null}</h4>
            </div>



            <div>
                <h2>Semester Four</h2>

                {
                    semester.four.map(course => {
                        return (
                            <div key={course.courseId} className={style.innerGrid}>
                                <p key={course.courseID}>
                                    {course.courseId}
                                    {course.description}
                                </p>


                                <p>{course.creditHours} </p>
                                <button value={course.courseId} onClick={props.delete}>X</button>
                            </div>
                        )
                    })
                }
                <h3>Total Credit Hours : {semester.fourTotalHours}</h3>
                <h4>{semester.fourTotalHours >= maxHours ? errorMessage : null}</h4>
            </div>


        </div>
    )

}

export default DividedSemester;