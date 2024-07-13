var User = /** @class */ (function () {
    function User(userId, username) {
        this.userId = userId;
        this.userName = username;
    }
    return User;
}());
var use = new User(10, "Ram");
console.log("userId:" + use.userId);
console.log("userName:" + use.userName);
