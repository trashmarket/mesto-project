
const creatElement = (children, parentTag, parentSelector) => {
  const elementDom = document.createElement(parentTag);
  elementDom.className = parentSelector;
  elementDom.append(children);
  return elementDom;
}

const searchElementOfCurrentTarget = (popupAddCard, selector) => popupAddCard.querySelector(selector);

const getForm = (selector) => document.querySelector(selector).querySelector('.popup__form');

export {
        searchElementOfCurrentTarget,
        creatElement,
        getForm,
      }
