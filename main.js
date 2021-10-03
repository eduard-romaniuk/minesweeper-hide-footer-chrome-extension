var menu = document.getElementById('game-container').children[0];
menu.innerHTML = menu.innerHTML + '| <span id="footer_switch" title="on/off footer" style="color: blue; text-decoration: underline; cursor: pointer;">Footer (on)</span>';

let footer_switch = document.getElementById('footer_switch');
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

footer_switch.addEventListener('click', hideFooter, false);

hideFooter();