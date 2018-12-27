import React from 'react';
import '../containers/CourseCards.css'

const CoursesCard = (props) => {
    return (
        <div>
            <div className='container'>
                <input type='checkbox' value={props.enrollment} onChange={props.check} />{props.enrollment}
            </div>
        </div>
    );
}

export default CoursesCard;