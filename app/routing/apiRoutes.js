
var express = require("express");
var path = require("path");
var app = express();

module.exports = function (app) {

    app.get("/api/friends", function (req, res){
        console.log("VIEW ALL FRIENDS REQUEST CAME IN")
        
    });

    app.post("/api/friends", function(req, res){
        console.log("NEW FRIEND POSTED")

        console.log(req);

        console.log(newFriend);
        
        var friends = [];
        
        var friendshipScores = [];

         friendshipScores.push(friends.forEach(friend => {

            calcFriendship(newFriend, friend);

            }));
        
        var bestFriend = findClosestMatch(friends, friendshipScores);

        addToFriends(newFriend);

        return bestFriend;
    
    });




};

    function calcFriendship (user, friend) {

        var scoreComparison = [];

        user.scores.forEach((element1) => friend.scores.forEach((element2) => {
            var diff = element1 - element2;
            scoreComparison.push(abs(diff))
        }));


        var compatibility = scoreComparison.reduce(function (el1, el2){
            return el1 +++ el2; 
        }, 0);

        return compatibility
        
    };



    function findClosestMatch (friends, compatibility) {

        var bestFriend = indexOf(Array.min(compatibility));

        return friends[bestFriend]
    };

    function addToFriends (user) {

        friends.push(user)
    };


    Array.min = function (array) {
        return Math.min.apply(Math, array)
    };


