import React, { useState } from "react";
import "./styles.css";

function Example2() {
    const [userState, setUserState] = useState({
        name: "Jack",
        email: "jack@email.com",
        age: 0,
    });

    const handleChange = (e) =>
        setUserState({
            ...userState,
            [e.target.name]: e.target.value,
        });

    return (
        <div>
            <p>{userState.name}</p>
            <p>{userState.email}</p>
            <p>{userState.age}</p>

            <hr />

            <input
                className="input"
                type="text"
                placeholder="name"
                name="name"
                value={userState.name}
                onChange={handleChange}
            />

            <input
                className="input"
                type="text"
                placeholder="email"
                name="email"
                value={userState.email}
                onChange={handleChange}
            />

            <input
                className="input"
                type="text"
                placeholder="age"
                name="age"
                value={userState.age}
                onChange={handleChange}
            />
        </div>
    );
}

export default Example2;
