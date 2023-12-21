import {GoogleLogin} from "react-google-login";
import {useAlert } from "react-alert"; 

const clientId = "140268382331-lbseh1a39ptauhpil2nk7m7h8fn5q4j6.apps.googleusercontent.com";


function Login(){
    const alert = useAlert();
    const onSuccess = (res) =>{
        alert.success(res.profileObj)
    }
    const onFailure = (res) =>{
        alert.error(res);
    }

    return (
        <div className="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'singe_host_origin'}
            isSignedIn = {true} />
        </div>
    )
}

export default Login;

