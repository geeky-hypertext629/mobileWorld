import {GoogleLogout} from "react-google-login";
import {useAlert } from "react-alert"; 

const clientId = "140268382331-lbseh1a39ptauhpil2nk7m7h8fn5q4j6.apps.googleusercontent.com";


function Logout(){

 const alert = useAlert();
    const onSuccess = () =>{
        alert.success("Logout Success");
    }

    return(
        <div className="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess} />
        </div>
    )
}

export default Logout;