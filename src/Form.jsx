import { useState } from "react"
export default function Form() {
    // let [fullName, setFullName] = useState("")
    // let [username, setUserName] = useState("")
    let [formData, setFormData] =useState({
        fullName: "",
        username: "",
        password: "",
    })


    // let handleNameChange = (event) => {
    //     setFullName(event.target.value)
    // }

    // let handleUsername = (event) => {
    //     setUserName(event.target.value)
    // }
    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;


        setFormData((currData) => {
            // currData[fieldName] = newValue;
            // return{ ...currData };
            return {...currData, [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
            password: "",
        })
    }
    return (
        <form onSubmit={handleSubmit}>
             <label htmlFor="fullname">FullName</label>
            <br />
            <br />
        <input type="text" 
         placeholder="enter full name"
         value={formData.fullName} 
         onChange={handleInputChange}
         id="fullname"
         name="fullName"/>
         <br />
         <br />
            <label htmlFor="username">UserName</label>
            <br />
            <br />
        <input type="text" 
         placeholder="enter username"
         value={formData.password} 
         onChange={handleInputChange}
         id="username"
         name="username"/>
         
        <br />
        <br />
                    <label htmlFor="password">Password</label>
            <br />
            <br />
        <input type="password" 
         placeholder="enter password"
         value={formData.username} 
         onChange={handleInputChange}
         id="password"
         name="password"/>
        <button>Submit</button>
        </form>
    )
}