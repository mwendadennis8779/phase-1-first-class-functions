function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction(function(){spy});

function returnsANamedFunction(){
    return returnsANamedFunction;
}

 function returnsAnAnonymousFunction(){
   return function() {
        console.log("Yet more razzling");
      }
 }