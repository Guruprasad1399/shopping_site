document.getElementById('bttn').onclick = function () {
    while (true) {
        let a = (prompt('Enter you mobile number'));
        if (/^\d{10}$/.test(a)) {
            alert('You will be notified' + " " + a);
            break;
        }
        else {
            alert('Please enter a valid number');
        }
    }
};

document.getElementById('btn1').onclick = function () {
    location.href = "https://www.google.com/maps/dir/12.9242447,80.1512309/sg+cricket+store+in+chennai/@12.992844,80.1399959,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5268a1bb501c95:0x30a9a8668c76cdb3!2m2!1d80.2763486!2d13.0657356?hl=en"
}

document.getElementById('btn2').onclick = function () {
    location.href = "https://www.google.com/maps/dir//sg+cricket+store+in+bangalore/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae15d82c3d8315:0xe54a6fef7722395b?sa=X&hl=en&ved=2ahUKEwjl5ue1yM7xAhUk8HMBHTwxCf0Q9RcwAHoECBgQBQ"
}

document.getElementById('btn3').onclick = function () {
    location.href = "https://www.google.com/maps/dir//sg+cricket+store+in+kolkata/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a02714fc7ff1c15:0x491486cd6cc3a0bf?sa=X&hl=en&ved=2ahUKEwiumaDWyM7xAhW4ILcAHa3lDLoQ9RcwAXoECAcQBA"
}

document.getElementById('btn4').onclick = function () {
    location.href = "https://www.google.com/maps/dir//sg+cricket+store+in+delhi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d032191ef18c1:0xd6913aece9cc9f56?sa=X&hl=en&ved=2ahUKEwi4tanhyM7xAhVRjeYKHUzDD2EQ9RcwAXoECA8QBA"
}

document.getElementById('btn5').onclick = function () {
    location.href = "https://www.google.com/maps/dir/12.9242447,80.1512309/sg+cricket+store+in+mumbai/@15.5366213,71.9980333,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7b72ffd36d1c1:0xfb6802c8b0c57aa9!2m2!1d72.8493011!2d19.2016497?hl=en"
}