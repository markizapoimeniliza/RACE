//makreting agency 



let marketingAgency = (strategy) => {
    setTimeout(() => {    //add delay
        console.log("We are open")
        strategy()
    },4000)
}


   //conteol times

let i = 0
let strategy = () => {
    setInterval(() => { //after
        i++
        if(i>6){ //one if can be too
            clearInterval(strategy)   //exit from Interval
        }
        else {
            console.log("new lead")
        }
    },2000)
    
    

        // for (let i = 0; i <= 6; i++){    
        // if(i === 6){
        //     break
        //     // clearInterval(strategy)   
        //  }   
        // else {
        //     console.log("New lead") //infinite loops
        // }
    }
        
    

        
        //   // for (HOW MANY TIMES)
        //  setInterval(() => {      //setInterval  endless
        //  time ++
        //  if (time < 7) {
        //      console.log("new lead")
        //  }
        //  else {      //break - loops, switch or label statement
        //      clearInterval(strategy) //method 
        //                              //break  - statement
        //  }
        // },2000)
         


    
  //while{} || do{} while - TRUE || FALSE


// }

marketingAgency(strategy)



//clearInterval vs break ++++++++++
//time ++ scope +++++++++++++++++++
//loops in this case  +++++++++++++ (w/o setInterval)


//stop method using ANOTHER METHOD