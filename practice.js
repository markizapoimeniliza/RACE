
// //method ON objects not INSIDE
// const races = new Object(
// {
//     port: 5100,
//     success: true
// }
// )


// //prototype change a key  (many classes)
// Object.prototype.Crs = (cars) => {
//     return new Promise((resolve,reject)=>{
//         let errors = {
//             error0: "Without errors",
//             error1: 404

//         }
//         if(cars >= 2){
//             setTimeout(()=>{
//                 console.log("Start the game")
//                 resolve(errors.error0)
//             },2000)
            
//         }
//         else{
//             console.log("Not enough participants") //we CANT repass it
//             reject(errors.error1)
//         }
// }
// )
// .then((er)=>console.log(er))
// .then(()=>console.log("It is about to end"))
// .catch((error)=> console.log("Error: ",error)) 
// .finally(()=>console.log("")) //w/o parameters
// }



// Object.prototype.hrs = (horses) => {
//     return new Promise(
//         (resolve,reject) =>{
//             let messages = {
//                 message1: "It is alright!",
//                 message2: "Something went wrong"
//             }
//             if (horses >= 2){
//                 setTimeout(()=> {
//                     console.log(messages.message1)
//                     resolve()
//                 },2000)
                
                
//             }
//             else{
//                 reject(messages.message2)
//             }
//         }
//     )
//     .then(()=>console.log("Start the race!"))
//     .catch((error)=> console.log(error))
//     .finally(()=> console.log("The winner is found!"))
// }

// races.Crs(2)

// races.hrs(3) 





// //prototype - a methoad as a function
