const outputNode = document.getElementsByClassName('output-row')[0];
const blankBtn = document.getElementById('blank-btn');
const equalsBtn = document.getElementById('equals-btn');
const clearBtn = document.getElementById('clear-btn');

function showMessage() {
    alert('Nope--that button doesn\'t do anything.');
}

function writeText() {
    outputNode.innerHTML = '<span>Calculator doesn\'t actually function...</span>'
}

function clearText() {
    outputNode.innerHTML = '';
}

blankBtn.addEventListener('click', showMessage);
equalsBtn.addEventListener('click', writeText);
clearBtn.addEventListener('click', clearText);