// read through the string elements
// find a e i o u
// return how many a e i o u are in the string

function getCount(str) {
    let vowels = 'aeiou'
      var vowelsCount = 0;
    for (let i= 0; i < str.length; i++){
    if ( vowels.indexOf(str[i]) !== -1)
    {
     vowelsCount += 1;
    }
    }
      
      return vowelsCount;
    }