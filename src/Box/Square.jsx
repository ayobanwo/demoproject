import React from 'react'


function Square({on, toggle, id}) {
    const styles = {
        backgroundColor : on ? 'white' : 'black'
    }
	return (
		<div className="box" style={styles} onClick={ ()=> toggle(id)}> </div>
	)
}

export default Square