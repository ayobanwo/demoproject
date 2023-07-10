import React, {useState} from "react"
import boxes from "./Boxes"
// import './style.css'
import Square from "./Square"

export default function Box() {
    const [squares, setSquare] = useState(boxes)

    // function toggle(id) {
    //     setSquare(prevSquares => {
    //         const newSquares = []
    //         for (let i = 0; i < prevSquares.length; i++) {
    //             let currentSquare = prevSquares[i];
    //             if (currentSquare.id === id ) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on : !currentSquare.on
    //                 }
    //                 newSquares.push(updatedSquare)
    //             } else{
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })
    // }

    function toggle(id) {
         setSquare(prevSquares => {
            return prevSquares.map(square => {
                return square.id === id ? { ...square, on: !square.on } : square
            })
        })
    }
    
    const squareElements = squares.map( square => (
        <Square 
            key ={square.id} 
            on={square.on} 
            toggleHandler={ () => toggle(square.id) }
        />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
