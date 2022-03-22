let Button = document.querySelectorAll('.add-btn');

const ClickBtn = function(evt)
{
	let ParentButton = evt.target.parentNode;
	let choesElement = ParentButton.querySelector('.choose-elem');
	choesElement.classList.toggle('hidden');
};

Button.forEach(function(but)
{
	but.addEventListener('click', ClickBtn);
}
);

const changeLayoutHandler = function (evt) {
	const newLayout = evt.target.value;
	//console.log('layout==' + newlayout);
	let layoutElement = document.querySelector('.layout');
	layoutElement.classList.remove('layout--landing');
	layoutElement.classList.remove('layout--blog');
	layoutElement.classList.remove('layout--shop');
	layoutElement.classList.add('layout--'+ newLayout);
}

document.querySelector('.grid-select').addEventListener('change', changeLayoutHandler);

/**const h1TelementElement = document.querySelector('#h1-template').content;
const h1BlockElement = h1TelementElement.querySelector('.element');
const h1CloneElement = h1BlockElement.cloneNode('true');
const headerWrapperElement = document.querySelector('.header__elements-wrapper');
headerWrapperElement.append(h1CloneElement);
headerWrapperElement.parentNode.classList.remove('header--empty');**/

const buttonDeleteHandler = function (evt) {
	const element = evt.target.parentNode;
	const wrapper = element.parentNode;
	const block = wrapper.parentNode;
	element.remove();
	
	const wrapperItems = wrapper.querySelectorAll('.element');
	if(wrapperItems.length === 0) {
		if (block.classList.contains('header')) {
		block.classList.add('header--empty');
		
	}
	
	if(block.classList.contains('content')) {
		block.classList.add('content--empty');
		
	}
	
	if (block.classList.contains('footer')) {
		block.classList.add('footer--empty');
	 }
  }
};

const editContentHandler = function(evt) {
	const editedElement = evt.target;
	
	let curerenValue;
	
	if (editedElement.tagName === 'IMG') {
	currentValue = editedElement.src;
	}
	else {
		currentValue = editedElement.textContent;
	}
	
	const newValue = window.prompt('Вы хотите поменять значение?',currentValue);
	
	if(editedElement.targName ==='IMG') {
		editedElement.src = newValue;
	} else {
		editedElement.textContent = newValue;
	}
	
	editedElement.textContent = newValue;
}

const choeseButtonElements =  document.querySelectorAll('.choose-elem__btn');

const addElementHandler = function(evt)
{
	const clickedBtn = evt.target;
	const addMenuElement = clickedBtn.parentNode;
	addMenuElement.classList.add('hidden');
	
	const blockType = clickedBtn.dataset.type;
	
	const blockContainer = clickedBtn.dataset.container;
	
	const template = document.querySelector('#' + blockType + '-template').content;
	const templateElement = template.cloneNode(true);
	const blockElement = templateElement.querySelector('.element');
	
	const containerWraperElement = document.querySelector('.' + blockContainer + '__elements-wrapper');
	containerWraperElement.append(blockElement);
	
	if (blockContainer.includes('content')) {
		containerWraperElement.parentElement.classList.remove('content--empty');
	} else {
		containerWraperElement.parentElement.classList.remove(blockContainer + '--empty');
	}
	
	blockElement.querySelector('.delete-btn').addEventListener('click',buttonDeleteHandler);
	blockElement.querySelector('.template-content').addEventListener('dblclick',editContentHandler);
}


	
choeseButtonElements.forEach(function (item) {
 return item.addEventListener('click', addElementHandler);
});