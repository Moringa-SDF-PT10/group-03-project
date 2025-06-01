import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        // authentication logic will come here
        // upon successful login, redirect to profile page
        navigate('/profile');
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;