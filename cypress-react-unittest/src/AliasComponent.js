import React from 'react'

function AliasComponent({props}) {
    return (
        <div>
            {props.fname}<br></br>
            {props.lname}
        </div>
    )
}

export default AliasComponent
