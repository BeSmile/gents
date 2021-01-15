import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@atom/Snackbar';

const mapRouteToProps = state => ({
    toasts: state.msmq.toasts,
});

const startMSMQ = (dispatch) => {
    dispatch({
        type: 'msmq/messageWatcher',
    });
    dispatch({
        type: 'msmq/messageScheduler',
    });
    dispatch = null;
}


const ToastUI = (props) => {
    const { toasts, dispatch } = props;
    useEffect(() => {
        console.log('init once');
        startMSMQ(dispatch);
    }, []);
    return (
        <React.Fragment>
            {toasts.map((toast, index) => (
                <Snackbar index={index} toast={toast} key={toast}/>
            ))}
        </React.Fragment>
    )
};
const Toast = connect(mapRouteToProps)(ToastUI);

export default Toast;
