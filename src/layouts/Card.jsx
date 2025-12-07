import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AdminServiceCard({image,title,description,price}) {
  return (
    <Card className="rounded-5 service-card shadow-sm" style={{ width: "18rem" }}>
      <Card.Img 
        variant="top" 
        src={image} 
        style={{
          height: "180px",
          objectFit: "cover",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px"
        }}
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ minHeight: "60px" }}>
          {/* {description?.slice(0, 80)}...
          Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
          {description.slice(0, 80)}...
        </Card.Text>

        <p className="fw-bold">Price: {price}EGP</p>

        <div className="d-flex justify-content-between mt-3">
          <Button 
            variant="warning" 
            className="px-4"
            // onClick={}
          >
            Edit
          </Button>

          <Button 
            variant="danger" 
            className="px-3"
            // onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AdminServiceCard;
