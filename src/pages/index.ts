import './index.scss';
import { images } from './../images';
import Malfunction from '../components/malfunction';

const page = document.querySelector('.page') as HTMLDivElement;
const imageElement = page.querySelector(
  '.malfunctions__img'
) as HTMLImageElement;
const description: HTMLElement = page.querySelector(
  '.malfunctions__description'
) as HTMLElement;
const template = document.body.querySelector(
  '#template'
) as HTMLTemplateElement;

const formElement = page.querySelector('.form') as HTMLFormElement;
const lists = page.querySelectorAll('.malfunctions__sublist');
const submitList = page.querySelector('.page__list') as HTMLOListElement;
const addSignalButton = formElement.querySelector(
  '.form__add-signal'
) as HTMLButtonElement;
const menuList = formElement.querySelector(
  '.malfunctions__list'
) as HTMLUListElement;
const menuItems = menuList.querySelectorAll('.malfunctions__item');

images.forEach((image) => {
  const malfunction = new Malfunction(
    '#template',
    image.src,
    image.description
  );

  const malfunctionElement = malfunction.getView();

  malfunctionElement.addEventListener('click', (): void => {
    imageElement.src = image.src;
    imageElement.alt = image.description;
    description.textContent = image.description;
  });

  const item = document.createElement('li');
  item.append(malfunctionElement);

  lists[image.group].insertAdjacentElement('beforeend', item);
});

addSignalButton.addEventListener('click', () => {
  const malfunction = new Malfunction(
    '#template',
    imageElement.src,
    imageElement.alt
  );

  const malfunctionElement = malfunction.getView();

  const item = document.createElement('li');
  item.className = 'page__item';
  item.append(malfunctionElement);

  submitList.insertAdjacentElement('beforeend', item);
  imageElement.src = '';
  imageElement.alt = '';
  description.textContent = '';
});

formElement.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  submitList.innerHTML = '';
});

menuItems.forEach((item: Element) => {
  item.addEventListener('click', () => {
    menuItems.forEach((subitem) => {
      if (item !== subitem) {
        subitem.classList.remove('malfunctions__item_active');
      }
    });

    item.classList.toggle('malfunctions__item_active');

    if (item.classList.contains('malfunctions__item_active')) {
      menuList.classList.add('malfunctions__list_active');
    } else {
      menuList.classList.remove('malfunctions__list_active');
    }
  });
});
