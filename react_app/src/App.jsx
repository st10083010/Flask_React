import { useState } from "react";

const App = () => {
    const [returnCode, setReturnCode] = useState(1);
    const [returnMsg, setReturnMsg] = useState("");

    const onClick = async () => {
        // 點擊觸發API
        const url = "http://127.0.0.1:5000/";
        let response = await fetch(url)
                .then((response) => response.json());

        let { status, msg } = response;
        setReturnCode(status);
        setReturnMsg(msg);
    }

    const resetStatus = () => {
        // 重置狀態
        setReturnCode(1);
        setReturnMsg("");
    }
    
    return (
        <>
            <div style={{ display: 'flex', width: '100px', justifyContent: 'space-around' }}>
                <button type={'button'} onClick={onClick}>Click</button>
                <button type={'button'} onClick={resetStatus}>Reset</button>
            </div>
            <p>backend status code: {returnCode}</p>
            <p>backend return message: {returnMsg}</p>
        </>
    )
}

export default App;