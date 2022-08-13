import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log('Upper case was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log('Upper case was clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
    }

    const handleReverse = () => {
        let oldText = text;
        let newText = ""
        for (let i = oldText.length - 1; i >= 0; i--) {
            newText = newText + oldText[i];
        }
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log('On Change Clicked');
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div>
                <h1 className='text-center'>{props.heading}</h1>
                <br />
                <form>
                    <div className="form-group">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    </div>
                </form>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UPPER</button>
                <button className="btn btn-secondary mx-2 my-2" onClick={handleLoClick}>convert to lower</button>
                <button className="btn btn-warning mx-2 my-2" onClick={handleClear}>Clear</button>
                <button className="btn btn-info mx-2 my-2" onClick={handleReverse}>Reverse all words</button>

            </div>
            <div className="container my-3">
                <h2>
                    Your Text Summary
                </h2>
                <p>
                    No of Words - {text.split(" ").length} and No of Characters - {text.length}
                </p>
                <p>
                    No of Minutes Read - {0.008 * text.split(" ").length}
                </p>
                <h2>
                    Preview
                </h2>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    heading: 'Set Heading Here'
};