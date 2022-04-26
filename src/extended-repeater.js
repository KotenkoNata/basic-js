/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str = isRequired(''),
                  options= {separator: '+', additionSeparator: '|' }) {

  console.log(str, options)

  //check data

  if(typeof str !== "string"){
    str = toString(str);
  }

  if(typeof options.addition !== 'string'){
    options.addition = toString(options.addition);
  }

  if(!options.repeatTimes){
    options.repeatTimes = 1;
  }

  if(!options.additionRepeatTimes){
    options.additionRepeatTimes = 0;
  }

  //

  let result = '';

  for(let i = 0; i < options.repeatTimes; i++) {

    result = result+str;

    if(options.additionRepeatTimes){

      for (let j = 0; j < options.additionRepeatTimes; j++){

        if(options.additionSeparator){
          result = result + options.addition + options.additionSeparator;
        }
      }

      if(options.additionSeparator){
        result = result.slice(0, result.length - options.additionSeparator.length)
      }

    }else if(!options.additionRepeatTimes && options.addition){
      result = result+options.addition;
    }

    if(options.separator){
      result = result + options.separator;
    }


  }

  result = result.slice(0, result.length - options.separator.length)

  return result;
}

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))

//'STRING PLUS 00 PLUS00 PLUS** STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
//str + options.addition + options.additionSeparator

// console.log(repeater('la', { repeatTimes: 3 }))

// console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }))
  //'la+sla+sla+'

// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }))
//'TESTstrADD!'

module.exports = {
  repeater
};