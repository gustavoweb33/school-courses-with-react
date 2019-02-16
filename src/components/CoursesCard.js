import React from 'react';


const CoursesCard = ({course, checkCheckbox}) => {
    const disabled = false;

    return (

        <div >
            <input type='checkbox'
                value={course}
                onClick={checkCheckbox}
                disabled = {disabled}
           />
            {course}
        </div>
    );
}
export default CoursesCard;