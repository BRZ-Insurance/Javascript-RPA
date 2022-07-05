SearchContact (3);

function SearchContact (index){
    var Contact = document.querySelectorAll('[role = row]')[index].querySelectorAll('td')[1].querySelector('a').innerText;
    return Contact;
};
