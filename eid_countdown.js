setInterval(() => {

    let counter = 0
    let holidays = [
        { name: "Eid Al Adha", date: new Date("Jul 19 2021 00:00:00") },
        { name: "Hijri Calendar New Year", date: new Date("June 9 2021 00:00:00") },
        { name: "Prophet's Birthday", date: new Date("Oct 28 2021 00:00:00") },
        { name: "National Day", date: new Date("Dec 2 2021 00:00:00") }
    ]
    
    let presentTime = new Date().getTime();
    let countdownDate = holidays[counter]['date'].getTime()
    let countdownName = holidays[counter]['name']
    
    var dateDiff = countdownDate - presentTime;
    
    while (dateDiff < 0) {
        counter++
    
        countdownDate = holidays[counter]['date'].getTime()
        countdownName = holidays[counter]['name']
    
        dateDiff = countdownDate - presentTime;
        
    }
    
    countdownDate = holidays[counter]['date']
    countdownName = holidays[counter]['name']                   
    
    console.log("event date:",countdownDate)
    console.log(countdownName)
    console.log(presentTime)
    
    let sec = Math.floor((dateDiff % (1000 * 60)) / 1000)
    let min = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    
    document.getElementById("countdownName").innerText = `${countdownName}`
    document.getElementById("countdownDate").innerText = `${countdownDate.toDateString()}`
    // document.getElementById("countdown").innerText = `Days: ${days}`
    // document.getElementById("hours").innerText = `Hours: ${hours}`
    // document.getElementById("mins").innerText = `Minutes: ${min}`
    // document.getElementById("secs").innerText = `Seconds: ${sec}`
    document.getElementById("msg").innerText = `Days: ${days}, Hours: ${hours}, Minutes ${min}, Seconds: ${sec}`
    
}, 1000);