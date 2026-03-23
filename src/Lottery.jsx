import { genTicket, sum } from "./helper";
import "./Lottery.css";
import { useState } from "react";
export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    return (


        
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                 <span>{ticket[1]}</span>
                  <span>{ticket[2]}</span>
            </div>
            <br />
            <h3>{isWinning && "Congratulations, you won"}</h3>
            <br />
            <br />
            <button onClick={() => setTicket(genTicket(3))}>Get New Ticket</button>

        </div>
    )
}