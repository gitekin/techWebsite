import React, { useState } from 'react';
import './MyprofileStyle.css';
import axios from 'axios';

const AuthPage = () => {
    const [isLoginView, setIsLoginView] = useState(true);

    const toggleView = () => {
        setIsLoginView(!isLoginView);
    };

    return (
        <div className="auth-container">
            <div className="toggle-buttons">
                <button onClick={() => setIsLoginView(true)} disabled={isLoginView}>Login</button>
                <button onClick={() => setIsLoginView(false)} disabled={!isLoginView}>Register</button>
            </div>

            {isLoginView ? <LoginForm /> : <RegisterForm />}
        </div>
    );
};

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [requests, setRequests] = useState([]);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            setIsAdmin(true);
            try {
                const response = await axios.get('http://localhost:8080/api/requests/getall');
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        } else {
            alert("Incorrect admin credentials");
        }
    };

    return (
        <div>
            <form className="auth-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>

            {isAdmin && (
                <div>
                    <h2>Received Requests</h2>
                    {requests.map((request, index) => (
                        <div key={request._id || index}>
                            <p><strong>Name:</strong> {request.name}</p>
                            <p><strong>Email:</strong> {request.email}</p>
                            <p><strong>Message:</strong> {request.message}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    async function save(event) {
        event.preventDefault();
        setMessage("");
        setIsSuccess(false);

        if (password !== repeatPassword) {
            setMessage("Passwords do not match!");
            setIsSuccess(false);
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/v1/user/save", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            });
            setMessage("User Registration Successful");
            setIsSuccess(true);
            // Clear the form fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setRepeatPassword("");
        } catch (err) {
            const backendError = err.response && err.response.data ? err.response.data : "UnknownError";
            if (backendError === "EmailExists") {
                setMessage("Email already exists.");
            } else {
                setMessage("User Registration Failed");
            }
            setIsSuccess(false);
        }
    }

    return (
        <form className="auth-form" onSubmit={save}>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Repeat Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />

            {message && (
                <div className={isSuccess ? "auth-message success" : "auth-message error"}>
                    {message}
                </div>
            )}

            <button type="submit">Register</button>
        </form>
    );
};




export default AuthPage;