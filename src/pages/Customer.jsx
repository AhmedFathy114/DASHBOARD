import api from "./Api";
import { useEffect , useState } from "react";
function CustomerPage(){
    const [customer,setCustomer] = useState([]);
    const token = localStorage.getItem("token");
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
    useEffect(() => {
    const fetchData = async () => {
        await Fetch();
    };
    fetchData();
}, []);

    const handleDelete = async (id) => {
    try {
    await api.delete(`/users/deleteCustomer/${id}`, 
    {headers: 
        { Authorization: `Bearer ${token}` }
    });
    setCustomer(prev => prev.filter(customer => customer.customerId !== id));
    } catch (error) {
        console.log(error);
    }
};
         if (!customer || customer.length === 0) {
  return <h3 className="text-center mt-4">Empty!!</h3>;
}
    return(
        <>
        <table className="table-card">
           <thead>
             <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>address</th>
                <th>Actions</th>
            </tr>
           </thead>
           <tbody>
            {customer.map((customer) => (
                <tr key={customer.customerId}>
                <td>{customer.customerId}</td>
                <td>{customer.fullName}</td>
                <td>{customer.email}</td>
                <td>{customer.city} {customer.address}</td>
                <td>
                <button className="btn btn-danger btn-sm"
                onClick={() => handleDelete(customer.customerId)}
                >Delete</button>
                </td>
                </tr>
            ))}
           </tbody>
        </table>
        </>
    )
}
export default CustomerPage;