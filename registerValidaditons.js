const isvalidEmail = (array, email) => {
    let isvalid = true
    array.forEach(user => {
        if (user.email == email) {
            isvalid = false
        }
    });
    return isvalid
};

const isvalidUsername = (array, username) => {
    let isvalid = true
    array.forEach(login => {
        if (login.username == username) {
            isvalid = false
        }
    });
    return isvalid
};

const isvalidPass = (pass, cpass) => {
    if (pass !== cpass) {
        return true;
    } else {
        return false;
    }
};

const isvalidname = (fname, lname) => {
    if (fname !== '' && lname !== '') {
        return true;
    } else {
        return false;
    }
};

const TermsIsOn = (terms) => {
    if (terms === 'on'){
        return true
    } else {
        return false
    }
}

module.exports = {
    isvalidEmail,
    isvalidPass,
    isvalidUsername,
    isvalidUsername,
    isvalidname,
    TermsIsOn
}