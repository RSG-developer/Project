import React, { useState } from 'react';

export default function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        const loginData = {
          username,
          password,
        };
    
        console.log(loginData);
      };
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" id="login">
            <div className="shadow-lg p-4 bg-body-tertiary rounded col-7 text-center">
                <h3 className="mb-4 ">Login</h3>
                <form action="/home" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <span></span>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
