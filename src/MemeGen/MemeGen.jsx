import React, { Component } from 'react'
import Header from './Header'
import Meme from './Meme'
import './style.css'

export class MemeGen extends Component {
	render() {
		return (
			<div>
                <Header />
                <Meme />
            </div>
		)
	}
}

export default MemeGen