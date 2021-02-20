function Tribonacci(num){// return array
    let arr=[1,1,1]
    for(let i=2;i<num-1;i++){
      arr.push(arr[i]+arr[i-1]+arr[i-2])
    }
    return arr;
  }

console.log(Tribonacci(8));