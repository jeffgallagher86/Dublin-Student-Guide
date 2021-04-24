/* --------------------------------------------------------sendemail JS adapted from CI tutorial */

function sendMail(contactForm) {
    emailjs
        .send("default_service", "Dublin Student Guide", {
            from_name: contactForm.name.value,
            from_email: contactForm.emailaddress.value,
            information_request: contactForm.projectsummary.value,
        })
        .then(
            function (response) {
                console.log("SENT", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}