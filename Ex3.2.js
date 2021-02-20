function bus(busstop){
    var getinto=0;
    var getoff=0;
    busstop.forEach(item => {
        getinto += item[0];
        getoff += item[1];
    });
    return getinto-getoff;
}

console.log(bus([[5,2],[3,3],[7,1]]))