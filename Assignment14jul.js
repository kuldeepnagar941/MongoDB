// 1)Data fetch hone ke baad, pehle user ka name extract karo using object destructuring.

// function extractname(data){
//    const{name}= data[0];
//    console.log(name)
// }

// const file=async()=>{
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         extractname(data);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// file();

// 2)Data fetch hone ke baad, user jiska id 3 hai, uska address extract karo using object destructuring.

// function extract(data){
//     data.forEach(element => {
//         if(element.id==3){
//             const{address}=element;
//             console.log(address)
//         }
//     });
// }
// const file=async()=>{
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         extract(data)
        
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// file();

3)Data fetch hone ke baad, pehle user ka email extract karo using object destructuring.




