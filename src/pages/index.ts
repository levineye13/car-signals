import './index.scss';
import { images } from '../images';

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
const submitList = formElement.querySelector('.form__list') as HTMLOListElement;
const addSignalButton = formElement.querySelector(
  '.form__add-signal'
) as HTMLButtonElement;

const createMalfunctionElement = (
  template: HTMLTemplateElement,
  src: string,
  alt: string
): HTMLElement => {
  const figureElement = template.content.cloneNode(true)
    .childNodes[0] as HTMLElement;

  const img = figureElement.children[0] as HTMLImageElement;
  img.src = src;
  img.alt = alt;

  figureElement.children[1].textContent = alt;

  return figureElement;
};

images.forEach((image) => {
  const figureElement = createMalfunctionElement(
    template,
    image.src,
    image.text
  );

  figureElement.addEventListener('click', (): void => {
    imageElement.src = image.src;
    imageElement.alt = image.text;
    description.textContent = image.text;
  });

  const item = document.createElement('li');
  item.append(figureElement);

  lists[image.group].insertAdjacentElement('beforeend', item);
});

addSignalButton.addEventListener('click', () => {
  const figureElement = createMalfunctionElement(
    template,
    imageElement.src,
    imageElement.alt
  );

  const item = document.createElement('li');
  item.className = 'form__item';
  item.append(figureElement);

  submitList.insertAdjacentElement('beforeend', item);
  imageElement.src = '';
  imageElement.alt = '';
  description.textContent = '';
});

formElement.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  submitList.innerHTML = '';
});
