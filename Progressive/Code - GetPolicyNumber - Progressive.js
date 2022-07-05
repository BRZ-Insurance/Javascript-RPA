SearchPolicyNumber (2);

function SearchPolicyNumber (index){
    var PolicyNumber = document.querySelectorAll('[role = row]')[index].querySelectorAll('td')[0].querySelectorAll('a')[1].innerText;
    return PolicyNumber;
};
