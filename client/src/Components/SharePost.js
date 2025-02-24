import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
} from "reactstrap";

const SharePosts = () => {
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
