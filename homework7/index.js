// exercise1

const delay = 5000;
const mySetTimeout = function(delay){
    return new Promise (function(resolve){
        setTimeout (resolve,delay)
    });
};

mySetTimeout(delay).then(()=>console.log('success',delay));

const mySetTimeout2 = async function (delay){
    await new Promise(function(resolve){
        setTimeout(resolve, delay)
    });
};
mySetTimeout2(delay).then(() =>console.log('success',delay));

// exercise2

const getFacebookProfile=function(id,friendID){
    return new Promise (function(resolve,reject){})
};

getFacebookProfile(1,"(profile)")
.then((resolve)=>getFacebookprofile("profile.friends[0].id","(friendProfile)"))
.then((resolve)=>getFacebookProfile("friendProfile.friends[0].id","(friendsFriend)"))
.then((resolve)=>getFacebookProfile("friendsFriend[0].id","(finalProfile)"))
.then((resolve)=>console.log("Finally, I have all the profiles"))
.catch((error)=>console.log("error occured"));