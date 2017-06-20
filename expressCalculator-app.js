const express = require('express');
const app = express();

app.get('/express-calculator/:operation/:num0/:num1', function(req,resp){
  let operation = req.params.operation;
  let num0 = req.params.num0;
  let num1 = req.params.num1;
  let result;
  
  if(operation == 'multiply'){
    result = (num0 * 1) * (num1 * 1);
  }
  else if(operation == 'divide'){
    result = (num0 * 1) / (num1 * 1);
  }
  else if(operation == 'add'){
    result = (num0 * 1) + (num1 * 1);
  }
  else if(operation == 'subtract'){
    result = (num0 * 1) - (num1 * 1);
  }
  else{
    result = "Error: Incorrect input.";
  }

  resp.send(`<html><body>${result}</body></html>`)
})

app.listen(3000, function(){
  console.log("Server running on: http://0.0.0.0:3000")
})
