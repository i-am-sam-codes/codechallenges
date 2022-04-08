//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
function stringy(size) {
    let result = '';
    for (let i = 1; i <= size; i++) {
      result += i % 2;
    }
    return result;
  }