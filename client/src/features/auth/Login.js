import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { useLoginMutation } from './authApiSlice';

import { Link } from 'react-router-dom';




const Login = () => {

    const userRef = useRef();
    const errRef = useRef();
    const [ user, setUser] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus()
    }, []);

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({ user, pwd}).unwrap();
            dispatch(setCredentials({ ...userData, user }))
            setUser('');
            setPwd('');
            navigate('/main')
        } catch (err) {
            if (!err?.response) {
                setErrMsg('handlesubmit didnt get a response')
            } else if (err?.response.statusCode === 400) {
                setErrMsg('Missing username')
            } else if (err?.response.statusCode === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus();

        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePwdInput}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <button><Link to='/create'>Create User</Link></button>
        </section>
    )

    return content
}


export default Login;
