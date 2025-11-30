import { useState } from "react"
import { useNavigate } from "react-router-dom";
function ProfileBox(){
    const [isCollabsed,setCollabsed] = useState(false);
    const clickAction=()=> setCollabsed(!isCollabsed);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/", { replace: true });
    };
    const dataLocal = localStorage.getItem("user");
    const adminName = JSON.parse(dataLocal)
    return(
        <div className="profile">
            <ul className="ul-main">
                <li onClick={clickAction}>
                {adminName.fullName} <i className={`fas fa-chevron-down ${isCollabsed?"ro":""}`}></i>
                    <ul className={`ul-sub ${isCollabsed? "":"h-s"} `}>
                        <li>
                        <button onClick={handleLogout} >Logout</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
export default ProfileBox