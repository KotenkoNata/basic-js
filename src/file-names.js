const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */


function renameFiles(names) {

  if(names.length ===0){
    return []
  }

  let result = [names[0]];

  for(let indexCurrentElement = 1; indexCurrentElement<names.length; indexCurrentElement++){

    let count = 0;
    for(let j = 0; j<result.length; j++){

      if(indexCurrentElement <= j){
        break;
      }

      if(names[indexCurrentElement] === result[j]){
        count+=1;
      }

    }

    if(count === 0){
      result.push(`${names[indexCurrentElement]}`)
    }else if(result.includes(`${names[indexCurrentElement]}(${count})`)){
      count+=1;
      result.push(`${names[indexCurrentElement]}(${count})`)
    }else{
      result.push(`${names[indexCurrentElement]}(${count})`)
    }
  }


   return result
}

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

//["file", "file(1)", "image", "file(1)(1)", "file(2)"]

module.exports = {
  renameFiles
};
