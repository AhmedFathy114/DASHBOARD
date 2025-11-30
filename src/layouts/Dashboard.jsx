import { useState } from "react"
import HeaderLayout from "./Header"
import LinkLayout from "./links"
function DashboardLayout({children}){
    const [isFull,setISFull] = useState(true);
    const changFull = ()=> setISFull(!isFull);
    return(
        <div className="main">
                <LinkLayout full={isFull}/>
            <section className={`page-data ${isFull?"":"w100"}`}>
                <HeaderLayout action={changFull}/>
                <div className="data">
                    {children}
                </div>
                <footer>Created By Our Team</footer>
            </section>
        </div>
    )

}
export default DashboardLayout