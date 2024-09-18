import { useState } from "react";
import './login.css'

const Login = () => {
    const [loginCode, setLoginCode] = useState(1);
    const [loginMsg, setLoginMsg] = useState("");

    const onLogin = async () => {
        // 點擊觸發API
        const url = "http://127.0.0.1:5000/api/login";
        let response = await fetch(url)
                .then((response) => response.json());

        let { status, msg } = response;
        setLoginCode(status);
        setLoginMsg(msg);
    }

    return (
        <>
            <p>Here is Login page :)</p>
            <button type={'button'} onClick={onLogin}>Login</button>
            <p className="return_code">login return code: {loginCode}</p>
            <p className="return_msg">login return msg: {loginMsg}</p>
        </>
    )
}

export default Login;