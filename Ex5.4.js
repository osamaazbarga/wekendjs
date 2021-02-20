function WeirdCase(string){
    var obj=[];
    string.split("").forEach((element,i) => {
        if(i%2==0){
           return obj.push(element.toUpperCase());
        }
        return obj.push(element.toLowerCase());
    });
    console.log(obj.join(""))
}
console.log(WeirdCase("Weird string case"));