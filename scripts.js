const allButtonNodes = document.querySelectorAll('.calc-btn');
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

function defaultAction() {
    outputNode.innerHTML = '<span>No</span>';
}

allButtonNodes.forEach(node => {
    node.addEventListener('click', defaultAction);
});

blankBtn.addEventListener('click', showMessage);
blankBtn.removeEventListener('click', defaultAction);
equalsBtn.addEventListener('click', writeText);
equalsBtn.removeEventListener('click', defaultAction);
clearBtn.addEventListener('click', clearText);
clearBtn.removeEventListener('click', defaultAction);