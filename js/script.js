function checkU(a) {
    if(a === undefined) {
        a = "";
    }
    return a;
};
const pageBuilder = {
    createItem(type, _class, text) {
        element = document.createElement(type);
        element.className = checkU(_class);
        element.textContent = checkU(text);
        return element;
    },
    createForm(_class, action, method) {
        form = document.createElement('form');
        form.className = checkU(_class);
        form.action = action;
        form.method = method;
        return form;
    },
    createInput(type, _class, typeInput, name, id, value) {
        input = document.createElement(type);
        input.className = _class;
        input.type = typeInput;
        input.name = name;
        input.id = id;
        input.value = value;
        return input;
    },
};
let title = pageBuilder.createItem('h1', 'title', 'Тест по програмуванню');
let wrapper = pageBuilder.createItem('div', 'wrapper');
let formMain = pageBuilder.createForm('form-main', '', 'post');
let ulTest = pageBuilder.createItem('ul', 'test');

document.body.appendChild(title);
document.body.appendChild(wrapper);
wrapper.appendChild(formMain);
formMain.appendChild(ulTest);

// Block Question 1 
let liQuestion1 = pageBuilder.createItem('li', 'test_item');
let subtitleQ1 = pageBuilder.createItem('h2', 'subtitle', '1. Питання №1');
let ulAnswers1 = pageBuilder.createItem('ul', 'list_answers');
let liAnswItemQ1A1 = pageBuilder.createItem('li', 'answer_item');
let labelQ1A1 = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №1');
let radioQ1A1 = pageBuilder.createInput('input', 'item_radio', 'radio', 'question1','q1_a1', 'answ1');
let liAnswItemQ1A2 = pageBuilder.createItem('li', 'answer_item');
let labelQ1A2 = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №2');
let radioQ1A2 = pageBuilder.createInput('input', 'item_radio', 'radio', 'question1','q1_a2', 'answ2');
let liAnswItemQ1A3 = pageBuilder.createItem('li', 'answer_item');
let labelQ1A3 = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №3');
let radioQ1A3 = pageBuilder.createInput('input', 'item_radio', 'radio', 'question1','q1_a3', 'answ3');

ulTest.appendChild(liQuestion1);
liQuestion1.appendChild(subtitleQ1);
liQuestion1.appendChild(ulAnswers1);
ulAnswers1.appendChild(liAnswItemQ1A1);
liAnswItemQ1A1.appendChild(labelQ1A1);
labelQ1A1.prepend(radioQ1A1);
ulAnswers1.appendChild(liAnswItemQ1A2);
liAnswItemQ1A2.appendChild(labelQ1A2);
labelQ1A2.prepend(radioQ1A2);
ulAnswers1.appendChild(liAnswItemQ1A3);
liAnswItemQ1A3.appendChild(labelQ1A3);
labelQ1A3.prepend(radioQ1A3);

// Block Question 2 
let liQuestion2 = pageBuilder.createItem('li', 'test_item');
let subtitleQ2 = pageBuilder.createItem('h2', 'subtitle', '2. Питання №2');
let ulAnswers2 = pageBuilder.createItem('ul', 'list_answers');
let liAnswItemQ2A1 = pageBuilder.createItem('li', 'answer_item');
let labelQ2A1 = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №1');
let radioQ2A1 = pageBuilder.createInput('input', 'item_radio', 'radio', 'question2','q2_a1', 'answ1');
let liAnswItemQ2A2 = pageBuilder.createItem('li', 'answer_item');
let labelQ2A2 = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №2');
let radioQ2A2 = pageBuilder.createInput('input', 'item_radio', 'radio', 'question2','q2_a2', 'answ2');
let liAnswItemQ2A3 = pageBuilder.createItem('li', 'answer_item');
let labelQ2A3 = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №3');
let radioQ2A3 = pageBuilder.createInput('input', 'item_radio', 'radio', 'question2','q2_a3', 'answ3');

ulTest.appendChild(liQuestion2);
liQuestion2.appendChild(subtitleQ2);
liQuestion2.appendChild(ulAnswers2);
ulAnswers2.appendChild(liAnswItemQ2A1);
liAnswItemQ2A1.appendChild(labelQ2A1);
labelQ2A1.prepend(radioQ2A1);
ulAnswers2.appendChild(liAnswItemQ2A2);
liAnswItemQ2A2.appendChild(labelQ2A2);
labelQ2A2.prepend(radioQ2A2);
ulAnswers2.appendChild(liAnswItemQ2A3);
liAnswItemQ2A3.appendChild(labelQ2A3);
labelQ2A3.prepend(radioQ2A3);

// Block Question 3 
let liQuestion3 = pageBuilder.createItem('li', 'test_item');
let subtitleQ3 = pageBuilder.createItem('h2', 'subtitle', '3. Питання №3');
let ulAnswers3 = pageBuilder.createItem('ul', 'list_answers');
let liAnswItemQ3A1 = pageBuilder.createItem('li', 'answer_item');
let labelQ3A1 = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №1');
let radioQ3A1 = pageBuilder.createInput('input', 'item_radio', 'radio', 'question3','q3_a1', 'answ1');
let liAnswItemQ3A2 = pageBuilder.createItem('li', 'answer_item');
let labelQ3A2 = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №2');
let radioQ3A2 = pageBuilder.createInput('input', 'item_radio', 'radio', 'question3','q3_a2', 'answ2');
let liAnswItemQ3A3 = pageBuilder.createItem('li', 'answer_item');
let labelQ3A3 = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №3');
let radioQ3A3 = pageBuilder.createInput('input', 'item_radio', 'radio', 'question3','q3_a3', 'answ3');

ulTest.appendChild(liQuestion3);
liQuestion3.appendChild(subtitleQ3);
liQuestion3.appendChild(ulAnswers3);
ulAnswers3.appendChild(liAnswItemQ3A1);
liAnswItemQ3A1.appendChild(labelQ3A1);
labelQ3A1.prepend(radioQ3A1);
ulAnswers3.appendChild(liAnswItemQ3A2);
liAnswItemQ3A2.appendChild(labelQ3A2);
labelQ3A2.prepend(radioQ3A2);
ulAnswers3.appendChild(liAnswItemQ3A3);
liAnswItemQ3A3.appendChild(labelQ3A3);
labelQ3A3.prepend(radioQ3A3);
// End blocks question

let boxButton = pageBuilder.createItem('div', 'box_button');
formMain.appendChild(boxButton);

let submit = pageBuilder.createItem('button', 'button-submit', 'Перевірити результат');
submit.setAttribute('type', 'submit');
submit.setAttribute('name', 'button-submit');
boxButton.appendChild(submit);