window.onload = function () {
    var screen  = document.getElementById('screen'),
        keypad  = document.querySelector('.parent'),
        buttons = keypad.getElementsByTagName('div');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            screen.value = screen.value + this.innerHTML;
            return false;
        };
    }
}