export const page = document.body;

export const imageElement = page.querySelector(
  '.malfunctions__img'
) as HTMLImageElement;

export const description: HTMLElement = page.querySelector(
  '.malfunctions__description'
) as HTMLElement;

export const formElement = page.querySelector('.form') as HTMLFormElement;

export const lists = page.querySelectorAll('.malfunctions__sublist');

export const submitList = page.querySelector('.page__list') as HTMLOListElement;

export const addSignalButton = formElement.querySelector(
  '.form__add-signal'
) as HTMLButtonElement;

export const submitButton = formElement.querySelector(
  '.form__submit'
) as HTMLButtonElement;

export const menuList = formElement.querySelector(
  '.malfunctions__list'
) as HTMLUListElement;

export const responceElement = formElement.querySelector(
  '.malfunctions__responce'
) as HTMLParagraphElement;

export const menuItems = menuList.querySelectorAll('.malfunctions__item');

export const loaderElement = page.querySelector('.loader') as HTMLDivElement;

export enum Colors {
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow',
}
