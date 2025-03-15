function sendMail(){
  let parms = {
    name : document.getElementById('name').Value,
    email : document.getElementById('email').value,
    subject : document.getElementById('subject').value,
    message : document.getElementById('message').value,
  }

  emailjs.send("service_fqmwjj2","template_rwhqg16",parms).then(alert("Message sent successfully!!"))

}


// function sendMail() {
//   // Initialize emailjs with your User ID
//   emailjs.init("service_fqmwjj2"); // Replace with your actual User ID from EmailJS

//   // Define the parameters
//   let parms = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     subject: document.getElementById('subject').value,
//     message: document.getElementById('message').value,
//   };

//   // Send the email
//   emailjs
//     .send("service_fqmwjj2", "template_rwhqg16", parms)
//     .then(
//       function (response) {
//         alert("Email Sent Successfully!"); // Success message
//         console.log("Email sent:", response);
//       },
//       function (error) {
//         alert("Failed to send email. Please try again."); // Error message
//         console.error("Email failed to send:", error);
//       }
//     );
// }