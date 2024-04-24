/* eslint-disable */

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";


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


    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let {id} = useParams();
    let [userInput, setUserInput] = useState('');
    let [intAlert, setIntAlert] = useState(false);
    let item = props.shoes.find((x) => 
        x.id == id
    )

    useEffect(() => {
        setTimeout(() => {setIntAlert(false)}, 5000)

        // useEffect 사용 전에 실행
        return () => {
            // 기존 타이머는 제거하는 코드
            // clearTimeout(a)
        }
    }) 


    return (
        <div className="container">
            {count}
            <button onClick={()=> setCount(count+1)}>버튼</button>
            <div className="row">
                {item == null ? <p>상품이 존재하지 않습니다.</p> : 
                <>
                    <div className="col-md-6">
                        <img src={process.env.PUBLIC_URL + '/shoes' + id + '.jpg'} width="100%" />
                    </div>
                    {
                        intAlert == true ? 
                        <div className="alert alert-warning">
                        경고 : 숫자 입력!
                        </div> 
                        : null
                    }
                    <AlertInput type="text" placeholder="여기에 입력하세요" value={userInput} onInput={(e) => {
                            isNaN(e.target.value) ? 
                            setIntAlert(true) : 
                            setUserInput(e.target.value)
                        }}>
                    </AlertInput>
                    <div className="col-md-6">
                        <p>{item.content}</p>
                        <p>{item.price}</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </>
                }
                
            </div>
        </div> 


    )
}


export { Detail };