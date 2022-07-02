function removeChar(str){
    str = str.substring(1, str.length-1);
    return str;  
};

// Refactored

function removeChar(str){
    return str.slice(1, -1)
};
    