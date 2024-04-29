/* eslint-disable */

import { useContext, useEffect, useState } from "react";
import { Button, Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import './Detail.css';

import {Context1} from './../App.js' 
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store.js";

const AlertInput = styled.input`
    width : 300px;
    height : 40px;
    fontSize : 16px;
    padding : 5px;
`

// const ColorBtn = styled.button`
//     background : ${ props => props.bg };
//     color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
//     padding; 10px;
// `

// const NewBtn = styled.button(ColorBtn)`

// `


function Detail(props) {

    
    let state = useSelector((state) => state)
    let cart = state.cart
    let dispatch = useDispatch();

    let {storage} = useContext(Context1)


    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let { id } = useParams();
    let [userInput, setUserInput] = useState('');
    let [intAlert, setIntAlert] = useState(false);
    let [tab, setTab] = useState(0);
    let [img, setImg] = useState('');
    let item = props.shoes.find((x) =>
        x.id == id
    )
    useEffect(() => {
        setTimeout(() => { setIntAlert(false) }, 5000)
        setTimeout(() => {setImg('initiationEnd')}, 100)

        let tmp =  JSON.parse(localStorage.getItem('watched'))
        tmp.push(item.id)
        let set = new Set(tmp)
        tmp = [...set]
        localStorage.setItem('watched', JSON.stringify(tmp))   

        // useEffect 사용 전에 실행
        return () => {
            setImg('')
        }
    }, [])


    return (
        <div className="container">
            {/* <button onClick={()=> setCount(count+1)}>버튼</button> */}
            <div className="row align-items-center">
                {item == null ? <p>상품이 존재하지 않습니다.</p> :
                    <>
                        <div className="col-md-6">
                            {/* <img src={process.env.PUBLIC_URL + '/shoes' + id + '.jpg'} width="100%" /> */}
                            <img className={"initiationStart "+img} src={'https://codingapple1.github.io/shop/shoes' + (item.id + 1) + '.jpg'} width="100%"></img>
                        </div>
                        <div className="col-md-6">
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                            <p>{item.price}</p>
     
                            <button className="btn btn-danger" onClick={() => {
                                dispatch(addItem({id: item.id,  name: item.title, count: 1}))
                            }}>주문하기</button>
                            {
                            }
                        </div>
                    </>
                }
            </div>
            <Nav variant="tabs" defaultActiveKey="/home"> 
                <Nav.Item onClick={ () => {setTab(0)}}>
                    <Nav.Link eventKey="link0">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={ () => {setTab(1)}}>
                    <Nav.Link eventKey="link1">버튼2</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={ () => {setTab(2)}}>
                    <Nav.Link eventKey="link3">버튼3</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} shoes={props.shoes}/>
                

            {/* <Tabs
                defaultActiveKey="home"
                transition={false}
                className="mb-3"
                justify
            >   
                <Tab eventKey="home" title="버튼 1">
                    내용 1
                </Tab>
                <Tab eventKey="profile" title="버튼 2">
                    <Row>
                        <Col md={12}> 
                            내용 2
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="longer-tab" title="버튼 3">
                    내용 3
                </Tab>
            </Tabs> */}
        </div>


    )
}


function TabContent({tab}) {
    let {storage} = useContext(Context1)
    let value = [<div >내용1</div>, <div>내용2</div>, <div>내용3</div>]
    let [fade, setFade] = useState(''); 

    useEffect(()=> {
        let a = setTimeout(()=> {setFade('end')}, 100)
        return () => {
            clearTimeout(a)
            setFade('')
        }
    }, [tab])

    return (
        <div className= {"start " + fade}>
            {value[tab]}
        </div>
    )
    
}




export default Detail;