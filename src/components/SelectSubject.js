import React from 'react'

const CourseSubject = ({ courses, getSubject }) => {

    const subjectsArray = courses.map(course => course.prefix)
    const uniqueSubjects = [...new Set(subjectsArray)];

    return (
        <div>
           Subject
            <select onChange={getSubject}>
                <option value={' '}>Subject</option>
                {
                    uniqueSubjects.map(subject =>
                        <option
                            key={subject}
                            value={subject}>
                            {subject}
                        </option>
                    )
                }
            </select>
        </div>
    )
}

export default CourseSubject;