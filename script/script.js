const popup = document.querySelector('.popup');
const profileButtonPopup = document.querySelector('.profile__update-profile');
const popupClose = popup.querySelector('.popup__close');

const showOrHide = function (event, popup) {
  let elementString = popup.className.split(' ')[0];
  console.log(event.target);
  if (event.target.closest('.' + elementString)){
    console.log('hello');
    popup.classList.remove('popup_active')
  } else {
    popup.classList.add('popup_active')
  }
}

profileButtonPopup.addEventListener('click', function(event) {
  showOrHide(event, popup)
});

popupClose.addEventListener('click', function(event){
  showOrHide(event, popup)
});