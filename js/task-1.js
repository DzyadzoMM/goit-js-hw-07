const categoriesList = document.querySelector('#categories');
if (categoriesList) {
const categoryItems = document.querySelectorAll('#categories > li.item');
const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);
categoryItems.forEach(categoryItem => {
const categoryTitleElement = categoryItem.querySelector('h2');
const categoryTitle = categoryTitleElement ? categoryTitleElement.textContent : 'Назва категорії відсутня';
const nestedList = categoryItem.querySelector('ul');
const nestedItems = nestedList ? nestedList.querySelectorAll('li') : [];
const numberOfElements = nestedItems.length;
console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${numberOfElements}`);});
} else {
console.log('Елемент з ID "categories" не знайдено на сторінці.');}