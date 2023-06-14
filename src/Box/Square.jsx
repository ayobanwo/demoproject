import React from 'react'


function Square({on, toggleHandler}) {
    const styles = {
        backgroundColor : on ? 'white' : 'black'
    }
	return (
		<div className="box" style={styles} onClick={toggleHandler}> </div>
	)
}

export default Square