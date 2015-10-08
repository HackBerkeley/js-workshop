var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
};

xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Berkeley');
xhr.send();
