import {FaWhatsappSquare,FaInstagramSquare,FaFacebookSquare} from "react-icons/fa"
import Image from "next/legacy/image"
import img1 from "../public/icons/1.png"
import img2 from "../public/icons/2.png"
import img3 from "../public/icons/3.png"
export default function share(){
    return <>
    <div className='share'>
        <p className="t-1">Share with your family, friends, relatives 👨‍👩‍👧‍👦 </p>
        <p className="t-2">Want to explore more, Order <span style={{color:"#FA00FF"}}>Free</span> Srimad Bhagavad Gita</p>
        <p className="btn">Order Now</p>

    </div>
    <style jsx>
        {`
        .share{
            margin:auto;
            margin-top:120px;
            text-align:center;
            
        }
        
        .icon-btn{
            justify-content:space-between;
            width:150px
        }
        .t-2{
            color:#2D2C2C;
            font-size:24px;
        }
        .t-1{
            color:#4B4B4B;
            font-weight:10;
            font-size:22px;
        }
        .btn{
            padding:5px;
            background:linear-gradient(45deg,#FA00FF,#031CFE);
            width:100px;
            color:white;
            margin:0px auto;
            margin-top:20px;
            border-radius:5px;
            
        }
        
        `}
    </style>
    </>
}