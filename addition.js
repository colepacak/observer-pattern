function Addition( addend ) {
  this.addend = addend;
}

Addition.prototype = {
  update: function( subjectVal ) {
    var newVal = subjectVal + this.addend,
        valueElem = document.querySelector( '#' + this.id + ' .value' );

    valueElem.innerHTML = newVal;
  }
}
