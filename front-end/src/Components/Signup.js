import React, {useState} from 'react';

const Signup = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Signup = ()=>{
        console.warn(name, email, password);
    }
    return(
        <div className='container'>
            <form>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} id="name" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="password" />
            </div>
            <button type="submit" onClick={Signup} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Signup;