var user = {
    firstName: "jyoti",
    lastName: "singh",
    role: " admin",
    logInCount: 34,
    facebookSignin: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    },
}
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("javascript");
console.log(user.getCourseCount());
user.buyCourse("c++");
console.log(user.getCourseCount());
