function a(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(444)
        }, 2000);
    })
};

(async ()=>{
    let b = await a()
    console.log(b);
    let c = await a()
    console.log(c);
    let d = await a()
    console.log(d);
})() //Immediately Invoked Function Expressions