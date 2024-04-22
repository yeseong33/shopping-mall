/* eslint-disable */

import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import { MyNav } from './MyNav.js';

function App() {

  let [shoes] = useState(data)

  console.log(shoes[0])

  return (
    <div className="App">
      <MyNav/>
      {/* <div className='main-bg' style={{backgroundImage : 'url('+ bg +')'}}></div> */}
      <div className="main-bg"></div>
      <Container>
        <Row>
          {
            shoes.map((s, idx) => {
              return (
                <Shoes shoes={s} idx={idx} key={idx}/>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}


function Shoes (props) {
  return (
    <>
      <Col xs={{ order: 'last' }}>
        <img src={process.env.PUBLIC_URL + '/shoes'+props.idx+'.jpg'} width="80%" onClick={() => {
          PopStateEvent
        }}/>
        <h4>{props.shoes.title}</h4>
        <p> {props.shoes.content} </p>
        <p> {props.shoes.price} </p>
      </Col>
    </>
  )
}


export default App;
