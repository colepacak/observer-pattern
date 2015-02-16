function Multiplication( multiplier) {
  this.multiplier = multiplier;
}

Multiplication.prototype = {
  update: function( subjectVal ) {
    var newVal = subjectVal * this.multiplier,
        valueElem = document.querySelector( '#' + this.id + ' .value' );

    valueElem.innerHTML = newVal;
  }
}
