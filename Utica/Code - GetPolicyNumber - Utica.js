SearchPolicyNumber (16);

function SearchPolicyNumber (index){
    var PN =  document.querySelectorAll('table')[index+1].querySelectorAll('.x-grid-cell-inner')[0].innerText;
    return PN;
};
