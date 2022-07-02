//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
function remainder(n, m){
    if (n > m) {
    return n % m;
    }else if(m > n) {
      return m % n;
    }else if (n < 0 || m < 0){
      return 0;
    }else if(n === 0 || m === 0) {
      return NaN;
    } 
}