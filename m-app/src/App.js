import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    return (
        <div className="logincon">
            <div className="liginsecon">
                <h1 className="signhead">Sign In</h1>
                <input className="usernameinpt" type="text" placeholder="Enter Username" />
                <input className="usernameinpt" type="text" placeholder="Enter Password" />
                <p className="forgetpasswd">Forget Password</p>
                <button className="loginbtn" onClick={() => navigate('/hari-tPage')}>Login Now</button>
                <button className="creareaccbtn" onClick={() => navigate('/create-account')}>
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default App;
