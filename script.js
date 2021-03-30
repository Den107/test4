//1 IIFE function
const res = (function () {
  let name = "Ivan";
  let surName = 'Ivanov';

  function getName() {
    return name;
  }
  function getSurName() {
    return surName;
  }
  return {
    getName,
    getSurName
  };
})();

//2 Prototype
function User(firstname, lastName) {
  this.firstname = firstname;
  this.lastName = lastName;
}

User.prototype.sayHello = function () {
  return `Hello ${this.firstname} ${this.lastName}`;
};

function User2(firstname, lastName, age) {
  User.call(this, firstname, lastName);
  this.age = age;
}

User2.prototype.sayAge = function () {
  return `My age is ${this.age}`;
};

User2.prototype = Object.create(User.prototype);
User2.prototype.constructor = User2;

// 3 Promise
const promise = new Promise((resolve, reject) => {
  let isTrue = false;
  if (isTrue) {
    setTimeout(() => resolve(Math.random()), 3000);
  } else {
    reject(new Error('Error'));
  }
});

promise.then(res => console.log(res))
  .catch(error => console.error(error));

//4 Validate
const input = document.querySelector('input');
function validateInput(selector, maxNumber = 1000) {
  const regExp = /^\d{1,}\.\d{2}$/;
  let validMaxNumber = (maxNumber - 0.01).toFixed(2);

  selector.addEventListener('change', () => {
    if (+(selector.value) >= maxNumber) {
      selector.value = validMaxNumber;
    } else if (regExp.test(selector.value)) {
      selector.style.background = 'green';
    } else if (!selector.value) {
      selector.style.background = '';
    } else {
      selector.style.background = 'red';
    }
  });
}

validateInput(input, 1000);
