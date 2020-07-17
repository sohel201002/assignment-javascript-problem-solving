//Program For calculation "Feet to Miles" Lest Start>>>==============================

function feetToMile(feet) {
    if (feet < 0) {
        return "Length can not Be Negative Number."
    } else
        return feet / 5280; //we know 1 mile = 5280 feet.   
}
console.log(feetToMile(-10));
console.log(feetToMile(2010000).toFixed(2));
//End===================================================================================

//Calculate the woodCalculator=======================================================

function woodCalculator(numberOfChair, numberOfTable, numberOfbed) {
    if ((numberOfChair < 0) || (numberOfTable < 0) || (numberOfbed < 0)) {
        return "Table ,Chair, Bed Not be Negative Number";
    } else
        return (numberOfChair + (numberOfTable * 3) + (numberOfbed * 5));
}
console.log(woodCalculator(1, -5, 3));
console.log(woodCalculator(1, 1, 1));
//End==================================================================================

//Creating a Brick-Calculator=======================================================

function brickCalculator(numberOfFloor) {
    if (numberOfFloor < 0) {
        return "floor Number Not Be accept Negative Number."
    } else {
        if (numberOfFloor <= 10) {
            firstTenFloor = numberOfFloor;
            return firstTenFloor * 15 * 1000;
        } else if ((numberOfFloor > 10) && (numberOfFloor <= 20)) {
            firstTenFloor = 10
            tenToTwentyFloor = numberOfFloor - firstTenFloor;
            return ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor * 12 * 1000));
        } else if (numberOfFloor > 20) {
            firstTenFloor = 10
            twentyToMore = numberOfFloor - 20;
            return ((firstTenFloor * 15 * 1000) + (firstTenFloor * 12 * 1000) + (twentyToMore * 10 * 1000));
        }
    }
}
console.log(brickCalculator(-20));
console.log(brickCalculator(0));
console.log(brickCalculator(6));
console.log(brickCalculator(13));
console.log(brickCalculator(25));
//End=======================================================================================

//Find Out Tiny Friend name in the Array===============================================

function tinyFriend(friends) {
    var numberOfArrayFriend = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var currentFriends = friends[i];
        var newCurrentFriends = friends[i].length;
        if (newCurrentFriends < numberOfArrayFriend.length) {
            numberOfArrayFriend = currentFriends;
        }
    }
    return numberOfArrayFriend;
}

var resultTinyFriend = tinyFriend(["emon", "mohidu", "rimon", "sohel rana", "moon"]);
console.log(resultTinyFriend);
//End=====================================================