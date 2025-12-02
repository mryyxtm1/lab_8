Що таке DOM? DOM — це програмний інтерфейс для веб-документів. Він представляє структуру документа HTML або XML як ієрархічне дерево, де кожен елемент документа є об'єктом, з яким можна взаємодіяти через JavaScript.

Структура DOM: Вузли (Nodes): У DOM документ розглядається як дерево, яке складається з вузлів. Є кілька типів вузлів: Елементні вузли (Element nodes): представляють HTML-теги (наприклад,

,
). Текстові вузли (Text nodes): містять текстовий вміст елементів. Коментарі (Comment nodes): представляють коментарі в коді.

Доступ до DOM: Методи доступу: document.getElementById(): отримує елемент за ID. document.getElementsByClassName(): отримує всі елементи з певним класом. document.querySelector(): отримує перший елемент, що відповідає CSS-селектору. document.querySelectorAll(): отримує всі елементи, що відповідають CSS-селектору.

Методи додавання та маніпуляції елементами:

document.createElement(): створює новий елемент.

const newElement = document.createElement('p'); newElement.textContent = 'Новий елемент'; console.log(newElement); //

Новий елемент

appendChild(): додає новий елемент як останню дитину до батьківського елемента.

const container = document.getElementById('container'); const newParagraph = document.createElement('p'); newParagraph.textContent = 'Доданий абзац'; container.appendChild(newParagraph);
removeChild(): видаляє дочірній елемент. ПРИКЛАД

Елемент 1
Елемент 2
const list = document.getElementById('list'); const itemToRemove = list.children[1]; list.removeChild(itemToRemove); //

//
Елемент 1
//
Додавання обробника події

Для прикладу розглянемо подію миші click, яка відбувається, коли користувач клікає мишою на елементі.

Щоб додати обробник подій на елемент, використовується метод addEventListener.

const button = document.querySelector('button');

button.addEventListener('click', () => { console.log('Кнопку натиснуто'); });

Перший аргумент — це тип події, що має відбутися на елементі, другим — обробник події, це функція, яка викличеться, коли подія відбудеться.

Звісно, в браузері існує дуже багато подій, і ми поступово будемо з деякими з них знайомитися. Ось невеличкий перелік найпоширеніших:

mouseover та mouseout – курсор наводиться та залишає елемент відповідно; mousemove – курсор миші рухається над елементом; mousedown та mouseup – натискання та відпускання кнопки миші; click – на елементі клікнули лівою кнопкою миші або торкнулися на пристрої з сенсорним екраном; contextmenu – клік правою кнопкою миші; submit – відправка форми; focus та blur – елемент форми отримує та втрачає фокус; DOMContentLoaded - DOM повністю побудовано (сторінка готова до роботи); load - ресурс завантажено (наприклад, картинку); transitionend – CSS-анімацію завершено.
