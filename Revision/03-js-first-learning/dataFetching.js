async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error(`Http Error : Status : ${response.status}`);
        }
        const data = await response.json();
        // console.log("Data : ",data)
        data.forEach(innerData => {
            const title = innerData.title;
            console.log("Title : ",title);
        });

    }catch(error){
        console.log(`Error While Fetching Data : ${error.message}`)
    }
}

fetchData();
