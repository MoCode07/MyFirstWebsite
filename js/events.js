function clicked(){
    let name = document.getElementById('name').value;
    if (name == 'Enter your name!')
        window.alert('Please enter your name!')
    else
        window.alert(name + ', you clicked the button')
    
}