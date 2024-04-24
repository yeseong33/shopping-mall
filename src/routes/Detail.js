/* eslint-disable */

import { Outlet, useParams } from "react-router-dom";


function Detail(props) {
    let {id} = useParams();
    let item = props.shoes.find((x) => 
        x.id == id
    )

    return (
        <div className="container">
            <div className="row">
                {item == null ? <p>상품이 존재하지 않습니다.</p> : 
                <>
                    <div className="col-md-6">
                        <img src={process.env.PUBLIC_URL + '/shoes' + id + '.jpg'} width="100%" />
                    </div>
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

// /* eslint-disable */


// function Detail(props) {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6">
//                 <img src={process.env.PUBLIC_URL + '/shoes'+props.idx+'.jpg'} width="100%" />
//                 </div>
//                 <div className="col-md-6">
//                 <h4 className="pt-5">{props.shoes.title}</h4>
//                 <p>{props.shoes.content}</p>
//                 <p>{props.shoes.price}</p>
//                 <button className="btn btn-danger">주문하기</button> 
//                 </div>
//             </div>
//         </div> 
//     )
// }

// export { Detail };