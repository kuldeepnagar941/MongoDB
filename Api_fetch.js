const file=async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response)
        const data = await response.json();
        // console.log(data);
       const ans = data.filter((single)=>{
            if(single.address.city=="South Christy")
            {
                return single;
            }
        })
        console.log(ans);

    }
    catch(error){
        console.log(error);
    }
} 
file();