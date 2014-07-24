function countDown(secs, elem){
    var element, timer;
    element= document.getElementById(elem);
    element.innerHTML = secs;
    if(secs < 1){
        clearTimeout(timer);
        element.innerHTML = 0;
    }
    secs--;
    timer = setTimeout('countDown('+secs+',"'+elem+'")',1000)
};

