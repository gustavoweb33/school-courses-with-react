import React from 'react';
import '../containers/CourseCards.css'

const CoursesCard = (props) => {

    return (
        <div className='container'>
            <input type='checkbox' value={props.enrollment} onClick={props.checkCheckbox} className='box' />{props.enrollment}
            
            
        </div>
    );
}

export default CoursesCard;