function accum(s) {
    return  s.split("").map((element,i)=>{return element.toUpperCase()+element.repeat(i)+'-'}).join('').slice(0,-1)
}
console.log(accum("abcd"));