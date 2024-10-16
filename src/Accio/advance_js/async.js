const delay = ()=>{
    return new Promise((res)=>{
           setTimeout(()=>{
        res('Hello')
    },2000)
    })
 
}


const fetchData =async ()=>{
   
     console.log("A")
     
    const value =  await delay()
    console.log(value)
     console.log("B")
     return value
}

console.log("C")

fetchData().then((data)=>{
   console.log("Then:",data)
}).catch((error)=>{
   console.log("Catch",error)
})

console.log("D")