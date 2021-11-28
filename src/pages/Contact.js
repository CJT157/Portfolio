import React, { useState } from "react"

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    return (
        <div>
            <h3>Under Construction, not working at the moment!</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required />
                </div>
                <button type="submit">Send!</button>
            </form>
        </div>
    )
}