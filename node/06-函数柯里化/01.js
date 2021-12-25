function a(ap) {
    console.log('ap', ap);
    return function b(bp){
        console.log('bp', bp);
        return function c(cp){
            console.log('cp', cp);
            console.log(('ap bp cp c'), ap, bp, cp, c);
        };
    }
}

const l1 = a(1, 2 , 3);
console.log('l1', l1);

const l2 = a(4)(5)(6);
console.log('l2', l2);

const l3 = a(7)(8);
console.log('l3', l3);