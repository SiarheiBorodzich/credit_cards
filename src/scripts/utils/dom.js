import { generateId } from './';

export function $qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

export function $remove(selector, scope) {
  const element = $qs(selector, scope);

  if (element) {
    element.remove();
  }
}

export function $insertInto(target, text) {
  target.insertAdjacentHTML('beforeend', text);
}

export function $insertAfter(target, text) {
  target.insertAdjacentHTML('afterend', text);
}

export function $getFormValues(formElements) {
  const formValues = {};

  Object.entries(formElements).forEach(([key, { value }]) => {
    formValues[key] = value;
  });

  return Object.assign(formValues, { id: generateId() });
}

export function $getItemId(element) {
  return parseInt(element.dataset.id, 10);
}

export function $getItemIdOfParent(element) {
  return parseInt(element.parentNode.dataset.id, 10);
}

export function $on(target, type, callback, capture) {
  target.addEventListener(type, callback, !!capture);
}

export function $delegate(target, selector, type, handler, capture) {
  const dispatchEvent = (event) => {
    const targetElement = event.target;
    const potentialElements = target.querySelectorAll(selector);
    let i = potentialElements.length;

    while (i--) {
      if (potentialElements[i] === targetElement) {
        handler.call(targetElement, event);
        break;
      }
    }
  };

  $on(target, type, dispatchEvent, !!capture);
}
