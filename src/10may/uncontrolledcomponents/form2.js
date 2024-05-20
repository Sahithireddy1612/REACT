import { useState, useRef } from "react";

function Uncontrolled() {
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;

        if (name.length > 10 || password.length > 10) {
            setError("Your name or password should be less than 10 characters.");
        } else {
            setError("");
            alert("Login Success");
        }
    }

    return (
        <div>
            <h1>Forms Using Uncontrolled Components</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Username:</label>
                    <input type="text" id="name" ref={nameRef} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" ref={passwordRef} />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Uncontrolled;
