

// 此時counter還沒有和reducer綁在一起 , 也還沒有和store綁在一起
// 為了避免撰寫computed涵式過多,會把computed涵式和combine Reducers分開


import {INCREMENT,DECREMENT } from "../Actions/counterActions";

export const counter = (state = 0 ,action) => {

    switch(action.type){
       case INCREMENT:
           return state + 1
       case DECREMENT:
           return state -1

        default:
            return state ;

    }


}
