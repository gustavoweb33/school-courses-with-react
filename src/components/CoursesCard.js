import React from 'react';

const CoursesCard = (props) => {
    console.log(props.enrollment);
    return (
        <div>
            <p>{props.enrollment}</p>
        </div>
    );
}

export default CoursesCard;