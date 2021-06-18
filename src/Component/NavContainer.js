import { connect } from "react-redux";
import { increment, decrement } from "../Actions/counterActions"
import NavUi from "./NavUI";

// mapStateToProps函數,建立組件跟stores的states的映射關係,讓store和state改變時發生調用
// mapDispatchToProps函數,建立用來建立UI 組件的參數到store.dispatch方法的映射用來建立UI組件的參數到store.dispatch方法的映射


// 這裡是容器組件（container component）
// 管理數據和業務邏輯，不負責的 UI 的呈現
// 有內部狀態 連結store/action並使用涵式監控和UI

// 透過dispatch發送一個action，這是Redux中唯一改變state的方式.

const mapStateToProps = (state,ownProps) => {

    return {
        counter:state.counter
    }

};

const mapDispatchToProps = dispatch => {
    return { 
        increment : (options) => {
            dispatch(increment(options))
        },

        decrement: (options) => {
            dispatch(decrement(options))
        }
        
    }

};

const NavContainer = connect (
    mapStateToProps,
    mapDispatchToProps
    ) (NavUi);

export default NavContainer;
