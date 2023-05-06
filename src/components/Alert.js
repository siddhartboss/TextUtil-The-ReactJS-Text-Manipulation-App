import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const lowercaseword = word.toLowerCase();
        return lowercaseword.charAt(0).toUpperCase()+lowercaseword.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}
        </div>}
        </div>
    )
}
