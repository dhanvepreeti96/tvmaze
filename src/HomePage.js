import { React, useState } from "react";
import pic from './tvlogo.jpg'
import Shows from "./Shows";
import Actor from "./Actor";
import "./index.css";

const HomePage = () => {
  const [radio, setradio] = useState("");
  const [input, setinput] = useState("");
  const [error, seterror] = useState(false);


  function SetRediobtn() {
  

    if (radio === "Show" && input) {
      return <Shows input={input} error={seterror} />;
    } else if (radio === "Actor" && input) {
      return <Actor input={input} error={seterror} />;
    } else {
      return <></>;
    }
  }

  //new return

  return(
    <>
    <div class="Outer">
    <div class="HomePage">
      <span><img src={pic} alt="Wrong"/></span><span class="heading">TVMazza</span>
      
      <div className="rdo" onChange={(e) => setradio(e.target.value)}>
      <span id="label">Select</span>
        <span id="f-btn">
  <input className="radio_btn" type="radio" value="Actor" id="people" name="radio" /><br />Actor</span>
  <span id="s-btn"><input className="radio_btn" type="radio" value="Show" id="shows" name="radio" error={seterror}/><br/>Show</span>
       </div>
       <div className="SearchText">Search</div>
  <div>
    <input id="searchbox" className="input" onChange={(e) => setinput(e.target.value)}
     placeholder= {radio ? "Search " + radio : "Search here........ "}/>
                 <br/>
                 {error ? <div style={{ color: "red" }}>Not Found...! &#128532;</div> : <></>}
                 {console.log(radio)}
        </div>
    </div>
    </div>
    {SetRediobtn()}
    </>

  );



  //old return

  // return (
  //   <>
  //     <div className="Homepage">
  //       <div className="inputBox">
  //         <span><img src={pic} alt="Wrong"/></span>
  //         <span className="Tvmaza">
  //          TvMazza
  //         </span>
  //         <div className="SearchText">Search Your Favourite Show</div>
  //         <div>
  //           <form>
  //             <div className="rdo" onChange={(e) => setradio(e.target.value)}>
  //               <input className="radio_btn" type="radio" value="Actor" id="people" name="radio" />
  //               Actor <br /><span><br /></span>
  //               <input className="radio_btn" type="radio" value="Show" id="shows" name="radio"
  //                 error={seterror}
  //               />{" "}
  //               Show
  //             </div>
  //             <div>
  //               <input id="searchbox"
  //                 className="input"
  //                 onChange={(e) => setinput(e.target.value)}
  //                 placeholder={radio ? "Search " + radio : "Search here"}
  //               />
  //               <br></br>
  //               {error ? <p style={{ color: "red" }}>NoFound</p> : <></>}
  //               {console.log(radio)}
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
    
  //     {SetRediobtn()}
  //   </>
  // );
};

export default HomePage;