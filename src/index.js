module.exports = function reverse (n) {
    let number = n;
    if(n < 0){
        number *= -1;
    }
    let rev = Number(String(number).split('').reverse().join(''));
  return rev;
}
