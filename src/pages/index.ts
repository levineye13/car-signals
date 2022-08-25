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
  submitButton,
  menuList,
  menuItems,
  loaderElement,
  responceElement,
} from '../utils/constants';
import { sendData } from '../utils/api';

const malfunctions: Array<{ src: string; description: string }> = [];

const checkStateSubmitButton = (): void => {
  if (malfunctions.length === 0) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

checkStateSubmitButton();

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
  malfunctions.push({ src: imageElement.src, description: imageElement.alt });

  const malfunction = new Malfunction(
    '#template',
    imageElement.src,
    imageElement.alt
  );

  const malfunctionElement = malfunction.getView();

  const item = document.createElement('li');
  item.className = 'page__item';
  item.append(malfunctionElement);

  checkStateSubmitButton();
  submitList.insertAdjacentElement('beforeend', item);
  imageElement.src = '';
  imageElement.alt = '';
  description.textContent = '';
});

formElement.addEventListener('submit', async (e: Event) => {
  e.preventDefault();
  loaderElement.classList.add('loader_active');
  responceElement.classList.add('malfunctions__responce_active');

  const timerPromise = new Promise<NodeJS.Timeout>((resolve) => {
    const timerId: NodeJS.Timeout = setTimeout(() => {
      responceElement.classList.remove('malfunctions__responce_active');

      resolve(timerId);
    }, 10000);
  });

  try {
    await sendData(malfunctions);
    responceElement.textContent = 'Данные успешно отправлены';
    malfunctions.length = 0;
    checkStateSubmitButton();
    submitList.innerHTML = '';
  } catch (e) {
    responceElement.textContent = 'Ошибка отпраки данных';
    console.error(e);
  }

  loaderElement.classList.remove('loader_active');
  timerPromise
    .then((timerId: NodeJS.Timeout) => {
      clearTimeout(timerId);
    })
    .catch((e) => console.error(e));
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
