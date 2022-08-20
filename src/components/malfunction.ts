class Malfunction {
  private template: string;
  private src: string;
  private description: string;

  public constructor(
    templateSelector: string,
    src: string,
    description: string
  ) {
    this.template = templateSelector;
    this.src = src;
    this.description = description;
  }

  private getElementFromTemplate(): HTMLElement {
    return (
      document.body.querySelector(this.template) as HTMLTemplateElement
    ).content.cloneNode(true).childNodes[0] as HTMLElement;
  }

  public getView(): HTMLElement {
    const element = this.getElementFromTemplate();

    const imageElement = element.children[0] as HTMLImageElement;
    imageElement.src = this.src;
    imageElement.alt = this.description;

    const descriptionElement = imageElement.nextElementSibling as HTMLElement;
    descriptionElement.textContent = this.description;

    return element;
  }
}

export default Malfunction;
