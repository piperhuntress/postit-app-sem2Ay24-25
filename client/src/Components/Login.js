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
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaValidation } from "../Validations/UserValidations";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) });

  var x = 1;
  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data", data); // You can handle the form submission here
  };

  //function that will be invoked when the user clicks the login button

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    dispatch(login(userData)); //dispatch a login action from the user slice.
  };

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }

    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess]);

  return (
    <div>
      <Container>
        <img src={logo} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={5}>
              Username<br></br>
              <input
                type="email"
                name="email"
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </Col>
            <p className="error">{errors.email?.message}</p>
          </Row>

          <Row>
            <Col md={5}>
              Password<br></br>
              <input
                type="password"
                name="password"
                onChange={(e) => setpassword(e.target.value)}
              ></input>
            </Col>
            <p className="error">{errors.email?.message}</p>
          </Row>

          <Row>
            <Col md={5}>
              <Button
                color="primary"
                className="button"
                onClick={() => handleLogin()}
              >
                Sign in
              </Button>
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
