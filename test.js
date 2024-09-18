// API Keys (Google API, AWS Key, etc.)
const googleAPIKey = "AIzaSyD9K-EXAMPLEKEY-AUTOEXTRACT";
const awsAccessKeyId = "AKIAIOSFODNN7EXAMPLE";
const awsSecretAccessKey = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Email addresses
const adminEmail = "admin@example.com";
const userEmail = "user@sample.org";

// IP addresses
const publicIP = "192.168.1.1";  // Private IP
const remoteServerIP = "203.0.113.42";  // Public IP

// Phone numbers (E.164 format)
const supportPhoneNumber = "+14155552671";
const customerServiceNumber = "+442071838750";

// URLs (domains, subdomains, paths, parameters)
const apiUrl = "https://api.example.com/v1/users?id=123&name=test";
const adminPanelUrl = "http://admin.example.com/login";
const cdnUrl = "https://cdn.example.com/assets/js/app.js";
const localPath = "/assets/scripts/main.js";
const endpointPath = "../api/getData";

// Dangerous functions prone to vulnerabilities
document.write("Welcome to the site!");  // XSS potential
eval("var x = 10; console.log(x);");  // Dangerous eval usage
setTimeout("alert('Test XSS vulnerability')", 1000);  // Can be misused
window.location.href = "http://example.com/redirect";  // Potential open redirect
postMessage("This is a test message", "*");  // Potential data leakage

// Fetch and XMLHttpRequest for HTTP requests
fetch("https://api.example.com/data", {
    method: "POST",
    body: JSON.stringify({ userId: "123", token: "abc" })
}).then(response => response.json())
  .then(data => console.log(data));

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/getData", true);
xhr.send();

// Local Storage manipulation
localStorage.setItem("sessionToken", "abc123xyz");

// Cookies manipulation
document.cookie = "username=admin; expires=Thu, 18 Dec 2024 12:00:00 UTC";

// History API usage
history.pushState({ userId: "123" }, "Profile", "/user/123");
