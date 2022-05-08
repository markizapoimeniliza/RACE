//promises
//1)cars' race +
//2)cakes order at hand +
//3)promise of a father abt entertainment+

//callbacks
//1)order on the Internet shop(clothes)+
//2)buy alcoin+
//3)run a business+


//to output using race
let cakes = true 
let cake = (time) =>{ 
    return new Promise((resolve,reject)=>{
    if (cakes){
        setTimeout(()=>{
            console.log("ready for delivery")
            resolve()
        },time)
    }
    else {
        let error = "Error"
        reject(error)
    }
}
)
.catch ((error)=> console.log(error))
// .finally(()=>console.log("Done"))
}


cake(2000)


// //then! 
// //together
// //FOR reject - each clause
// Promise.all([cake(5000),cake(9000)]).then(()=> console.log("Arrived")) //2 17
// Promise.race([cake(5000),cake(9000)]).then(()=> console.log("First one arrived"))

//ready for delivery(2 - coincidence) arrived in the early term ready for delivery arrived in the last term
// ready for delivery