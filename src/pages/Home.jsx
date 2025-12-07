import { useState , useEffect } from "react";
import api from "./Api";
function DashHomePage(){
    const [worker,setWorker] = useState([]);
    const [customer,setCustomer] = useState([]);
    const [services, setServices] = useState([]);
    const token = localStorage.getItem("token");
    const fetch = async ()=>{
        try{
            const response = await api.get("/users/getAllWorkers",
                {
                    headers:
                    {
                Authorization: `Bearer ${token}`,
                    }
                }
            );
            const result = response.data.data.workers;
            setWorker(result)
            console.log(result);
            
        }catch(error){
            console.log(error);
        }
    }
    const Fetch = async () =>{
        try{
            const response = await api.get("/users/getAllCustomers",
                {headers:
                    {
                Authorization: `Bearer ${token}`,
                    }
                }
            );
            const result = response.data.data.customers;
            setCustomer(result)
            console.log(result);
            
        }catch(error){
            console.log(error);
        }
    }
    const Foetch = async () =>{
        try{
            const response = await api.get("/services/getAllServices",
            {headers: 
                {
                Authorization: `Bearer ${token}`,
                }
                }
            );
            const result = response.data.data;
            setServices(result);
            console.log(result);;
        }catch(error){
            console.log(error);
            
        }
    }
    useEffect(() => {
    const fetchData = async () => {
        await fetch(); 
    };
    fetchData();
}, []);

    useEffect(() => {
    const fetchData = async () => {
        await Fetch();
    };
    fetchData();
}, []);

    useEffect(() => {
    const fetchData = async () => {
        await Foetch();
    };
    fetchData();
}, []);

    if (!customer.length) {
    return <h3 className="text-center mt-4">Empty!!</h3>;
}
    if (!worker || worker.length === 0) {
  return <h3 className="text-center mt-4">Empty!!</h3>;
}
    return(
        <>
        <section className="orignal">
            <div className="div1">Worker:{worker.length}</div>
            <div className="div2">Customer:{customer.length}</div>
            <div className="div3">Service:{services.length}</div>
        </section>
        </>
    )
}
export default DashHomePage