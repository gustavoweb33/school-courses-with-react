 import React from 'react';
 import '../containers/App.css';


const searchForm = (props) => {
    
    return (
        <div className = 'search'>
                Course: <input type='text' onChange={props.change} />
        </div>

    );
}

export default searchForm;