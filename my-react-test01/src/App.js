import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일을 임포트
import './App.css'; // CSS 파일을 임포트
import Button from 'react-bootstrap/Button';

// 할일 표시기
function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>할일기록</Accordion.Header>
        <Accordion.Body>
          금일은 투두리스트 구현하는 일
          <ol>
            <li>제목: 클론코딩 투두리스트</li>
            <li>+ 버튼을 누르면 게시판에 창이 추가된다.</li>
            <li>+ 버튼을 누르면 액션창과 함께 내용을 입력하는 창이 뜬다.</li>
            <li>내용을 안 적으면 "내용을 적어주세요"라는 알림창이 뜬다.</li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>내일 할일기록</Accordion.Header>
        <Accordion.Body>
          여기에 내일 할 일 내용을 추가할 수 있습니다.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="title">클론코딩 투두리스트</h1> 
      
      {/* 제목 */}
      <AllCollapseExample /> {/* Accordion 컴포넌트 렌더링 */}
      <h1 class='pjtName'>투두리스트</h1>{/*css할때는 class로 가는거다 */}
     <TypesExample></TypesExample>
    </div>
  );
}

function TypesExample() {
  return (
    <>
      <Button variant="primary">할일추가</Button>
      
    </>
  );
}

export default App;
