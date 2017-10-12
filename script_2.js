//create simple function
var counter = 0;
function asyncFun(message, callback){     
     setTimeout(function(){
             console.log(message);
             counter++;
             callback(message+"_"+counter);
     },500);
}

//spliting anonymous functions with named functions to prevent callback hell
function doStuff(cb){
                     asyncFun('doing stuff',function(){
                        console.log('we are done!!! with cb'+cb);
                     })
                };

function validateUser(cb){
                asyncFun('validating user',doStuff);
           };

function getUser(cb){
           asyncFun('getting user',validateUser);
};

//exicuting functions in callbacks
asyncFun('connecting to db',getUser);