import gsap from "gsap";
import "./OrderButton.scss";
import axios from "axios";
import Menu from "../Menu";
import Receipt from "./Receipt";
import { useEffect } from "react";
const OrderButton = ( {isOrderDone, setOrderDone,menuText }) => {
  
  return (
    <>
      <button className="truck-button" id="send" onClick={(e) =>{
              console.log(menuText)
              setOrderDone(!isOrderDone)
              e.preventDefault();

              // axios.post('http://localhost:3000/Menu/MenuContents', {
              //   menuText: menuText           
              // })
              // .then((res) => {
              //   console.log("성공");

              // })
              // .catch((error) => {
              //   console.log("실패");
              // })
              
      }
    
      
      
      } >

        <span >
          
          {isOrderDone ?
          "주문완료" : "주문하기"}
        </span>
      
      </button>
    </>
  );
};

export default OrderButton;
