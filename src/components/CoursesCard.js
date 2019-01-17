import React from 'react';

const CoursesCard = (props) => {

    return (

        <div >
            <input type='checkbox'
                value={props.course}
                onClick={props.checkCheckbox}
            />
            {props.course}
        </div>
    );
}

export default CoursesCard;