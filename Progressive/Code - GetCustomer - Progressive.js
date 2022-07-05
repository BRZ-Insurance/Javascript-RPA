SearchCustomer (2);

function SearchCustomer (index){
    var Customer = document.querySelectorAll('[role = row]')[index].querySelectorAll('td')[0].querySelector('a').innerText;
    return Customer;
};
