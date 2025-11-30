import SigninForm from "../layouts/LogForm"
function LoginPage(){
    return(
        <div className="log-page">
            <div className="log-head">Heart Center</div>
            <div className="log-body">
                <SigninForm/>
            </div>
            <div className="log-foot">Created By Our Team</div>
        </div> 
    )
}
export default LoginPage