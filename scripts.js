// Extend a DOM element with a prototype
function extend( obj, extension ){
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}

// Add prototypes to DOM elements
var subject = document.getElementById( 'subject' )
extend( subject, new Subject() );

var addition = document.getElementById( 'addition' )
extend( addition, new Addition(5) );

var multiplication = document.getElementById( 'multiplication' )
extend( multiplication, new Multiplication(5) );

// DOM functions
var addObserver = function( obj ) {
  subject.addObserver( obj );
};

var removeObserver = function( obj ) {
  subject.removeObserver( obj );
};

var notifyObservers = function() {
  var newVal = parseInt( subject.value );
  subject.notifyObservers( newVal );
};
