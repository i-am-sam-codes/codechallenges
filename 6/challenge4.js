//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
function likes(n) {
  
    const  others = n.length - 2 

    if (n.length <= 0) {
      return "no one likes this"
    }if (n.length === 1) {
      return  n[0] + " likes this" 
    }else if (n.length === 2) {
      return  n[0] + " and " + n[1] + " like this"
    }else if (n.length === 3) {
      return n[0] + ", " + n[1] + " and " + n[2] + " like this" 
    }else {
      return n[0] + ", " + n[1] + " and " + others + " others like this" 
    }
}