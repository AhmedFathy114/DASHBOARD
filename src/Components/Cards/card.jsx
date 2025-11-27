import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardsPage({image,path,title}) { //title,description 
  return (
    <Card className='rounded-5 service-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={path}>
          <Button style={{background:"#eb7c2d",border:"none"}}>View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardsPage;