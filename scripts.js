const blankBtn = document.getElementById('blank-btn');

function showMessage() {
    alert('Nope--that button doesn\'t do anything.');
}

blankBtn.addEventListener('click', showMessage);