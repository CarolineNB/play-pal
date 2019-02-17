const fs = require('fs');

class Users{
    constructor(){
        this.users = [];
    }
    
    //reusable  function
    //changed from a apart of addNote to a more global use => refractoring
    fetchUsers(){
    //fetch any existing notes
        try{
            var usersString = fs.readFileSync('users-data.json');
            return JSON.parse(usersString);

        } catch (e){
            return []
        }
    }

    saveUsers(users){
            fs.writeFileSync('users-data.json',JSON.stringify(users));
        };

    addUsers(name,pal,room){
        var users = fetchUsers();
        var user = {
            name,
            pal,
            room
        };
        var duplicateUsers = users.filter((user)=> user.name == name);
        //automatically return

        if(duplicateUsers.length == 0){
            //add the note into notes array
            users.push(user);
            saveUsers(users);
            //return the note that's getting added
            return user;
            
        };
        //if you don’t call return, undefined automatically gets returned
    };

    isInList(name){
        var users = fetchUsers();
        var findUser = users.filter((user)=> user.name == name);
        return findUser > 0;
    }
    getUser(name){
        var users = fetchUsers();
        var findUser = users.filter((user)=> user.name == name);
        return findUser[0];
    }
    getPal(name){
        var users = fetchUsers();
        var findUser = users.filter((user)=> user.pal == name);
        return findUser[0];
    }
       
}

module.exports = {Users};