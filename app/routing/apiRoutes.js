module.exports = function (app) {


    app.get("/api/friends", function (req, res){
        console.log("FRIENDS GET REQUEST CAME IN")
    });

    app.post("/api/friends", function(req, res){
        console.log("FRIENDS POST REQUEST CAME IN")
        var newFriend = req.body; 

        friends.push(newFriend);
        
        var friendshipScores = [];

         friendshipScores.push(friends.forEach(friend => {

            calcFriendship(newFriend, friend);

            }));
        
        var bestFriend = findClosestMatch(friends, friendshipScores);

        return bestFriend;
    
    });
};

