SearchMinDue (14);

function SearchMinDue (index){
    var MD = document.getElementsByClassName('ui-jqgrid-bdiv')[0].childNodes[0].childNodes[1].childNodes[0].childNodes[index].childNodes[4].childNodes[2].innerText;
    var MDSlice = MD.slice(8);
    return MDSlice;
};
