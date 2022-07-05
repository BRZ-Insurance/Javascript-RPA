SearchDueDate (14);

function SearchDueDate (index){
    var DD = document.getElementsByClassName('ui-jqgrid-bdiv')[0].childNodes[0].childNodes[1].childNodes[0].childNodes[index].childNodes[6].title;
    return DD;
};
