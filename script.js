const makeChange=(c)=>{
    const change={
        q:0,
        d:0,
        n:0,
        p:0
    }
    
    const coinValues={
        q:25,
        d:10,
        n:5,
        p:1
    }
    
    change.q=Math.floor(c/coinValues.q);
    c %= coinValues.q;
    
    change.d=Math.floor(c/coinValues.d);
    c %= coinValues.d;
    
    change.n=Math.floor(c/coinValues.n);
    c %= coinValues.n;
    
    change.p=c;
    
    return change;
    
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
