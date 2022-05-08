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
        if(i>6){ 
            clearInterval(strategy)   //exit from Interval
        }
        else {
            console.log("new lead")
        }
    },2000)
    
    
        //2 method
        // for (let i = 0; i <= 6; i++){    
        // if(i === 6){
        //     break   
        //  }   
        // else {
        //     console.log("New lead") 
        // }
    }
        
    


    
  //while{} || do{} while - TRUE || FALSE


// }

marketingAgency(strategy)



//clearInterval vs break ++++++++++
//time ++ scope +++++++++++++++++++
//loops in this case  +++++++++++++ (w/o setInterval)


//stop method using ANOTHER METHOD
