function shortestwords(string){
    return string.split(" ").reduce((acc,curr)=>{
        return curr.length < acc.length ? curr : acc;
    },string.split(" ")[0]).length
}

console.log(shortestwords('osama sssss tt dfsdfadsfads'))