import { useState } from "react"

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "@sk",
        remarks: "great Job!",
        rating: 4
    }])
    return(
        <div>
            <h3><i>All Comments</i></h3>
        </div>
    )
}