import React, { useState } from "react";

function Login() {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = () => {

        const signUpDetails = window.localStorage.getItem();
    }

    return <div>
        <h2>Login form</h2>
        <form>
            <div>
                <input type="text" name="usename" onChange={(e) => setPassword(e.target.value)} />

            </div>
            <div>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>;
}

export default Login;
