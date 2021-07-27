import {useState} from 'react'
function SignUp(){
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const signUpUser = (e) => {
        e.preventDefault()
        console.log('signing up...')
        
    }

    return(
        <div className="sign-up-container">
            <h1>Sign Up</h1>
            <form onSubmit={(e) => signUpUser(e)}>
                <label className="form-label">
                    Email:&nbsp;
                    <input
                        name="email"
                        type="text"
                        className="form-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                <label className="form-label">
                    Password:&nbsp;
                    <input
                        name="pasword"
                        type="password"
                        className="form-input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <button 
                    className="submit-btn"
                    type="submit"
                > Submit
                </button>
            </form>
        </div>
    )
}

export default SignUp