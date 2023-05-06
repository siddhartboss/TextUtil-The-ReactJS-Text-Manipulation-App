// import React, {useState} from 'react'

export default function About(props) {

    // const [demoStyle , setDemoStyle] = useState({
    //     color : 'black',
    //     backgroundColor:'white'
    // })

    let demoStyle = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor:props.mode === 'dark'?'#5c5b75':'white'
    }

    // const [btntext,setBtnText] = useState("Enable Dark Mode")

    // const handlestyle = () => {
    //     if(demoStyle.color === 'white'){
    //         setDemoStyle({
    //             color : 'black',
    //             backgroundColor:'white'
    //         }) 
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setDemoStyle({
    //             color : 'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }

  return (
    <div className='container' style={demoStyle}>
      <div className="accordion" id="accordionExample" style={demoStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={demoStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={demoStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={demoStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={demoStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={demoStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatibable</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
    <button type="button" onClick={handlestyle} class="btn btn-primary">{btntext}</button>
</div> */}
    </div>
  )
}
