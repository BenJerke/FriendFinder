module.exports = function (app) {

    var friends = [
        {
            "name": "Jeff Bezos",
            "photo": "https://66.media.tumblr.com/62152a9329bcaf19f2811ff71fd92188/tumblr_pp3h6n1gB01qcbncj_500.jpg", 
            "scores": [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
        },

    ];


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

};


