 import React from 'react'
// import "./Subtotal.css";
// import {useStateValue} from"./StateProvider";
// import {getBasketTotal} from "./reducer";


// function Subtotal() {
//   const[{basket}] = useStateValue();
//   const  subtotal = getBasketTotal(basket);
//   return(
//     <div className='subtotal'>
//       <p>
//         subtotal ({basket?.lenght} items):<strong>${subtotal}</strong>
//       </p>
//       <small className='subtotal__gift'>
//         <input type ="checkbox" /> This order contains a gift

//       </small>
//       <button>Proceed to checkout</button>

//     </div>
//   );
  
// }
 
// export default Subtotal
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

export const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>$0</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
   )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        //  prefix={$}
      />
    </div>
  );
};


export default Subtotal
