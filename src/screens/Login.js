import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signupUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.success) {
            alert('Login Successful')
            localStorage.setItem("authToken", data.authToken)
            navigate("/")
        } else {
            alert('Please Enter valid Credentials!')
            console.log(data)
        }
    }
    return (
        <div>
            <h1 className="text-center">Login Here!</h1>
            <div className="container mb-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="..." />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={signupUser}>
                            <div className="mb-3">
                                <label forhtml="email1" className="form-label">Email: </label>
                                <input
                                    value={email} className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-3">
                                <label forhtml="password1" className="form-label">Password: </label>
                                <input
                                    value={password} className="form-control"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <input type="submit" value="Login" class="m3 btn btn-primary bg-info" />
                            <Link to="/createuser" className="m3 btn btn-danger">New User?</Link>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div><Footer></Footer></div>
        </div>
    )
}

