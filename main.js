let button = document.querySelectorAll('.con');
let placeholder = document.querySelector('.fun');
let string = "";

button.forEach(function(buttons) {
    buttons.addEventListener('click', function(e) {
        // console.log('clicked')
        if(e.target.innerHTML == '=') {
            string = eval(string);
            placeholder.innerHTML = string;
            // console.log(string);
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            placeholder.innerHTML = string; 
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            placeholder.innerHTML = string;
        }
        else {
            string += e.target.innerHTML;
            placeholder.innerHTML = string; 
        }
    });
});
