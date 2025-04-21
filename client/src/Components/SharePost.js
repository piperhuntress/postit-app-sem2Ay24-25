import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { savePost } from "../Features/PostSlice";

const SharePosts = () => {
  const [postMsg, setpostMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.users.user.email);

  return (
    <div>
      <h1>SharePosts</h1>
      <Row>
        <Col>
          <Input
            id="share"
            name="share"
            placeholder="Share your thoughts..."
            type="textarea"
          ></Input>
          <Button>PostIT</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SharePosts;
