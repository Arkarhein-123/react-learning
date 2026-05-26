function MyInfo({name,age,parent,country,greet}){
    return (
        <>
            <h1>My name is {name}. I am {age} years old.</h1>
            <h1>I live with my {parent} in {country} </h1>
            <h1>{greet()}</h1>
        </>
    )
}

export default MyInfo;