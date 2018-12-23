import React from 'react';
import '../containers/CourseCards.css'

const CoursesCard = (props) => {
    return (
        <div>
            <div className='container'>
                <h6>{props.enrollment}</h6>
                <input type='checkbox' value={props.enrollment} />{props.enrollment}
            </div>
        </div>
    );
}

export default CoursesCard;