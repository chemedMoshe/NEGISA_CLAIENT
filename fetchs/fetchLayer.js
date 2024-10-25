export const createNewUserFetch = async (user) => {
    const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await response.json()
    return data


}


export const getAllUsersFetch = async () => {
    try {
        const response = await fetch("http://localhost:3000/user");
        const data = await response.json();
        return data;
    } catch (error) {
        return error
    }
}

export const deleteUserFetch = async (user) => {
    try {

        const response = await fetch(`http://localhost:3000/user/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json()
        return data;
    } catch (error) {
        return error
    }
}

export const updateUserFetch = async (id, userUpdated) => {
    try{
    const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userUpdated),
    })

        const data = await response.json()
        return data
    }
    catch(error){
        return error
    }
}
    