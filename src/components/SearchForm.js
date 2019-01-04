import React from 'react';
import '../containers/App.css';


const searchForm = (props) => {

    return (
        <div className='search'>
            <form >
                <label htmlFor='semester'>Choose a semester:</label>
                <select id='semester' onChange={props.submit}>
                    
                    <option >Choose a semester</option>
                    <option value={0}>1</option>
                    <option value={1}>2</option>
                    <option value={2}>3</option>
                    <option value={3}>4</option>
                </select>
                <button onClick={props.click}>Submit</button>
            </form>
            Course: <input type='text' onChange={props.change} />

        </div>

    );
}

export default searchForm;