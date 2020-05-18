document.getElementById('btn').style.visibility = 'hidden';

function clicked(){
    let name = document.getElementById('name').value;
        window.alert(name + ', you clicked the button')  
}

function showButton(){
    let input = document.getElementById('name').value;
    if(input != '')
        document.getElementById('btn').style.visibility = 'visible';
    else
        document.getElementById('btn').style.visibility = 'hidden';
}