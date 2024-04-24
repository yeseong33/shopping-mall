/* eslint-disable */

import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import { MyNav } from './MyNav.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { Detail } from './routes/Detail.js';
import { DetailInfo } from './routes/Detail-info.js';

function App() {

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();
  shuffleArray(shoes)

  return (
    <div className="App">
      <MyNav/>
      {/* <div className='main-bg' style={{backgroundImage : 'url('+ bg +')'}}></div> */}

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
                    <Shoes shoes={s} idx={s.id} key={idx}/>
                  )
                })
              }
            </Row>
          </Container>
          </>
        }/>

        {/* 404 페이지 */}
        <Route path='*' element={<div> 없서용 </div>}/>
        
        {/* 신발 구매 페이지 */}
        <Route path='detail/'>
          <Route path=':id' element={<Detail shoes={shoes}/>}></Route>
        </Route>

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


function Shoes (props) {
  let navigate = useNavigate();

  return (
    <>
      <Col xs={{ order: 'last' }} onClick={() => {navigate('/detail/'+props.idx)}}>

        <img src={process.env.PUBLIC_URL + '/shoes'+props.idx+'.jpg'} width="80%" onClick={() => {
        }}/>
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
