let arraySum=(userArray)=>{
    sum=0
    for(i=0; i<userArray.length; i++){
    let getArrayElement=userArray[i]
    sum=sum+getArrayElement
    // console.log(sum)
   
    }
     console.log(`the sum of array [${userArray}] is ${sum}`)

}
arraySum([1,2,3,4])
