function toCamelCase(string){
    return string.split("-").map((element)=>element[0].toUpperCase()+element.slice(1)).join(' ');
}
console.log(toCamelCase("the-stealth-warrior"));