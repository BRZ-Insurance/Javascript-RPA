SearchMinDue (2);

function SearchMinDue (index){
    var MD = document.querySelectorAll('[role = row]')[index].querySelectorAll('td')[7].innerText;
    return MD;
};
