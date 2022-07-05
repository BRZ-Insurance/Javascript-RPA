setDateFrom();
setDateTo();

function setDateFrom(){
    document.querySelector('[id="tranFrom"]').click();
    var l = document.querySelectorAll('[class="cal-DayCell-link"]').length;
    var dateFrom = document.querySelectorAll('[class="cal-DayCell-link"]')[l-1];
    return dateFrom.click();
}

function setDateTo(){
    document.querySelector('[id="tranTo"]').click();
    var l = document.querySelectorAll('[class="cal-DayCell-link"]').length;
    var dateTo = document.querySelectorAll('[class="cal-DayCell-link"]')[l-1];
    return dateTo.click();
}
