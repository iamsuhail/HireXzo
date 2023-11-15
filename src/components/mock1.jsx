import React from 'react'; // Import useState from React
import "../styles/mock1.css";
// import From from "../assets/Interview-cuate.png"
import Navbar from './Navbar';


function Mock1() { // Rename the function to start with an uppercase letter


  return (
    <div className='mockcart'>
      <Navbar />
      <div className="cardslefty1">
        <h1 className='mockh1'>Mock Interviews</h1>
        <p className='mock1p'>Practice real-life interviews on a virtual screen!</p>
        <div className="cardslefty">
          <buttont className="cardsbuttont">1 Interview <br /> <s>Rs.1799</s> <br /> <span className='inter1'>Rs.499</span></buttont>
          <buttont className="cardsbuttont"> 2 Interviews <br /> <s>Rs.2999</s> <br /><span className='inter2'>Rs.899</span></buttont>
          <buttont className="cardsbuttont">4 Interviews <br /> <s>Rs.4999</s> <br /><span className='inter3'>Rs.1999</span></buttont>
        </div>

      </div>
      {/* <div className="cardsrighty"><img src={From} alt="" className="rightimgcardy" /></div> */}

    </div>
  );
}

export default Mock1; // Export the component with an uppercase name
