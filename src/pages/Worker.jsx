import { useEffect , useState} from "react";
import api from "./Api";
function WorkerPage(){
    const token = localStorage.getItem("token");
    const [worker,setWorker] = useState([]);
    const [formData, setFormData] = useState({
        userName: "",
        fullName: "",
        email: "",
        password: "",
        NIDnumber: "",
        age: "",
        phone: "",
        city: "",
        address: "",
    });
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
    useEffect(() => {
    const fetchData = async () => {
        await fetch(); // لو عايز تستخدم نفس الاسم
    };
    fetchData();
}, []);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCreateWorker = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/auth/createWorkeraccount",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Worker created successfully!");
      fetch();
      setFormData({
  userName: "",
    fullName: "",
    email: "",
    password: "",
    NIDnumber: "",
    age: "",
    phone: "",
    city: "",
    address: "",
    });
    } catch (error) {
      console.log(error);
      alert("Error creating worker");
    }
  };
  const handleDelete = async (id) => {
    try {
    await api.delete(`/users/deleteWorker/${id}`, 
    {headers: 
        { Authorization: `Bearer ${token}` }
    });
    setWorker(prev => prev.filter(worker => worker.workerId !== id));
    } catch (error) {
        console.log(error);
    }
};
    if (!worker || worker.length === 0) {
  return <h3 className="text-center mt-4">Empty!!</h3>;
}
    return(
        <>
        <div style={{display:"flex" , justifyContent:"center"}}>
        <form
        onSubmit={handleCreateWorker}
        className="p-3 mb-4 border rounded"
        >
        <h4 className="text-center">Create Worker</h4>
        <input
        style={{width:"400px"}}
        type="text"
        name="userName"
        placeholder="User Name"
        className="form-control mb-2"
        value={formData.userName}
        onChange={handleInput}
        required
        />

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="form-control mb-2"
          value={formData.fullName}
          onChange={handleInput}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          value={formData.email}
          onChange={handleInput}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-2"
          value={formData.password}
          onChange={handleInput}
          required
        />

        <input
          type="text"
          name="NIDnumber"
          placeholder="NID Number"
          className="form-control mb-2"
          value={formData.NIDnumber}
          onChange={handleInput}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          className="form-control mb-2"
          value={formData.age}
          onChange={handleInput}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="form-control mb-2"
          value={formData.phone}
          onChange={handleInput}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          className="form-control mb-2"
          value={formData.city}
          onChange={handleInput}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          className="form-control mb-2"
          value={formData.address}
          onChange={handleInput}
        />

        <div className="text-center">
            <button className="btn btn-primary ">Create Worker</button>
        </div>
      </form>
        </div>
        <table className="table-card">
           <thead>
             <tr>
                <th>ID</th>
                <th> Full Name</th>
                <th> Email</th>
                <th>NIDnumber</th>
                <th>age</th>
                <th>phone</th>
                <th>address</th>
                <th>Actions</th>
            </tr>
           </thead>
           <tbody>
            {worker.map((worker) => (
                <tr key={worker.workerId}>
                <td>{worker.workerId}</td>
                <td>{worker.fullName}</td>
                <td>{worker.email}</td>
                <td>{worker.NIDnumber}</td>
                <td>{worker.age}</td>
                <td>{worker.phone}</td>
                <td>{worker.city}{worker.address}</td>
                <td>
                <button className="btn btn-danger btn-sm"
                onClick={() => handleDelete(worker.workerId)}
                >Delete</button>
                </td>
                </tr>
            ))}
           </tbody>
        </table>
        </>
    )
}
export default WorkerPage
