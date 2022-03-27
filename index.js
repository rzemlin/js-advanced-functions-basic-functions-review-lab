// Your code here
function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
  
  const Calculator = {
    add: function(x,y) {
      return x + y;
    },
    subtract: function(x,y) {
      return x - y
    },
    multiply: function(x,y) {
      return x * y
    },
    divide: function(x,y) {
      return x / y;
    }
  }

  let actionApplyer = function(start, ray) {
    let x = start
  
    for (let i = 0; i < ray.length; i++ ){
      x = ray[i](x)
    }
  
    return x
  }