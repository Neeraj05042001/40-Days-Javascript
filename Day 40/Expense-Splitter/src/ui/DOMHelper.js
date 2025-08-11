export class DOMHelpers {
  static getElementById(id) {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Element with ${id} not found`);
    }
    return element;
  }

  static createOption(text, value) {
    return new Option(text, value);
  }

  static createListItem(text, className = "expense-item") {
    const li = document.createElement("LI");
    li.textContent = text;
    if (className) {
      li.className = className;
    }
    return li;
  }

  static clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  static appendFragment(parent, items, createItemFn) {
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      fragment.appendChild(createItemFn(item));
    });
    parent.appendChild(fragment);
  }
}
