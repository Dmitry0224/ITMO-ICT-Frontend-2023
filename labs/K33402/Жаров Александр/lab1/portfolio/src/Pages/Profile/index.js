import "./Profile.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Avatar from "../../Components/Avatar";
import AvatarImg from "../../img/avatar.jpg";

function Profile() {
  return (
    <>
      <Container className="main-container">
        <Row>
          <Col xs={5} sm={3} md={2}>
            <Avatar src={AvatarImg} size={100} />
          </Col>
          <Col className="name">
            <h3>Жаров Александр</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-start">
            Меня зовут Саша, я из Санкт-Петербурга, занимаюсь программированием
            и учусь в Итмо
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">
            <h5>Места работы</h5>
          </Col>
        </Row>

        <Col className="d-flex justify-content-start">
          <div>Место работы 1</div>
        </Col>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">
            <h5>Проекты</h5>
          </Col>
        </Row>
        <Col className="d-flex justify-content-start">
          <div>Проект 1</div>
        </Col>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">
            <h5>Контакты</h5>
          </Col>
        </Row>
        <Col className="d-flex justify-content-start">
          <div>email@example.com</div>
        </Col>
      </Container>
    </>
  );
}

export default Profile;
