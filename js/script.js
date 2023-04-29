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


// for (var q = 1; q < 4; q++) {
//     let dynVarNameQuestLi = `liQuestion${q}`;
//     let dynVarNameQuestSub = `subtitleQ${q}`;
//     let dynVarNameQuestUl = `ulAnswers${q}`;
//     eval(dynVarNameQuestLi + " = pageBuilder.createItem('li', 'test_item')");
//     eval(dynVarNameQuestSub + " = pageBuilder.createItem('h2', 'subtitle', `${q}. Питання № ${q}`)");
//     eval(dynVarNameQuestUl + " = pageBuilder.createItem('ul', 'list_answers')");
//     console.log(`liQuestion${q}`)
//     for (var i = 1; i < 4; i++) {
//         let dynamicVarNameLabel = "labelQ" + q + "A" + i;
//         let dynamicVarNameRadio = "radioQ" + q + "A" + i;
//         let dynamicVarNameLi = "liAnswItemQ" + q + "A" + i;
//         eval(dynamicVarNameLi + " = pageBuilder.createItem('li', 'answer_item')");
//         eval(dynamicVarNameLabel + "= pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №' + i)");
//         eval(dynamicVarNameRadio + "= pageBuilder.createInput('input', 'item_radio', 'radio', 'question1','q' + q + '_a' + i, 'answ' + i)");
//     };
// };

// for (var q = 1; q < 4; q++) {
//     var dynVarNameQuestLi = `liQuestion${q}`;
//     var dynVarNameQuestSub = `subtitleQ${q}`;
//     var dynVarNameQuestUl = `ulAnswers${q}`;
//     eval(`${dynVarNameQuestLi} = pageBuilder.createItem('li', 'test_item')`);
//     eval(`${dynVarNameQuestSub} = pageBuilder.createItem('h2', 'subtitle', \`${q}. Питання № ${q}\`)`);
//     eval(`${dynVarNameQuestUl} = pageBuilder.createItem('ul', 'list_answers')`);
//     console.log(dynVarNameQuestLi)
//     for (var i = 1; i < 4; i++) {
//       var dynamicVarNameLabel = `labelQ${q}A${i}`;
//       var dynamicVarNameRadio = `radioQ${q}A${i}`;
//       var dynamicVarNameLi = `liAnswItemQ${q}A${i}`;
//       eval(`${dynamicVarNameLi} = pageBuilder.createItem('li', 'answer_item')`);
//       eval(`${dynamicVarNameLabel} = pageBuilder.createItem('label', 'label-radio', ' Варіант відповіді №' + ${i})`);
//       eval(`${dynamicVarNameRadio} = pageBuilder.createInput('input', 'item_radio', 'radio', 'question1', 'q${q}_a${i}', 'answ${i}')`);
//     };
//   };

// ulTest.appendChild(liQuestion1);
// liQuestion1.appendChild(subtitleQ1);
// liQuestion1.appendChild(ulAnswers1);
// ulAnswers1.appendChild(liAnswItemQ1A1);
// liAnswItemQ1A1.appendChild(labelQ1A1);
// labelQ1A1.prepend(radioQ1A1);
// ulAnswers1.appendChild(liAnswItemQ1A2);
// liAnswItemQ1A2.appendChild(labelQ1A2);
// labelQ1A2.prepend(radioQ1A2);
// ulAnswers1.appendChild(liAnswItemQ1A3);
// liAnswItemQ1A3.appendChild(labelQ1A3);
// labelQ1A3.prepend(radioQ1A3);


// ulTest.appendChild(liQuestion2);
// liQuestion2.appendChild(subtitleQ2);
// liQuestion2.appendChild(ulAnswers2);
// ulAnswers2.appendChild(liAnswItemQ2A1);
// liAnswItemQ2A1.appendChild(labelQ2A1);
// labelQ2A1.prepend(radioQ2A1);
// ulAnswers2.appendChild(liAnswItemQ2A2);
// liAnswItemQ2A2.appendChild(labelQ2A2);
// labelQ2A2.prepend(radioQ2A2);
// ulAnswers2.appendChild(liAnswItemQ2A3);
// liAnswItemQ2A3.appendChild(labelQ2A3);
// labelQ2A3.prepend(radioQ2A3);


// ulTest.appendChild(liQuestion3);
// liQuestion3.appendChild(subtitleQ3);
// liQuestion3.appendChild(ulAnswers3);
// ulAnswers3.appendChild(liAnswItemQ3A1);
// liAnswItemQ3A1.appendChild(labelQ3A1);
// labelQ3A1.prepend(radioQ3A1);
// ulAnswers3.appendChild(liAnswItemQ3A2);
// liAnswItemQ3A2.appendChild(labelQ3A2);
// labelQ3A2.prepend(radioQ3A2);
// ulAnswers3.appendChild(liAnswItemQ3A3);
// liAnswItemQ3A3.appendChild(labelQ3A3);
// labelQ3A3.prepend(radioQ3A3);




for (var q = 1; q < 4; q++) {
    var liQuestion = pageBuilder.createItem('li', 'test_item');
    var subtitle = pageBuilder.createItem('h2', 'subtitle', `${q}. Питання № ${q}`);
    var ulAnswers = pageBuilder.createItem('ul', 'list_answers');
    for (var i = 1; i < 4; i++) {
      var dynamicVarNameLabel = `labelQ${q}A${i}`;
      var dynamicVarNameRadio = `radioQ${q}A${i}`;
      var dynamicVarNameLi = `liAnswItemQ${q}A${i}`;
      var liAnswer = pageBuilder.createItem('li', 'answer_item');
      var labelAnswer = pageBuilder.createItem('label', 'label-radio', ` Варіант відповіді № ${i}`);
      var radioAnswer = pageBuilder.createInput('input', 'item_radio', 'radio', `question${q}`, `q${q}_a${i}`, `answ${i}`);
      liAnswer.appendChild(labelAnswer);
      labelAnswer.prepend(radioAnswer);
      ulAnswers.appendChild(liAnswer);
    }
    liQuestion.appendChild(subtitle);
    liQuestion.appendChild(ulAnswers);
    ulTest.appendChild(liQuestion);
  }
  
con


let boxButton = pageBuilder.createItem('div', 'box_button');
formMain.appendChild(boxButton);

let submit = pageBuilder.createItem('button', 'button-submit', 'Перевірити результат');
submit.setAttribute('type', 'submit');
submit.setAttribute('name', 'button-submit');
boxButton.appendChild(submit);