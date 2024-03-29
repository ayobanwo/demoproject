import React from 'react'
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

function Star(props) {
    const starIcon = props.isFilled ? starFilled : starEmpty
	return (
		<img 
            src={starIcon} 
            className="card--favorite"
            onClick={props.handleClick} alt=""
        />
	)
}

export default Star