import api from "./Api";
import { useEffect , useState } from "react";
function ServicePage(){
    const [services, setServices] = useState([]);
    const token = localStorage.getItem("token");
    const Fetch = async () =>{
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
        await Fetch();
    };
    fetchData();
}, []);

    const handleDelete = async (id) => {
    try {
    await api.delete(`/services/deleteService/${id}`, 
    {headers: 
        { Authorization: `Bearer ${token}` }
    });
    setServices(prev => prev.filter(service => service.serviceId !== id));
    } catch (error) {
        console.log(error);
    }
};
        if (!services.length) {
        return <h3 className="text-center mt-4">Empty!!</h3>;
    }
    const getStatusBgColor = (state) => {
    switch (state.toLowerCase()) {
      case "open": return "#28a745";
      case "in progress": return "#ffc107";
      case "done": return "#343a40";
      default: return "gray";
    }
  };
    return(
        <>
        <section>
        <table className="table-card">
           <thead>
             <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
           </thead>
           <tbody>
            {services.map((service) => (
                <tr key={service.serviceId}>
                <td>{service.serviceId}</td>
                <td><img src={`http://localhost:8100${service.serviceImage}`} width="150" height="100"/></td>
                <td>{service.serviceTitle}</td>
                <td style={{ maxWidth: "250px" }}>{service.serviceDetails}</td>
                <td>{service.budget}</td>
                <td> 
            <div 
              style={{
                fontWeight: "bold",
                padding: "2px",
                borderRadius: "5px",
                backgroundColor: getStatusBgColor(service.doneStatus),
                color: "white",
                textTransform: "capitalize",
                display:"flex",
                justifyContent:"center"
              }}
            >
              {service.doneStatus}
            </div>

                </td>
                <td>
                    <button className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(service.serviceId)}
                    >Delete</button>
                </td>
                </tr>
            ))}
           </tbody>
        </table>
        </section>
        </>
    )
}
export default ServicePage;