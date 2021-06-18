import React from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

// UI組件 只負責外觀，不帶有任何業務邏輯
// 沒有狀態（即不使用this.state這個變量）
// 所有數據都由參數（this.props）提供
// 不使用任何 Redux 的 API
// increment,decrement call action 函式放在action

const NavUi = props => {

    return (

        <div className="d-flex justify-content-center">


            <div className=" flex-column mt-5 ">


                <button type="button" className="btn btn-outline-primary  rounded-0"
                    onClick={() => props.increment()}>+1</button>


                <button type="button" className="btn btn-outline-primary  rounded-0 btn-spacing"

                    onClick={() => props.decrement()}>-1</button>




                <div className="h4 text-white bg-secondary text-center py-1 mt-2 state-width ">
                    {props.counter}</div>



            </div>
        </div>
    )

};

export default NavUi;
