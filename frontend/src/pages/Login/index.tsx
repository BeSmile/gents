import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const BaseLogin = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {

    });

    function handleName(e) {
        setName(e.target.value);
    };

    function handlePassword(e: any):void {
        setPassword(e.target.value);
    };
    const { dispatch, history } = props;
    // console.log(history, 'history');
    return (
        <div>
            <div>
                name:
                <br/>
                <input onChange={handleName.bind(this)} value={name}/>
            </div>
            <div>
                password: <input onChange={handlePassword.bind(this)} value={password}/>
            </div>

            <div onClick={() => {
                dispatch({
                    type: 'login/login',
                    callback: function() {
                        console.log('callback');
                        history.push("/domain");
                    }
                })
            }}>点击登录</div>
        </div>
    )
}

const Login = connect()(withRouter(BaseLogin));

export default Login;
