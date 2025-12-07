import { useEffect , useState } from "react";
import api from "./Api";
function BookService(){
    const token = localStorage.getItem("token");
    const [books,setBooks] = useState([]);
    const fetch = async () => {
        const response = await api.get("/services/getAllBookServices",
            {
                    headers:
                    {
                Authorization: `Bearer ${token}`,
                    }
                }
        );
        const result = response.data.data;
        setBooks(result)
        console.log(result);
        

    }
    useEffect(() => {
    const fetchData = async () => {
        await fetch();
    };
    fetchData();
}, []);

    const handleDelete = async (id) => {
    try {
    await api.delete(`/services/deleteOffer/${id}`, 
    {headers: 
        { Authorization: `Bearer ${token}` }
    });
    setBooks(prev => prev.filter(books => books._id !== id));
    } catch (error) {
        console.log(error);
    }
};
     if (!books || books.length === 0) {
  return <h3 className="text-center mt-4">Empty!!</h3>;
}
    return(
        <>
        <table className="table-card">
           <thead>
             <tr>
                <th>ID</th>
                <th> Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Price</th>
                <th>Comment</th>
                <th>Actions</th>
            </tr>
           </thead>
           <tbody>
            {books.map((books) => (
                <tr key={books._id}>
                <td>{books.serviceId}</td>
                <td>{books.bookerName}</td>
                <td>{books.bookerPhone}</td>
                <td>{books.bookerAddress}</td>
                <td>{books.startingPrice}</td>
                <td>{books.notesToClient}</td>
                <td>
                <button className="btn btn-danger btn-sm"
                onClick={() => handleDelete(books._id)}
                >Delete</button>
                </td>
                </tr>
            ))}
           </tbody>
        </table>
        </>
    )
}
export default BookService;