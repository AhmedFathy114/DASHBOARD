import { Container,Row,Col,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ErrorPage(){
    const navigate = useNavigate();
    return(
        <Container className="d-flex vh-100 ">
            <Row className="m-auto text-center">
                <Col>
                <h1 className="display-3 fw-bold text-danger">404</h1>
                <h2 className="mb-3">Page Not Found</h2>
                <p className="text-muted mb-4">
                    The Page you are looking for might have been removed, had its name 
                    changed, or is temporarily unavailable
                </p>
                <Button variant="dark" onClick={() => navigate("/home")}>
                    Go Home
                </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default ErrorPage