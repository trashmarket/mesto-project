import {openPopup, closePopup} from './modal.js';
import {controlInputsAfterclickAddCard, getForm} from './utils.js';
import FormValidator from './validate.js';
import {setValidateForm} from './set-params-validate-form';

const cardFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-card'));

const popupAddCardInputs = document.querySelectorAll('.popup__input');

const openPopupAddCard = (popupAddCard, popupAddCardInputs) => {
  // openPopup(popupAddCard)
  controlInputsAfterclickAddCard(popupAddCardInputs, popupAddCard);
}

const handleCardFormSubmit = ({
  popupCard,
  popupButton,
  selectorActive,
}, carde) => {

  cardFormValid.toggleButtonState([...popupAddCardInputs], popupButton);
}

export {handleCardFormSubmit, openPopupAddCard};
