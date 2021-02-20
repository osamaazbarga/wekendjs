function lingeststring(string){
    let arr=[]
    let largest= string.split(" ").reduce((acc,curr)=>{
        return curr.length > acc.length ? curr : acc;
    },string.split(" ")[0]).length

    
    string.split(" ").forEach(element => {
        if(element.length==largest){
            arr.push(element);
        }
    });
    return arr;
}

console.log(lingeststring('osama sssss tt'))