 import React from 'react';


const searchForm = (props) => {
    
    return (
        <div>
                Course: <input type='text' onChange={props.change} />
                {/*<button onClick={props.click}> Search </button>*/}
        
        </div>

    );
}

export default searchForm;