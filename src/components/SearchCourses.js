import React from 'react';
import '../containers/SearchCourses.css';


const searchForm = (props) => {

    return (
        <div className='search'>
            <div >
                <label htmlFor='semester'>Choose a semester:</label>
                <select id='semester' onChange={props.semester}>
                    
                    <option >Choose a semester</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
                
            </div>
            Course: <input type='text' onChange={props.change} />

        </div>

    );
}

export default searchForm;