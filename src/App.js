/* eslint-disable */

import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import data from './data.js'
import { MyNav } from './MyNav.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { Detail } from './routes/Detail.js';
import { DetailInfo } from './routes/Detail-info.js';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { Cart } from './routes/Cart.js';

// 스피너 애니메이션 정의
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// 로딩 컨테이너 스타일
const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
`;

// 스피너 스타일
const LoadingSpinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

// 로딩 텍스트 스타일
const LoadingText = styled.p`
  margin-top: 10px;
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

// state 보관함
export let Context1 = createContext();



function App() {

  let [shoes, setShoes] = useState(data)
  let [page, setPage] = useState(2)
  let [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  let [storage, setStorage] = useState([10, 12, 13]);
  let [cart, setCart] = useState([])  
  // let [shoes2, setShoes2] = useStatee('')

  useEffect(() => {
    // shuffleArray(shoes)
    return () => {
    }
  })

  return (
    <div className="App">
      <MyNav />
      <div>
            {isLoading ? (
                <LoadingContainer>
                    <LoadingSpinner />
                    <LoadingText>로딩 중...</LoadingText>
                </LoadingContainer>
            ) : null}
        </div>

      <Routes>
        {/* 메인 페이지 */}
        <Route path='/' element={
          <>
            <div className="main-bg"></div>
            <Container>
              <Row>
                {
                  shoes.map((s, idx) => {
                    return (
                      <Shoes shoes={s} idx={s.id} key={idx} />
                    )
                  })
                }
              </Row>
              <button onClick={() => {
                setIsLoading(true)
                axios.get('https://codingapple1.github.io/shop/data' + page + '.json')
                  .then((result) => {
                    let copy = [...shoes, ...result.data]
                    setShoes(copy)
                    setPage(page+1)
                    setTimeout(() => {setIsLoading(false)}, 1000)
                  })
                  .catch(() => {
                    setTimeout(() => {setIsLoading(false)}, 1000)
                  })
              }}>더보기</button>
            </Container>
          </>
        } />

        {/* 404 페이지 */}
        <Route path='*' element={<div> 없서용 </div>} />

        {/* 신발 구매 페이지 */}
        <Route path='/detail'>
          <Route path=':id' element={<Context1.Provider value= {{storage, shoes}}><Detail shoes={shoes}/></Context1.Provider>}></Route>
        </Route>

        {/* 장바구니 페이지 */}
        <Route path='/cart' element={<Cart/>}/>
      </Routes>


    </div>
  );
}


function About() {
  return (
    <div>
      <h4>
        회사 정보임
      </h4>
      <Outlet></Outlet>
    </div>
  )
}


function Shoes(props) {
  let navigate = useNavigate();

  return (
    <>
      <Col xs={{ order: 'last' }} onClick={() => { navigate('/detail/' + props.idx) }}>

        {/* 로컬 */}
        {/* <img src={process.env.PUBLIC_URL + '/shoes'+props.idx+'.jpg'} width="80%" onClick={() => {
        }}/> */}
        {/* 외부 */}
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.idx + 1) + '.jpg'} width="80%" onClick={() => {
        }} />
        <h4>{props.shoes.title}</h4>
        <p> {props.shoes.content} </p>
        <p> {props.shoes.price} </p>
      </Col>
    </>
  )
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}


export default App;
