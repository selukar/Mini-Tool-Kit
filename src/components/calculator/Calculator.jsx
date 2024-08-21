import {Link} from 'react-router-dom';
import { useState } from 'react';

const Calculator = () =>
{
    let[input,setInput]=useState('');
    let[result,setResult]=useState('');

    let handleClick=(value)=>{
        setInput((prevInput)=> prevInput+value);
    }

    let handleClear=()=>{
        setInput('');
        setResult('');
    }

    let handleCalculate=()=>{
        try{
            setResult(eval(input));
        }
        catch(error){
            setResult('Error');
        }
    }
    
    let handleBackspace=()=>{
        setInput((prevInput)=>prevInput.slice(0,-1));
    }

    return(
<div>

    <Link to= "/">
        <button>Back To Home</button>
    </Link>

    <h1>Calculator</h1>
        <div>
            <input type="text" value={input} placeholder='Calculate something...!'></input>
            <div>Hurreyy...! 
                Your result is here</div>
            <div>{result}</div>
            
        </div>

       

        <div>
            <button onClick={()=>handleClick('1')}>1</button>
            <button onClick={()=>handleClick('2')}>2</button>
            <button onClick={()=>handleClick('3')}>3</button>
            <button onClick={()=>handleClick('4')}>4</button>
            <button onClick={()=>handleClick('5')}>5</button>
            <button onClick={()=>handleClick('6')}>6</button>
            <button onClick={()=>handleClick('7')}>7</button>
            <button onClick={()=>handleClick('8')}>8</button>
            <button onClick={()=>handleClick('9')}>9</button>
            <button onClick={()=>handleClick('0')}>0</button>
            <button onClick={()=>handleClick('+')}>+</button>
            <button onClick={()=>handleClick('-')}>-</button>
            <button onClick={()=>handleClick('*')}>*</button>
            <button onClick={()=>handleClick('/')}>/</button>
            <button onClick={()=>handleClick('.')}>.</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={handleClear}>Reset</button>
            <button onClick={handleBackspace}>DEL</button>
            
        </div>    
</div>  

    )
}

export default  Calculator;