"use-strict";

var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки

var tabPopUp; // заголовок вкладки
var tabPopUpContent; // блок содержащий контент вкладки

window.onload = function () {

    tabPopUpContent = document.getElementsByClassName('popupContent');
    tabPopUp = document.getElementsByClassName('popup');
    hideTabsPopUPContent(1);

    tabContent = document.getElementsByClassName('tab-content');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);


}

document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}



document.getElementById('tabPopUp').onclick = function (e) {
    var target = e.target;
    if (target.className == 'popup') {
        for (var i = 0; i < tabPopUp.length; i++) {
            if (target == tabPopUp[i]) {
                showTabsPopUPContent(i);
                break;
            }
        }
    }
}

function hideTabsPopUPContent(a) {
    for (var i = a; i < tabPopUpContent.length; i++) {
        tabPopUpContent[i].classList.remove('show');
        tabPopUpContent[i].classList.add("hide");
        tabPopUp[i].classList.remove('active-pop-up');
    }
}

function showTabsPopUPContent(b) {
    if (tabPopUpContent[b].classList.contains('hide')) {
        hideTabsPopUPContent(0);
        tabPopUp[b].classList.add('active-pop-up');
        tabPopUpContent[b].classList.remove('hide');
        tabPopUpContent[b].classList.add('show');
    }
}


const tab1 = document.querySelector('#tab1');
const tab2 = document.querySelector('#tab2');
const tab3 = document.querySelector('#tab3');
const progresNav = document.getElementById('progres-nav');

tab1.addEventListener("click", function () {
    progresNav.classList.remove('end');
    progresNav.classList.remove('center');
    progresNav.classList.add('start');
});

tab2.addEventListener("click", function () {
    progresNav.classList.remove('start');
    progresNav.classList.remove('end');
    progresNav.classList.add('center');
});

tab3.addEventListener("click", function () {
    progresNav.classList.remove('center');
    progresNav.classList.add('end');
});

const busines = document.querySelector('#busines');
const personal = document.querySelector('#personal');

busines.addEventListener("click", function () {
    this.classList.add('active');
    personal.classList.remove('active');
});

personal.addEventListener("click", function () {
    this.classList.add('active');
    busines.classList.remove('active');
});


const siginUp = document.querySelector('#sign-up');

const logIn = document.querySelector('#log-in');

logIn.addEventListener("click", function () {
    CheckValidation();
    event.preventDefault();
});

siginUp.addEventListener("click", function () {
    CheckValidation();
    event.preventDefault();
});

function CheckValidation() {
    const input = document.querySelectorAll('.input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].value == '') {
            let formGroup = input[i].closest(".form-group");
            console.log(formGroup);
            formGroup.classList.add('error');
        }
    }

}

const error = document.querySelectorAll('.input');

for (let i = 0; i < error.length; i++) {
    error[i].addEventListener('click', function () {
        removeError();
    });
}


function removeError() {
    const formGroupError = document.querySelectorAll('.form-group');
    for (let i = 0; i < formGroupError.length; i++) {
        formGroupError[i].classList.remove('error');
    }
}