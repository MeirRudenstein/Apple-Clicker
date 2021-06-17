var cash = document.getElementById("money_num");
var cost = document.getElementById("cost");
var mv = document.getElementById("mv");
var set_date = setInterval(timer, 1000);
var off_time;

var new_date = new Date();
var t = new_date.getTime();
console.log(Math.ceil(1/0));



var mun = JSON.parse(localStorage.getItem("cash"));
if (mun == "") {
    mun = 0;
    cash.innerHTML = mun;
    JSON.stringify(localStorage.setItem("cash", mun));
}
cash.innerHTML = Math.round(mun);

var m_cost = JSON.parse(localStorage.getItem("multi"));
if (m_cost == "") {
    m_cost = 50;
    cost.innerHTML = m_cost;
    JSON.stringify(localStorage.setItem("multi", m_cost));
}
cost.innerHTML = m_cost;

var m_var = JSON.parse(localStorage.getItem("mv"));
if (m_var == "") {
    m_var = 1;
    mv.innerHTML = m_var;
    JSON.stringify(localStorage.setItem("mv", m_var));
}
mv.innerHTML = m_var;

setTimeout(
    function() {
    var date = JSON.parse(localStorage.getItem("date"));
    m_var = JSON.parse(localStorage.getItem("mv"));
    mun = JSON.parse(localStorage.getItem("cash"));
if (date != "") {
    off_time = t - date;
    var off_h = Math.floor(off_time / 360000);
    var off_m;
    if (off_h == 0){
        off_m = Math.ceil(off_time / 60000);
    } else {
        off_m = Math.ceil(off_time / off_h);
    }
    var x = (off_m * 2 * m_var);
    x = Math.ceil(x);
    alert("You've been offline for: " + off_h + " hours and " + off_m + " minutes and earned " + x + " dollars while offline.");
    }
    mun = mun + x;
    cash.innerHTML = Math.round(mun);
    JSON.stringify(localStorage.setItem("cash", mun));
    if (mun >= m_cost) {
        document.getElementById("times").style.backgroundColor = "green";
    }
}, 100);

function get_money() {
    mun = JSON.parse(localStorage.getItem("cash"));
    m_var = JSON.parse(localStorage.getItem("mv"));
    mun += 1 * m_var;
    JSON.stringify(localStorage.setItem("cash", mun));
    cash.innerHTML = Math.round(mun);
    if (mun >= m_cost) {
        document.getElementById("times").style.backgroundColor = "green";
    }
}

function add_mult() {
    mun = JSON.parse(localStorage.getItem("cash"));
    m_var = JSON.parse(localStorage.getItem("mv"));
    m_cost = JSON.parse(localStorage.getItem("multi"));
    if (mun >= m_cost) {
        mun -= m_cost;
        m_var *= 1.25;
        m_cost *= 1.35;
        m_var = Math.round(m_var * 100)/100;
        m_cost = Math.round(m_cost);
        mun = Math.round(mun);
        mv.innerHTML = m_var;
        cost.innerHTML = m_cost;
        cash.innerHTML = mun;
        JSON.stringify(localStorage.setItem("mv", m_var));
        JSON.stringify(localStorage.setItem("multi", m_cost));
        JSON.stringify(localStorage.setItem("cash", mun));
        if (mun < m_cost) {
            document.getElementById("times").style.backgroundColor = "lightgrey";
        }
    }
}

function reset() {
    var x = confirm("Are you sure you want to restart?");
    if (x) {
    document.getElementById("times").style.backgroundColor = "lightgrey";
    JSON.stringify(localStorage.setItem("mv", 1));
    JSON.stringify(localStorage.setItem("multi", 50));
    JSON.stringify(localStorage.setItem("cash", 0));
    cash.innerHTML = JSON.parse(localStorage.getItem("cash"));
    mv.innerHTML = JSON.parse(localStorage.getItem("mv"));
    cost.innerHTML = JSON.parse(localStorage.getItem("multi"));
    }
}

function timer() {
    var x = new Date();
    date = x.getTime();
    JSON.stringify(localStorage.setItem("date", date));
}