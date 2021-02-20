function isogram(string){
    string=string.toLowerCase().split("").sort();
    for (let i = 0; i < string.length; i++) {
        if (string[i + 1] == string[i]) {
            return false;
          }
        
    }
    return true;
    //console.log(string);
}

console.log(isogram('osae'));

