var divToggleVis = document.getElementById('spoiler_text');
var button = document.getElementById('spoiler_button');

button.onclick = function() {
    if (divToggleVis.style.display === 'none') {
        divToggleVis.style.display = 'block';
    } else {
        divToggleVis.style.display = 'none';
    }

    if (button.innerHTML === 'Show Spoilers') {
        button.innerHTML = 'Hide Spoilers';
    } else {
        button.innerHTML = 'Show Spoilers';
    }
};
