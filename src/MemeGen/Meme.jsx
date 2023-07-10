import React, { useState } from "react"
import memesData from "./memesData.js"

export default function Meme() {
    // const [memeImage, setMemeImage] = useState("")
    const [meme, setMeme] = useState({
        topText : '',
        bottomText: '',
        randomImage: ''
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, randomImage : url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMemeData =>{
            return {
                ...prevMemeData,
                [name]: value
            }
        })
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme--text top"  >{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}