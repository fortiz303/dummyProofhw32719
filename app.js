function alternateCaps(data) {

  if(typeof data = string){

  let charArray = data.split('');
  let capitalArray = [];

  for (let i = 0; i < charArray.length; i = i + 2) {
    let upperCase = charArray[i];
    let lowerCase = charArray[i + 1];
    capitalArray.push(upperCase.toUpperCase(),lowerCase.toLowerCase());
  }
  let results = capitalArray.join('');
  return results;
}
console.log(alternateCaps('$Hello World'))

console.log(alternateCaps[1,2,3,4,5]);


//how can we dummy proof this so that if we output the last code, the function won't break
