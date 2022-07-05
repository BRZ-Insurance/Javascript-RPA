SearchDueDate (2);

function SearchDueDate (index){
    var DD = document.querySelectorAll('[role = row]')[index].querySelectorAll('td')[5].innerText;
    return DD;
};
