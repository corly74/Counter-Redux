export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// INCREMENT DECREMENT是 設定call action function和初始狀態
// increment decrement computed計算涵式放在reducer裡面


export const increment = () =>{
    return{ 
        type:INCREMENT
    }
};


export const decrement = () => {
    return {
      type: DECREMENT
    }
  };
