// Get current domain
var domain = window.location.hostname;
domain = domain.replace('www.', '').replace('http.', '').replace('https.', '').replace('http://', '').replace('https://', '');

chrome.runtime.sendMessage({command: "fetch", data: {domain:domain}}, function(response){
console.log(response.data);
})