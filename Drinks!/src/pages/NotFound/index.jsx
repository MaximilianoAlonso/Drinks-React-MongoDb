import {Container, Row, Col} from "react-bootstrap"

export const NotFound = () => {
  return (
<Container style={{ backgounColor: "red"}}>
    <Row>
      <Col md={6}>
        <h1 className="text-center "> 404 </h1>
        <p className="text-center " > Page Not Found </p>
      </Col>
    </Row>
</Container>

  )
}
