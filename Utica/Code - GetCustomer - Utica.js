SearchCustomer (16);

function SearchCustomer (index){
    var PN =  document.querySelectorAll('table')[index+1].querySelectorAll('.x-grid-cell-inner')[1].innerText;
    return PN;
};
