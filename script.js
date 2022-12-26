let formData = document.querySelector('.popup-form'),
    // formCard= document.querySelector('.card-form'),
    formInputs = document.querySelectorAll('.input'),
    inputName = document.querySelector('.input-name'),
    inputEmail = document.querySelector('.input-email'),
    inputAdress =document.querySelector('.input-adress'),
    inputPhone = document.querySelector('.input-phone'),
    inputCardNum = document.querySelector('.input-cardNumber'),
    inputValid = document.querySelector('.input-cartData');
// Проверка email
function validateEmail(email) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(String(email).toLowerCase());
}
// Проверка номера телефона (+, 9 цифр длина )
function validatePhone(phone) {
    let regNum = /^\+\d{9,}$/;
    return regNum.test(String(phone));
}
// Проверка номера карты (16 цифр)
// function validateCardNum(cardNum) {
//     let regCard = /^\d{16}$/;
//     return regCard.test(String(cardNum));
// }

function validateName(name) {
    let nameArr = name.split(' ')
    if (nameArr.length >= 2) {
      for (let i=0; i < nameArr.length; i++) {
        // console.log(nameArr[i].length)
    if (nameArr[i].length < 3) {
      return false
    }
      else {
        return true
      }
    } 
    }
    else {
      return false
  }
  }

  function validateAdress(adress) {
    let adressArr = adress.split(' ')
    if (adressArr.length >= 3) {
      for (let i=0; i < adressArr.length; i++) {
        // console.log(nameArr[i].length)
    if (adressArr[i].length < 5) {
      return false
    }
      else {
        return true
      }
    } 
    }
    else {
      return false
  }
  }
function validateValid(yymm) {
    let regDate = /^\d{2}\/\d{2}$/;
    return regDate.test(String(yymm));
}
// Проверка CVV(3 цифры)
function validateCVV(yymm) {
    let regDate = /^\d{2}\/\d{2}$/;
    return regDate.test(String(yymm));
}


//Функция отправки формы
formData.onsubmit = function() {
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        nameVal = inputName.value,
        adressVal = inputAdress.value,
        cardNumVal= inputCardNum.value,
        validCardVal = inputValid.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    })
// Если в массиве пустых инпутов есть элемент - это ошибка
        if (emptyInputs.length !== 0) {
            console.log('inputs not filled');
            return false;
        }
// Если email валиден убираем error
        if(!validateEmail(emailVal)) {
            console.log('email not valid');
            inputEmail.classList.add('error');
            return false;
        } else {
            inputEmail.classList.remove('error');
        }
// Проверка телефона 
            if (!validatePhone(phoneVal)) {
                console.log('phone not valid');
                inputEmail.classList.add('error');
                return false;
            } else {
                inputEmail.classList.remove('error');
            }
// Check name field
            if (!validateName(nameVal)) {
                console.log('name not valid');
                inputName.classList.add('error');
                return false;
            } else {
                inputName.classList.remove('error');
            }
// Проверяем адрес на три слова и 5 символов
            if (!validateAdress(adressVal)) {
                console.log('adress not valid');
                inputAdress.classList.add('error');
                return false;
            } else {
                inputAdress.classList.remove('error');
            }
 // Проверка номера карты 
            if(!validateCardNum(cardNumVal)) {
                console.log('card number not valid');
                inputCardNum.classList.add('error');
                return false;
            } else {
                inputCardNum.classList.remove('error');
            }    
// Проверка поля валидности 
            if (!validateValid(validCardVal)) {
                console.log('validCard not valid');
                inputValid.classList.add('error');
                return false;
            } else {
                inputValid.classList.remove('error');
            }
            
}

            

// formCard.onsubmit = function() {
//     let cardNumVal= inputCardNum.value
// 

// выбираем банк по номеру карты 

 let bankImg = document.querySelector('.card-img-logo'),
 numbers = /[0-9]/,
 regExp = /[0-9]{4}/

//  inputCardNum.oninput= function(cardNumVal) {
//     // let cardNumVal= inputCardNum.value
//     if (cardNumVal.lenght> 4) {
//          console.log('Ghbdth')
//         // if (cardNumVal[0] == 4) {
//         //     console.log(cardNumVal[0])
//         //     bankImg.src='./img/visa.svg'
//         // } else if (cardNumVal[0] == 5) {
//         //     bankImg.src='./img/mastercard.svg'
//         // } else if (cardNumVal[0] == 2){
//         //     bankImg.src='./img/sberbank-3.svg'
//         // } else {
//         //     alert ('Card number must started from 2, 4, 5')
//         // }
//         // return true
//     }
//   return false
// }

inputCardNum.addEventListener("input",function validateCardNum(ev) {
    // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
    if( ev.inputType === "insertText" && !numbers.test(ev.data) || inputCardNum.value.length > 19){
        inputCardNum.value = inputCardNum.value.slice(0, inputCardNum.value.length - 1)
        return false
    }
    // добавяем пробел после 4 цифр подряд
    if( regExp.test(inputCardNum.value.slice(-4)) && inputCardNum.value.length < 19){
        inputCardNum.value += " "
    } return true
})

