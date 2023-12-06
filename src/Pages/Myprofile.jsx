import React, { useState } from 'react';
import './MyprofileStyle.css';

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log("Login with:", { email, password });
    };

    return (
        <form className="auth-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Add registration logic here
        console.log("Register with:", { firstName, lastName, dob, email, password });
    };

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Repeat Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
};

export default AuthPage;
