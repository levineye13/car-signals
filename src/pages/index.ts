import './index.scss';
import { images } from './../images';
import Malfunction from '../components/malfunction';
import {
  imageElement,
  description,
  formElement,
  lists,
  submitList,
  addSignalButton,
  menuList,
  menuItems,
} from '../utils/constants';

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
