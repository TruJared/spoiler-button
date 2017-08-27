var divToggleVis = document.getElementById('spoiler_text');

// divToggleVis.style.display = 'none';


document.getElementById('spoiler_button').onclick = function() {
    if (divToggleVis.style.display === 'none') {
        divToggleVis.style.display = 'block';
    } else {
        divToggleVis.style.display = 'none';
    }
};
