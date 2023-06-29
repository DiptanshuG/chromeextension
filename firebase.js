// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyw5lBh0j_0lNMZy6eeRHleXeroWCJ3M4",
    authDomain: "coupon-finder-a5cd6.firebaseapp.com",
    projectId: "coupon-finder-a5cd6",
    storageBucket: "coupon-finder-a5cd6.appspot.com",
    messagingSenderId: "136273262261",
    appId: "1:136273262261:web:143bf980710b52f02570fc",
    measurementId: "G-HZ63B5GH6X"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



  console.log("firebase.js loaded");


  chrome.runtime.orMessage.addListener(function(request, sender, sendResponse){
if(msg.command=="fetch")
var domain = request.data.domain;
console.log("Fetching coupons for domain: " + domain);{

}
  })