//Async , Await

const myUsers={
    userList:[]
}

const users=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const userData=await response.json();
    return userData
}

const anotherFunction = async ()=>{
    const data=await users()
    myUsers.userList=data
    console.log(myUsers);
    return data
    
}
anotherFunction();
console.log(myUsers); // It will execute first 

//Fetch

const getJoke=async()=>{
    const response=await fetch("https://icanhazdadjoke.com/",
        {
            method:"GET",
            headers:{
                Accept:"application/json"
            }
        }
    )
    const jsonJokeData=await response.json()
    console.log(jsonJokeData.joke);
}
getJoke();

