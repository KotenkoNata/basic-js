/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} string string to repeat
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

function repeater(string, {
  repeatTimes = 1,
  separator = "+",
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|'})
{

  if (addition && typeof addition !== 'string') {
    String(addition);
  }
  if (string && typeof string !== 'string') {
    String(string);
  }

  let result = '';

  for(let i = 0; i < repeatTimes; i++) {

    result = result+string;

    if(additionRepeatTimes){

            for (let j = 0; j < additionRepeatTimes; j++){

              if(additionSeparator){
                result = result + addition + additionSeparator;
              }
            }

        if(additionSeparator){
          result = result.slice(0, result.length - additionSeparator.length)
        }

    }else if(!additionRepeatTimes && addition){
      result = result+addition;
    }

    if(separator){
      result = result + separator;
    }

  }

  result = result.slice(0, result.length - separator.length)

  return result;
}

module.exports = {
  repeater
};