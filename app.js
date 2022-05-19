
var type='off'
function lightOn (){
    if (type == 'on'){
        type = 'off';
    }
    else{
        type ='on';
    }
    document.getElementById('img').src='image/'+type+'.png';
    document.getElementById('img').value=type;
}