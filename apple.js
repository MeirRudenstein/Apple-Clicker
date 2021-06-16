var cash = document.getElementById("money_num");
var cost = document.getElementById("cost");
var mv = document.getElementById("mv");

var mun = JSON.parse(localStorage.getItem("cash"))
if (mun == "") {
    mun = 0;
    cash.innerHTML = mun;
    JSON.stringify(localStorage.setItem("cash", mun));
}
cash.innerHTML = Math.round(mun);

var m_cost = JSON.parse(localStorage.getItem("multi"))
if (m_cost == "") {
    m_cost = 50;
    cost.innerHTML = m_cost;
    JSON.stringify(localStorage.setItem("multi", m_cost));
}
cost.innerHTML = m_cost;

var m_var = JSON.parse(localStorage.getItem("mv"))
if (m_var == "") {
    m_var = 1;
    mv.innerHTML = m_var;
    JSON.stringify(localStorage.setItem("mv", m_var));
}
mv.innerHTML = m_var;

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
    document.getElementById("times").style.backgroundColor = "lightgrey";
    JSON.stringify(localStorage.setItem("mv", 1));
    JSON.stringify(localStorage.setItem("multi", 50));
    JSON.stringify(localStorage.setItem("cash", 0));
    cash.innerHTML = JSON.parse(localStorage.getItem("cash"));
    mv.innerHTML = JSON.parse(localStorage.getItem("mv"));
    cost.innerHTML = JSON.parse(localStorage.getItem("multi"));
}