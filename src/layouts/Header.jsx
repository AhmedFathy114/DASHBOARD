import BarsBox from "../Component/Bars"
import ProfileBox from "../Component/Profile"

function HeaderLayout({action}){
    return(
        <header>
           <BarsBox action={action}/>
           <ProfileBox/> 
        </header>
    )
}
export default HeaderLayout