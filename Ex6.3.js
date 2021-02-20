function organizestring(s1,s2){
    s1=s1.concat(s2);
    return s1.split('').sort().filter((el,index,s1)=>s1.indexOf(el)===index).join('');


}
console.log(organizestring("xyaabbbccccdefww","xxxxyyyyabklmopq"))

