// Scope: "The scope of a variable is the region of a program where it can be accessed."

function scopeExample() {
    const x = "x";
    console.log("Scope A");
    console.log(x)
    // console.log(y)
  
    if (true) {
      const y = "y";
      console.log("Scope B");
      console.log(x)
      console.log(y)
  
      {
        const z = "z";
        console.log("Scope C");
        console.log(x)
        console.log(y)
        console.log(z)
      }
    }
}

// scopeExample()









  /* const */
  
  // 1. can be declared and assigned ONLY once
  //      (reasignment prohibited, mutations allowed)
  //      (it must be initialized at time of declaration)
  // 2. it is block scoped
  // 3. use const when possible
  
  // What will happen here?
  function howToConst() {
    // SCOPE A: username ("Harold")
    const username = 'Harold';
  
    if (true) {
      // SCOPE B: username ("Url")
      const username = 'Url';
  
      console.log(username);
    }
  
    console.log(username);
  }
  
  // howToConst()
  
  
  
  
  
  
  
  
  
  /* let */
  // 1. Can be declared only once, but reassignment is allowed
  // 2. Block scoped
  
  // What will happen here?
  function howToLet() {
    let secret = "I'm secretly a cat.";
  
    if (true) {
      secret = "I'm secretly a banana";
      console.log(secret);

      let secret = "Nope, definitely a cat";
    }
  
    console.log(secret);
  }
  
  // howToLet()
  
  
  
  



  
  
  
  /* var */
  // 1. Function-scoped
  // 2. AVOID USING THIS, use let and const
  
  // What happens here?
  function howToVar() {
    // var username = 'Harold';
  
    if (true) {
      var username = 'Url';
  
      console.log(username);
    }
  
    console.log(username);
  }
  
  // howToVar()
  
  
  
  
  
  
  
  
  /* global */

// sillyVariable = "Should I use these?";


function globalsSuck() {
  sillyVariable = "Do NOT use these";
  console.log(sillyVariable);
}

// console.log(sillyVariable);
globalsSuck();
console.log(sillyVariable);