import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hi {props.userName}</p>
            <p>There</p>
        </div>
    )
}

export default UserOutput
