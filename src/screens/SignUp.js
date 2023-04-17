import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signupUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()

        if(!data.success){
            alert('Please check your username and password')
            console.log(data)
        }
        else{
            alert('Successfully Registered!')
        }
    }

    return (
        <div>
            <h1 className="text-center">Sign Up Here!</h1>
            <div className="container mb-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={signupUser}>
                            <div className="mb-3">
                                <label forhtml="name1" className="form-label">Email: </label>
                                <input
                                    value={name} className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                    type="name"
                                    placeholder="Name"
                                />
                            </div>
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

export default SignUp