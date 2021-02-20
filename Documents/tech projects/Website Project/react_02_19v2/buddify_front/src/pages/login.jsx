import React from "react";
import { LoginDialog } from './../auth/LoginDialog';
import { useHistory } from "react-router-dom";

const LoginPage = () =>{
    
    return(
        <div class="container-login">
            <LoginDialog onSuccess={()=>usehistory().push('/home')} onFail={()=>{}}/>
        </div>
    );
    
};
export default LoginPage;