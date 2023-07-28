

export  function initCodeLine(){
    const codeBlocks = document.querySelectorAll('pre .hljs')
    codeBlocks.forEach(e=>{
       const linesCount =  Math.floor((e.offsetHeight-40) /e.querySelector('span').offsetHeight)
       const codeLineContainer =  document.createElement("div");
       codeLineContainer.classList.add('code-line-container')
       for (let i = 0; i < linesCount; i++) {
        const span = document.createElement("span");
        span.classList.add('code-line')
        span.textContent = i+1
        codeLineContainer.appendChild(span) 
       }
       e.appendChild(codeLineContainer)
    })
   
   
}