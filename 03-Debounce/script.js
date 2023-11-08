var debounceRunning = false;
var changeCol
function  debounce(timer){
    if(!debounceRunning){
        changeCol = setTimeout(changeColor, timer);
        debounceRunning = true;
        document.getElementById('disp').innerText = 'Changing Color, Click again to delay';
    }
    else if(debounceRunning){
        clearTimeout(changeCol);
        document.getElementById('disp').innerText = 'Delayed Color Change, Please Wait';
        changeCol = setTimeout(changeColor, timer);
        debounceRunning = true;
    }
}

function changeColor(){
    if(document.getElementById('but1').style.backgroundColor === 'black'){
        document.getElementById('but1').style.backgroundColor = 'white';
        document.getElementById('but1').style.color = 'black';
    }
    else{
        document.getElementById('but1').style.backgroundColor = 'black';
        document.getElementById('but1').style.color = 'white';
    }

    document.getElementById('disp').innerText = 'Color Has Been Changed';
    debounceRunning = false;
}