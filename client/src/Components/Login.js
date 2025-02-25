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
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Container>
        <img src={logo} />
        <Form>
          <Row>
            <Col md={5}>
              Username<br></br>
              <Input type="email" name="email"></Input>
            </Col>
          </Row>

          <Row>
            <Col md={5}>
              Password<br></br>
              <Input type="password" name="password"></Input>
            </Col>
          </Row>

          <Row>
            <Col md={5}>
              <Button>Login</Button>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <p className="smalltext">
                No Account? <Link to="/register">Sign Up now.</Link>
              </p>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
