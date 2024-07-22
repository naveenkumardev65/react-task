import React, { useState } from "react";
import styles from './styles.module.css'

function SignUp() {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please enter the name')
        } else if (!password) {
            alert('Please enter the password')
        }


        const signUpDetails = window.localStorage.getItem('details');
        console.log(JSON.parse(signUpDetails))


        if (name && password) {
            const currentData = Object.assign({}, { name, password });
            window.localStorage.setItem('details', JSON.stringify([...signUpDetails, currentData]))
        }

    }

    return <div className={styles.formContainer}>
        <h3>SignUp form</h3>
        <form>
            <div className={styles.inputContainer}>
                <div>
                    <input className={styles.input} placeholder="Username" type="text" name="usename" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input className={styles.input} placeholder="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>

            <button className={styles.btn} onClick={handleSubmit}>Submit</button>
        </form>
    </div>;
}

export default SignUp;
