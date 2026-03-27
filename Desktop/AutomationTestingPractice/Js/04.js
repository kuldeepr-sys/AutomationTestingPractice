

function pro(){
    return new Promise((resolve , reject)=>{
        console.log("Ordering food")
       
        setTimeout(()=>{
            console.log("Food ordered");
            resolve()
        },2000)
        
    })
}

pro().then(()=>{
    console.log("Eating food");
})
.catch(()=>{
    console.log("Error");
})