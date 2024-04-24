
/* eslint-disable */

import { useParams } from "react-router-dom";

function DetailInfo(props) {

    console.log(shoes, 'dijfeijf')
    return (
        <>
            <div className="col-md-6">
                <img src={process.env.PUBLIC_URL + '/shoes' + id + '.jpg'} width="100%" />
            </div>
            <div className="col-md-6">
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}</p>
                <button className="btn btn-danger">주문하기</button>
            </div>
        </>
    )
}

export { DetailInfo };