import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    })
    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{ ...currData, [event.target.name] : event.target.value}
        })
    }
    let handleSubmit = (event) => {
        console.log(formData)
        event.preventDefault();
        setFormData({
              username: "",
              remarks: "",
              rating: 5,
        })
    }
    return(
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="username">Username</label><br /><br />
                <input type="text" placeholder="username" id="username" name="username" onChange={handleInputChange} value={formData.username} /><br /><br />
                <label htmlFor="remark">Remark</label><br /><br />
                <textarea name="remarks" id="remarks" value={formData.remarks} onChange={handleInputChange}> Remarks</textarea><br /><br />
                <br /><br />
                <label htmlFor="rating">Rating</label><br /><br />
                <input type="number" placeholder="rating" name="rating" id="rating"  value={formData.rating} onChange={handleInputChange} /><br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}