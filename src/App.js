
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './component/ContactList';


// 왼쪽은 연락처 등록, 오른쪽에는 연락처 리스트
// 리스트에 유저 이름과 전화번호를 추가할 수 있다.
// 리스트에 아이템이 몇개인지 볼 수 있다.
// 사용자가 유저를 이름 검색으로 찾을 수 있다.



function App() {
  return (
    <div className='App'>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
          <ContactForm />
          </Col>
          <Col>
          <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
