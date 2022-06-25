// const proxy = require("http-proxy-middleware");

// module.exports = function(app) {
//     app.use(
//         proxy("/loginRequest", {
//             target: "http://localhost:8080/sms",

//             changeOrigin: true
//         })
//     );

//     app.use(
//         proxy("/addSchoolDetails", {
//             target: "http://localhost:8080/sms",

//             changeOrigin: true
//         })
//     );
// }