import loginImage from "../Images/loginImage.jpg";
import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
import logo from "../Images/logo-t.png";

const Register = () => {
  return (
    <Container>
      <h1>Register</h1>
      <Form>
        <Row>
          <Col md={6}>
            Name<br></br>
            <Input type="text" name="name"></Input>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <Input type="email" name="email"></Input>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <Input type="password" name="password"></Input>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <Input type="password" name="confirmpassword"></Input>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Register;
