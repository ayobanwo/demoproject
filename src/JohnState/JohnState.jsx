import React from "react"
import avatar from "./images/user.png"

import Star from "./Star"
// import "./style.css"

export default function JohnState() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact( prevContact => {
            return {
                ...prevContact, isFavorite : !contact.isFavorite
            }
        } )
    }
    
    return (
        <main>
            <article className="card">
                <img src={avatar} className="card--image" alt="" />
                <div className="card--info">
                    <Star handleClick = {toggleFavorite} isFilled={contact.isFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}