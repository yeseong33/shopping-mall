/* eslint-disable */
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "./../store.js";
import { changeAge } from "../store/userSlice.js";

function Cart() {
    let dispatch = useDispatch();
    let state = useSelector((state) => state);
    let cart = state.cart;
    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니 </h6>
            <button onClick={() => {
                dispatch(changeAge(10))
            }}>버튼</button>
            <Table striped bordered hover>
                <thead>
                    <tr key={0}>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, i) =>
                            <PickItem item={item} />
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}


function PickItem(props) {
    let dispatch = useDispatch();

    return (
        <>
            <tr key={props.item.id + 1}>
                <td>{props.item.id}</td>
                <td>{props.item.name}</td>
                <td>{props.item.count}</td>
                <td>
                    <button onClick={() => {
                        dispatch(changeCount(props.item.id))
                    }}>+
                    </button>
                </td>
            </tr>
        </>
    )
}

export { Cart }; 