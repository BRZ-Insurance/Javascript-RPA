SearchContact (1);

function SearchContact (index){
    var Contact = document.querySelectorAll('[class="contact"]')[index].innerText;
    return Contact;
};
