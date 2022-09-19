const users = []

const addUser = ({ id, username, room }) => {
    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
//Validate the data
    if (!username || !room) {
        return {
            error: 'Username and Room are required!!'
        }
    }

//Check for Existing User
    const existingUser=users.find((user)=>{
        return user.room===room && user.username===username
    })
    //Validate Username
    if(existingUser){
        return{
            error:'Username is in use'
        }
    }
    //Store User
    const user={id,username,room}
    users.push(user)
    return {user}
}
const removeUser=(id)=>{
    const index=users.findIndex((user)=>{
        return user.id===id
    })
    if(!index !== -1){
        return users.splice(index,1)[0]
    }
}

const getUser=(id)=>{
    return users.find((user)=>user.id===id)
}

const getUserInRoom=(room)=>{
    room = room.trim().toLowerCase()
    return users.filter((user)=>user.room===room)
}

// addUser({
//     id:22,
//     username:'Laiba',
//     room:'1'
// })

// addUser({
//     id:19,
//     username:'Aina',
//     room:'1'
// })

// addUser({
//     id:17,
//     username:'Wania',
//     room:'meeting'
// })
// const user=getUser(17)
// console.log(user)
// const userList=getUserInRoom('12')
// console.log(userList)
// console.log(users)
// const removeUsers=removeUser(22)
// console.log(removeUsers)
// console.log(users)
module.exports={
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}