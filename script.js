let count = 0;

const add = document.getElementById('add');
const save = document.getElementById('save');
const array = [];
const saveSpan = document.getElementById('saveText');

function AddElement(){
    const container = document.getElementById('container');
    const divInput = document.createElement('div');
    divInput.classList.add('input');

    const leftInputId = 'leftInput-' + count;
    const rightInputId = 'rightInput-' + count;
    const upBtnId = 'upBtn-' + count;
    const downBtnId = 'downBtn-' + count;
    const delBtnId = 'delBtn-' + count;

    count++;

    const leftInput = document.createElement('input');
    leftInput.id = leftInputId;

    const rightInput = document.createElement('input');
    rightInput.id = rightInputId;

    const upBtn = document.createElement('button');
    upBtn.textContent = '↑';
    upBtn.id = upBtnId;

    const downBtn = document.createElement('button');
    downBtn.textContent = '↓';
    downBtn.id = downBtnId;

    const delBtn = document.createElement('button');
    delBtn.textContent = '×';
    delBtn.id = delBtnId;

    delBtn.addEventListener('click', function() {
        container.removeChild(divInput); 
    });

    upBtn.addEventListener('click', function() {
        const prevSibling = divInput.previousElementSibling;
        if (prevSibling) {
            container.insertBefore(divInput, prevSibling); 
        }
    });

    downBtn.addEventListener('click', function() {
        const nextSibling = divInput.nextElementSibling;
        if (nextSibling) {
            container.insertBefore(nextSibling, divInput); 
        }
    });



    divInput.appendChild(leftInput);
    divInput.appendChild(rightInput);
    divInput.appendChild(upBtn);
    divInput.appendChild(downBtn);
    divInput.appendChild(delBtn);

    container.appendChild(divInput);
}

add.addEventListener('click', function(){
    AddElement();
});

save.addEventListener('click', function() {
    
    array.length = 0;
    const inputs = document.querySelectorAll('.input');

    inputs.forEach((inputDiv) => {
        const leftInput = inputDiv.querySelector('input[id^="leftInput-"]').value;
        const rightInput = inputDiv.querySelector('input[id^="rightInput-"]').value;

        array.push(`"${leftInput}":"${rightInput}"`); 
    });

    saveSpan.innerHTML = ' ';
    const result = `{${array.join(", ")}}`;
    saveSpan.innerText = result;
});