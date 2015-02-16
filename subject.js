function Subject() {
  this.observers = [];
}

Subject.prototype = {
  addObserver: function( obj ) {
    return this.observers.push( obj );
  },
  removeObserver: function( obj ) {
    for (var i = 0; i < this.observers.length; i++) {
      if (this.observers[i] === obj) {
        this.observers.splice( i, 1 );
      }
    }
  },
  notifyObservers: function( context ) {
    if ( this.observers.length === 0 ) {
      return console.log('No observers registered');
    }
    for ( var i = 0; i < this.observers.length; i++ ) {
      this.observers[i].update( context );
    }
  }
}
