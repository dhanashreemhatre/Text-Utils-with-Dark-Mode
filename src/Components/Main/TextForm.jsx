import React,{useState} from 'react'
import rs from 'text-readability'


function TextForm(props) {
   
    const HandleUpperCase=()=>{
        setText(text.toUpperCase())
    }
    const HandleLowerCase=()=>{
        setText(text.toLowerCase())
    }
    const HandleClearText=()=>{    
        setText('')
    }
    
    const HandleOnChange=(event)=>{
        setText(event.target.value)

    }
    const HandleCopy=(event)=>{
        var text=document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text);

    }
    const HandleRemoveExtraSpace=(event)=>{
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        
    }
    const [text,setText]=useState('');
    let word_count=0    
    if (text===''){
        word_count=0
    }else{
        word_count=text.split(" ").length
    }


    const [score, setScore] = useState(0);
    const [readability, setReadability] = useState('None');


    const HandleReadability=()=>{    
            const newScore = rs.fleschReadingEase(text);
    let newReadability = 'None';

    if (newScore <= 100 && newScore >= 90) {
        newReadability = 'Very Easy';
    } else if (newScore <= 89 && newScore >= 80) {
        newReadability = 'Easy';
    } else if (newScore <= 79 && newScore >= 70) {
        newReadability = 'Fairly Easy';
    } else if (newScore <= 69 && newScore >= 60) {
        newReadability = 'Standard';
    } else if (newScore <= 59 && newScore >= 50) {
        newReadability = 'Fairly Difficult';
    } else if (newScore <= 49 && newScore >= 30) {
        newReadability = 'Difficult';
    } else if (newScore <= 29 && newScore >= 0) {
        newReadability = 'Very Confusing';
    }

    setScore(newScore);
    setReadability(newReadability);


    }
  return (
    <>
    <div className='container my-4'>
        <h3>{props.head}</h3>
        <div className="my-3">
            <textarea name="myBox" id="myBox" rows="8" className='form-control' value={text} onChange={HandleOnChange}></textarea>
        </div>
        <div className="my-2">
        <button className='btn btn-primary m-2' onClick={HandleClearText}>Clear</button>
        <button className='btn btn-primary m-2' onClick={HandleUpperCase}>Convert to UpperCase</button>
        <button className='btn btn-primary m-2' onClick={HandleLowerCase}>Convert to LowerCase</button>
        <button className='btn btn-primary m-2' onClick={HandleReadability}>Check Readability</button>
        <button className='btn btn-primary m-2' onClick={HandleCopy}>Copy</button>
        <button className='btn btn-primary m-2' onClick={HandleRemoveExtraSpace}>Remove extraspace</button>
        </div>
    </div>
    <div className="container">
        <h5>Text Summary</h5>
        <p>words: {word_count}, characters: {text.length}</p>
        <p>0.008{text.split(" ").length} minutes to read</p>
        <h5>Readabilty</h5>
        <p>{readability} - {score}</p>
        <h4>Preview</h4>
        <p>{text}</p>
        
    </div>
    </>
  )
}

export default TextForm