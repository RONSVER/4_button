HTMLCollection.prototype.myForEach = function myForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

HTMLCollection.prototype.myMap = function myMap(callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }

  return newArr;
};

HTMLCollection.prototype.myFilter = function myFilter(callback) {
  let newArr = [];
  let varFil = callback(this[i], i, this);

  for (let i = 0; i < this.length; i++) {
    if (varFil) {
      newArr.push(varFil);
    }
  }

  return newArr;
};

HTMLCollection.prototype.myReduce = function myReduce(firstValue, callback) {
  let acc = firstValue;

  if (!acc) {
    acc = this[i];
  } else {
    acc = firstValue;
  }

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

function eventFoo(event) {
  let btns = document.getElementsByClassName("coloredButton");

  btns.myForEach((el) => {
    el.style.backgroundColor = "";
  });

  event.target.style.backgroundColor = "white";
}
let btns = document.getElementsByClassName("coloredButton");

btns.myForEach((el) => {
  el.addEventListener("click", eventFoo);
});
