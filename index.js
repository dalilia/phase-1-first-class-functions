function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }


  function returnsANamedFunction() {
    function namedFunction() {
      return "This is a named function.";
    }
  
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      return "This is an anonymous function.";
    };
  }