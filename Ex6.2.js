
function Duplicates(string){
    let count=0;
    let arr=[]
    string=string.toLowerCase().split('').sort();
    console.log(string)
    for(let i=0;i<string.length;i++){
        count=0;
        for(;string[i+1]==string[i];i++,count++);
        if(count>0) arr.push(string[i-1],count+1);
    }
    let s='';
    if(arr.length==0){
        return 0 +' # no characters repeats more than once'
    }
    s=arr.length/2+' # ';
    
    for(i=0;i<arr.length;i+=2){
        console.log(arr[i]);
        console.log(arr[i+1]);
        s+= arr[i]+'  occurs '+arr[i+1]+' times and ';
    }
    return s.slice(0,-4)
}
console.log(Duplicates("Indivisibilities"))