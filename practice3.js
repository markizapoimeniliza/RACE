
//callback
let alCoin = function (call){
    setTimeout(()=>{
        console.log("The process has been started") //5sec
        call() //5sec after
    },5000)
}


let alcoin = () => {
    console.log("Alcoin was bought")
}


alCoin(alcoin)


//promise
let childrenNotAnnoying = true

// //w/ and w/o return
let promiseFather =  () => {   //return only inside function (IF WE NEED A PARAMETER)
    return new Promise(
    (resolve,reject) => {
       
       if(childrenNotAnnoying){
        let entertainment = new Object(
            {
                cinema: "Go to the cinema",
                popcorn: "eat popcorn"
            }
        )
           
        //    resolve()
           setTimeout(()=> {
           resolve(`
           Have fun!
           ${entertainment.cinema} and ${entertainment.popcorn}`)
        }, 6000)
       }
       else{
           let badBehaviour = new Object({
               cinema: "Without cinema",
               popcorn: "popcorn!"
           })
           reject(`${badBehaviour.cinema} and ${badBehaviour.popcorn}`)
       }
    } 
    )
    
}

promiseFather().then((message) => console.log(message)) //only for a first time
.catch((error) => console.log(error))

 //outside - name of a Promise() inside - w/o name


//then and catch ONLY with the next one




//? w/ or w/o return ++++++++++++
//? promise Father deal w/  ++++++++
// practice with 6th too
//? how then() mess up catch() ++++++


