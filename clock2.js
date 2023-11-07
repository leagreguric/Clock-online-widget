function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    
    const hour1 = document.getElementById("hour1");
    const hour2 = document.getElementById("hour2");
    const hourString = hours.toString().padStart(2, '0'); 
    hour1.textContent = hourString[0];
    hour2.textContent = hourString[1];

    
    const minute1 = document.getElementById("minute1");
    const minute2 = document.getElementById("minute2");
    const minuteString = minutes.toString().padStart(2, '0'); 
    minute1.textContent = minuteString[0];
    minute2.textContent = minuteString[1];
    console.log(minuteString[0])
}


setInterval(updateClock, 1000);

updateClock();