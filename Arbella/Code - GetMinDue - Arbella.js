SearchMinDue (6);

function SearchMinDue (index){
    var MD = document.querySelectorAll('[class="addInfo"]')[index].innerText;
    var MDSlice = document.querySelectorAll('[class="addInfo"]')[index].innerText.slice(12).replace(' NON PAYMENT','');
   
    return MDSlice;
};
