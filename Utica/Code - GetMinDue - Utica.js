SearchMinDue (16);

function SearchMinDue (index){
    var MD = document.querySelectorAll('table')[index+1].querySelectorAll('.x-grid-cell-inner')[5].innerText;
    return MD;
};
