// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(a='go to the office') {
    return `This Monday, I will ${a}.`
}

function wrapAdjective(flair = '*') {
    return function(s = 'special'){
        return `You are ${flair}${s}${flair}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

let actionApplyer = function(startInt, arrayOfFunctions) {
    let a = startInt
  
    for (let i = 0; i < arrayOfFunctions.length; i++ ){
      a = arrayOfFunctions[i](a)
    }
  
    return a
  }