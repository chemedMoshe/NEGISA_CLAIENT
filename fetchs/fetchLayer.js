export const createNewUserFetch = async (user) => {
    const response = await fetch("https://negisaserver-12.onrender.com/user", {
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
        const response = await fetch("https://negisaserver-12.onrender.com/user/");
        const data = await response.json();
        return data;
    } catch (error) {
        return error
    }
}

export const deleteUserFetch = async (user) => {
    try {

        const response = await fetch(`https://negisaserver-12.onrender.com/user/`, {
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
    const response = await fetch(`https://negisaserver-12.onrender.com/user/${id}`, {
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

export const searchUserFetch = async (username) => {
    try{
    const response = await fetch(`https://negisaserver-12.onrender.com/user/search`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(username),
    })
    const data = await response.json()
    return data.result
    }
    catch(error){
        return error
    }
}
    