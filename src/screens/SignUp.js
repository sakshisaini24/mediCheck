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
                <form onSubmit={signupUser}>
                    <div className="mb-3">
                        <label forhtml="name1" className="form-label">Name: </label>
                        <input
                            value={name} className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            type="text"
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
                    <input type="submit" value="Sign Up" class="m3 btn btn-primary bg-info" />
                    <Link to="/login" className="m3 btn btn-danger">Already a User</Link>
                </form>
            </div>
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