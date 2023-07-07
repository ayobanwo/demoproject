import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({firstName: "", lastName: "", email: "", comments: "", isFriendly: true})
    
    console.log(formData)
    
    function handleChange(event) {
       
        const {name, value, checked, type} = event.target
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            /> <br/><br/>
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            /> <br/><br/>
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <br/><br/>
            <textarea value={formData.comments} name="comments" onChange={handleChange} placeholder="Comments" />
            <br/><br/>
            <input 
                type="checkbox" 
                id="isFriendly" 
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
        </form>
    )
}