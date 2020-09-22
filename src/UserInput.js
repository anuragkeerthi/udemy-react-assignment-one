import React from 'react';

const UserInput = (props) => {
    const style = {
        border : '2px solid red'
    }
    return (
        <div>
            <input style={style} type="text" onChange={props.changed} value={props.currentName} />
        </div>
    )
};

export default UserInput
