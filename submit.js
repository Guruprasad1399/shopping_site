let users = [];
document.getElementById('bttn').onclick = function (event) {
    let ds = document.getElementById('Name').value;
    if (ds == '') {
        alert('Please enter your name');
    }
    let ds1 = document.getElementById('exampleInputEmail1').value;
    if (ds1 == '') {
        alert('Please enter your email id');
    }
    let ds2 = document.getElementById('exampleInputPassword1').value;
    if (ds2 == '') {
        alert('Please state your query');
    }
    let ds3 = document.getElementById('exampleFormControlTextarea1').value;
    if (ds3 == '') {
        alert('Please explain the query');
    }
    if (ds !== '' && ds1 !== '' && ds2 !== '' && ds3 !== '') {
        alert('Submitted succesfully. We will get back to you within 24hrs.');
    }
    event.preventDefault();
    let user = {
        id: Date.now(),
        name: document.getElementById('Name').value,
        email_id: document.getElementById('exampleInputEmail1').value,
        query: document.getElementById('exampleInputPassword1').value,
        query_explain: document.getElementById('exampleFormControlTextarea1').value
    }
    if (user.id !== '' && user.name !== '' && user.email_id !== '' && user.query !== '' && user.query_explain !== '') {
        users.push(user);
        document.getElementById("formm").reset();
        console.log('added', { user });
        localStorage.setItem('UserSubmission', JSON.stringify(users));
    }
    else {
        document.getElementById("formm").reset();
    }
    // writeFile('userdata.json', JSON.stringify(users), function (err) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('done');
    // });
};
