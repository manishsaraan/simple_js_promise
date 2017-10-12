//create simple function
function asyncFun(message, callback){     
     setTimeout(function(){
             console.log(message);
             callback();
     },500);
}

//spliting anonymous functions with named functions to prevent callback hell
function doStuff(){
                     asyncFun('doing stuff',function(){
                        console.log('we are done!!!');
                     })
                };

function validateUser(){
                asyncFun('validating user',doStuff);
           };

function getUser(){
           asyncFun('getting user',validateUser);
};

//exicuting functions in callbacks
asyncFun('connecting to db',getUser);