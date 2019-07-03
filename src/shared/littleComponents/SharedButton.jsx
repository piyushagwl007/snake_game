import React from 'react'

 const SharedButton = ({
     name,
     action,
     classes
 }) => {
    return (
        <div>
            <button onClick={action} className={"btn "+classes}>{name}</button>
        </div>
    )
}

export default SharedButton