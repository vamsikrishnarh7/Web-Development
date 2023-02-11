
var tweetElement = document.querySelector("#tweet");
// current total characters elements
var charCountElement = document.querySelector("#cur-chars");
// remaining characters element
var remainingCharCountElement = document.querySelector("#remaining-chars");


tweetElement.addEventListener("keypress",()=>{
    changeCount(0); // as it is keypress event, make copy pasted text length zero
})

tweetElement.addEventListener("paste",(event)=>{
    var pasteText = (event.clipboardData || window.clipboardData).getData('text'); // window.clipboardData is for IE 
    
    pasteText = (pasteText.length > 240)?pasteText.slice(0,240):pasteText;
    
    console.log(pasteText);
    
    changeCount(pasteText.length-1);
})


function changeCount(pasteTextLen){
    // get length of text that entered in text-area
    
    let count = tweetElement.value.length+ pasteTextLen + 1;
    if(count >=240){
        tweetElement.value = tweetElement.value.slice(0,240);
        count = tweetElement.value.length+ pasteTextLen + 1;
    }
    let remainingChars = 240-count;
    charCountElement.textContent = count;
    remainingCharCountElement.textContent = remainingChars;
    
}

tweetElement.addEventListener("keyup",(event)=>{
    
    if(event.keyCode === 8){// keyCode of backspace is 8
        if(parseInt(charCountElement.textContent)>0){
            charCountElement.textContent = parseInt(charCountElement.textContent)-1;
            remainingCharCountElement.textContent = parseInt(remainingCharCountElement.textContent)+1;
        }
    }
})