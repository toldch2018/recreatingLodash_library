
/* 'number' is the number to check, 'lower' is the
lower bound and 'upper' is the upper bound   */
const _ = {

  //Implement _.clamp()
  clamp(number, lower, upper){
    if(number < lower){
      return lower;
    } else if (number > upper){
       return upper;
    } else {
      return number;
    }
      },
     
   //Implement .inRange()
      /*'num' is the number to check, 'start' is the
   start of the range and 'end' is the end of the range */
   inRange(number, start, end){
    if (end === undefined){
       end = start ;
       start = 0;
    } if(start > end){
      let temp = end
      end = start
      start = temp
    }
     let isInRange = start <= number && number < end;
     return isInRange;
   }, 

  
    //Implement .words()

  words(string){
    let words = string. split(' ');
    return words;
  },

     //Implement .pad()
     //'str' is the string to pad and 'len' is the padding length.
  pad (str, len){
    if (str.length > len){
      return str;
    }
    for (let item1 = 0; item1 <= Math.floor((len-str.length)/2); item1++){
      str = str + ' ';
    }
    for (let item2 = 0; item2 <= Math.ceil((len-str.length)/2); item2++){
      str = ' ' + str;
    }
    return str;
  },

    //Implement _.has()

  has (obj, key){
    return (obj[key] !== undefined)
  },

     //Implement _.invert()
    // 'object' is the object to invert
  invert(object){
    let invertedObject ={};
    for(let key in object){
    const originalValue = object[key];
    invertedObject = {originalValue : key}
    }
    return invertedObject;
  },

     //Implement _.findKey()
     //'obj' is the object to inspect and 'pred' is the function invoked per iteration.
  findKey (obj, pred){
    for (let key in obj){
      if (pred(obj[key])) {
        return key;
      }
    }
      return undefined;
  },

     //Implement _.drop()
     // 'array' is the array to query and 'n' is the number of elements to drop.
  drop(array, n){
      if(n === undefined){
        n = 1;
      }
    const droppedArray = array.slice(n, array.length);
    return  droppedArray;
  },

     //Implement _.dropWhile()
     //'arr' is the array to query and 'pred' is the function invoked per iteration
  dropWhile(arr, pred){
    let newArr = arr;
    let count = 0;
    do {
      newArr.shift();
      count ++;
    } while (pred(newArr[0],count,arr));
    return newArr;
  },

    //Implement _.chunk()
    //'array' is the array to process and 'size' is the length of each chunk
  chunk(array, size){
        let arrayChunks = [];
        for(let i= 0; i < array.length; i += size){
        arrayChunks.push(array.slice(i, i+size));
        }
        return arrayChunks;
  }

};


// Do not write or modify code below this line.
module.exports = _;
