//create simple function
function asyncFun(message){
  return new Promise(function(fulfill, reject){
          setTimeout(function(){
                     console.log(message);
                     fulfill();
             },500);
  });         
}

//spliting anonymous functions with named functions to prevent callback hell
function doStuff(){
                     asyncFun('doing stuff',function(){
                        console.log('we are done!!!');
                     })
                };

function validateUser(){
                asyncFun('validating user').then(doStuff);
           };

function getUser(){
           asyncFun('getting user').then(validateUser);
};

//exicuting functions in callbacks
asyncFun('connecting to db').then(getUser);