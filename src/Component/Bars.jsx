function BarsBox({action}){
    return(
        <div className="bars" onClick={action}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default BarsBox