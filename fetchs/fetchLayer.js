export const createNewUser = async (user) => {
    const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
   
    //console.log(response.json());
     return await response.json();
    
}