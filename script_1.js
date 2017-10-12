//create simple function
function asyncFun(message, callback){     
     setTimeout(function(){
             console.log(message);
             callback();
     },500);
}

//exicuting functions in callbacks
asyncFun('connecting to db',function(){
           asyncFun('getting user',function(){
                asyncFun('validating user',function(){
                     asyncFun('doing stuff',function(){
                     	console.log('we are done!!!');
                     })
                });
           });
});