import React from "react"
// import './style.css'

export default function Form2() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        password2: "",
        okayToEmail: false
    })
    
    console.log(formData);
    
    function handleChange(event) {
        const {name, value, checked, type} = event.target
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            } 
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.password === formData.password2) {
            console.log('Successfully signed up');

            if (formData.okayToEmail) {
            console.log("Thanks for signing up for our newsletter!" );
            }

        } else{
            console.log('passwords to not match');
        }
        
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="password2"
                    onChange={handleChange}
                    value={formData.password2}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        checked={formData.okayToEmail}
                        onChange={handleChange}

                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
