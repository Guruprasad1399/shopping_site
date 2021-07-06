document.getElementById('bttn').onclick = function () {
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
        document.getElementById("formm").reset();
    }
};
