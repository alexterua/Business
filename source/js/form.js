(function() {

  var me = {};
  var form = document.querySelector('.form-container');
  var closeButton = null;

  function onClose() {
    me.close();
    closeButton.removeEventListener('click', onClose);
  }

  me.open = function() {
    form.classList.remove('visually-hidden');

    closeButton = document.querySelector('.form__close-button');
    closeButton.addEventListener('click', onClose);
  };

  me.close = function() {
    form.classList.add('visually-hidden');
  };

  me.isValid = function() {

    var requiredFields = document.querySelectorAll('[data-valid="required"]');
    var emailValue = document.querySelector('[data-email]').value;
    var numberValue = document.querySelector('[data-number]').value;

    if (!me.isAllCompleted(requiredFields)) {
      console.log('Заполните пожалуйста все необходимые поля');
      return false;
    } else if(!THE.validation.isEmail(emailValue)) {
      console.log('Неверно заполнено поле Email');
      return false;
    } else if(!THE.validation.isNumber(numberValue)) {
      console.log('Неверно заполнено поле Номер');
      return false;
    }
    return true;
  };

  me.isAllCompleted = function(data) {
    var result = true;

    for(var i = 0; i < data.length; i++) {
      if(!THE.validation.isNotEmpty(data[i].value)) {
        result = false;
        break;
      }
    }

    return result;
  };

  THE.form = me;
}());