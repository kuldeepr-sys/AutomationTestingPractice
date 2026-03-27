// function orderfood (){
//     return new Promise((resolve , rejecte)=>{
//         console.log("Ordering food");
//         setTimeout(() => {
//             resolve("Food is ordered")
//         }, 2000);
        
//     })
// }

// orderfood().then((result)=>{
//       console.log(result);
      
// })

function orderfood2(){
    return new Promise((resolve , rejecte)=>{
        console.log("ordering food");

        setTimeout(()=>{
            resolve("Food is ordered ")
        },4000)
    }) 
}

async function getfood(){
    const food = await orderfood2()
    console.log(food);
    
}

getfood()