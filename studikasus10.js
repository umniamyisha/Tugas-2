const daftarEmail = [
    { email: "umniamyisha@example.com" },
    { email: "invalid_email" },
    { email: "justinbieber@example.org" },
    { email: "invalid.email" }
];

function validasiDaftarEmail(emailArray) {

    for (let i = 0; i < emailArray.length; i++) {

        if (emailArray[i].email.includes("@") && emailArray[i].email.includes(".")) {
            console.log(emailArray[i].email + " : Email Valid");
        } else {
            console.log(emailArray[i].email + " : Email Tidak Valid");
        }

    }

}

validasiDaftarEmail(daftarEmail);
