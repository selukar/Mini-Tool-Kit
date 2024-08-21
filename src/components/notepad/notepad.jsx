import React , {useState, useEffect} from 'react';
import{Link} from 'react-router-dom';

export default function Notepad(){

    let[text, setText]=useState(localStorage.getItem('note') || '');

    useEffect(()=>{
        let timeoutId =setTimeout(()=>{
            localStorage.setItem('note',text);
        },500);

        return()=>clearTimeout(timeoutId);
    },[text]);



    let applyFormating = (tag)=>{
        let textarea = document.getElementById('editor');
        let start = textarea.selectionStart;
        let end= textarea.selectionEnd;

        if(start===end) return;

        let selectText = text.substring(start,end);
        let formattedText;

        switch (tag) {
          case 'bold':
            formattedText = `**${selectedText}**`;
            break;
          case 'italic':
            formattedText = `*${selectedText}*`;
            break;
          case 'underline':
            formattedText = `<u>${selectedText}</u>`;
            break;
          default:
            return;
        }
    
        const newText = text.substring(0, start) + formattedText + text.substring(end);
        setText(newText);
      };






    let handleExport=(format)=>{
        let element = document.createElement('a');
        let file;
        if(format==='txt'){
            file=new Blob([text],{type:'text/plain'});
            element.download='note.txt';
        }
        else if(format==='pdf'){
            file=new Blob([text],{type:'application/pdf'});
            element.download='note.pdf';
        }

        element.href=URL.createObjectURL(file);
        document.body.appendChild(element);
        element.click();
    };


    return(
        <div className='notepad'>

            <div className="todonavbar">
                <Link to="/" className='backtohome'>
                    <span>Back To Home</span>
                </Link>
            </div>

            <div className='toolbar'>
                
            <button onClick={()=>document.execCommand('bold',false,'')}>Bold</button>
            <button onClick={()=>document.execCommand('italic',false,'')}>Italic</button>
            <button onClick={()=>document.execCommand('underline',false,'')}>Underline</button>
            <button onClick={()=>handleExport('txt')}>Export as TXT</button>
            <button onClick={()=>handleExport('pdf')}>Export as PDF</button>
            </div>

            <div
                className='editor'
                id='editor'
                contentEditable="true"
                onChange={(e)=>setText(e.currentTarget.innerHTML)}
                dangerouslySetInnerHTML={{ __html: text }}
                style={{ minHeight: '200px', border: '1px solid #ccc', padding: '10px' }}
                placeholder="Start writing your note here...">

               
            </div>

</div>

    );
}