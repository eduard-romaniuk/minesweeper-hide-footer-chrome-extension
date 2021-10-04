function createFooterSwitch() {
	var button = document.createElement('span');
	button.id = 'footer_switch';
	button.title = 'on/off footer';
	button.style = 'color: blue; text-decoration: underline; cursor: pointer;';
	return button;
}

var footer_switch = createFooterSwitch();
let footer = document.getElementById('footer');
let scores = document.getElementById('scores-container');
var footer_hidden = false;

function hideFooter() {
	if (footer_hidden) {
		footer.style.display = 'block';
		scores.style.display = 'block';
		footer_switch.textContent = 'Footer (on)';
	} else {
		footer.style.display = 'none';;
		scores.style.display = 'none';;
		footer_switch.textContent = 'Footer (off)';
	}
	footer_hidden = !footer_hidden;
}



var menu = document.getElementById('game-container').children[0];
menu.appendChild(document.createTextNode(' | '));
menu.appendChild(footer_switch);

footer_switch.addEventListener('click', hideFooter, false);

hideFooter();