import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({firstName: "", lastName: "", email: "", comments: "", isFriendly: true, employment: ""})
    
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
                onChange={handleChange}
                checked={formData.isFriendly}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br/><br/>
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    checked={formData.employment === 'unemployed'}
                    onChange={handleChange}
                    value="unemployed"
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    checked={formData.employment === 'part-time'}
                    onChange={handleChange}
                    value="part-time"
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    checked={formData.employment === 'full-time'}
                    onChange={handleChange}
                    value="full-time"
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
        </form>
    )
}