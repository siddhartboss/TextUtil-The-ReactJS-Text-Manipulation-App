import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Done Uppercase","success");
    }

    const handleCapitalizeClick = () => {
        // let splitString = text.split(" ");
        // let newString;
        // splitString.forEach(element => {
        //     let firstletter = element.charAt(0).toUpperCase();
        //     let ratherString = element.slice(1);
        //     newString = newString + " " +(firstletter + ratherString);
        // });
        let newString =  text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newString);
        props.showalert("Done Capitalize","success");
    }

    const handleClearClick = () => {
        let newString = "";
        setText(newString);
    }

    const handleOnChnage = (event) => {
        // console.log("handleOnChnage Clicked");
        setText(event.target.value);
    }

    const countWord = (str1) => {
        let wordCount;
        if(str1 === ""){
            wordCount = 0;
        }
        else{
            wordCount = str1.trim().split(/\s+/).length;
        }
        return wordCount;
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showalert("Done Lowercase","success");
    }

    const handlefindTextChnage = (event) => {
        findTextFunc(event.target.value);
    }

    const handlechnageTextChnage = (event) => {
        changeTextFunc(event.target.value);
    }

    const handleChangeTextClick = () => {
        let oldText = findText;
        let newText = chnageText
        let newParagraph = text.replaceAll(oldText,newText);
        setText(newParagraph);
        props.showalert("Done Word Change","success");
    }

    const [text, setText] = useState("");

    const [findText, findTextFunc] = useState("");
    const [chnageText, changeTextFunc] = useState("");

    // text = "abcd"; wrong way to update text
    // setText("abcd"); Correct Way To update text

    return (
        <>
            <div className='container' style={{color : props.mode === 'dark'?'white':'#433f6c'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChnage} id="Box" rows="8" style={{backgroundColor : props.mode === 'dark'?'#445f79':'white', color : props.mode === 'dark'?'white':'black'}}></textarea>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" value={findText} onChange={handlefindTextChnage} id="myBox1" rows="2" style={{backgroundColor : props.mode === 'dark'?'#445f79':'white', color : props.mode === 'dark'?'white':'black'}}></textarea>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" value={chnageText} onChange={handlechnageTextChnage} id="myBox2" rows="2" style={{backgroundColor : props.mode === 'dark'?'#445f79':'white',color : props.mode === 'dark'?'white':'black'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>Capitalize</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>ClearText</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleChangeTextClick}>ChangeWord</button>
            </div>
            <div className="container" style={{color : props.mode === 'dark'?'white':'#433f6c'}}>
                <h1>Text Summery</h1>
                {/* <p>{text.split(" ").length} Words And {text.length} Character</p> */}
                <p>{countWord(text)} Words And {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>
                <h2>Priview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
