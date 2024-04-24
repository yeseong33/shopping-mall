
/* eslint-disable */

function DetailInfo(props) {
    return (
        <>
            <div className="col-md-6">
                <img src={process.env.PUBLIC_URL + '/shoes' + props.idx + '.jpg'} width="100%" />
            </div>
            <div className="col-md-6">
                <p>{props.shoes.content}</p>
                <p>{props.shoes.price}</p>
                <button className="btn btn-danger">주문하기</button>
            </div>
        </>
    )
}

export { DetailInfo };