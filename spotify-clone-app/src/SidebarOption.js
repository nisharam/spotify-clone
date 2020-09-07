import React from 'react';
import './SidebarOption.css'

function SidebarOption({title,Icon}) {
    return (
        <div className="sidebarOption">
            {Icon  && <Icon className="sidebarOption_icon" />} 
            {/* // if there is icon then render the above Icon. */}

            {Icon ? <h4>{title}</h4> : <p> {title}</p>}
        </div>
    )
}

export default SidebarOption
