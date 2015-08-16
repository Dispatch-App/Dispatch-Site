// $(document).ready(function() {
//     getCrimes({
//         success: function(data) {
//             console.log(data);
//         },
//
//         error: function(error) {
//             console.log(error);
//         }
//     });
// });
//
// function getCrimes(callback) {
//     $.ajax({
//         method: 'GET',
//         url: 'https://dispatch-danielchristopher1.c9.io/getCrimes',
//         contentType: 'application/json',
//         longitude: 23,
//         latitude: 24,
//         radius: 10
//         },
//
//         function(data) {
//             callback.success(data);
//         },
//
//         function (error) {
//             callback.error(error);
//         }
//     );
// }
//
// function getCurrentLocation(callbacks) {
//     if(navigator.geolocation) {
//         return navigator.geolocation.getCurrentPosition(
//             function(position) {
//                 callbacks.success(position);
//             },
//
//             function(e) {
//                 callbacks.error(e);
//             }
//         );
//     }
// }
