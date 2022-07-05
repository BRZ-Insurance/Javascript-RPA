searchPolicie(2);

function searchPolicie(index){
    var sP = document.querySelectorAll('tbody')[6].childNodes[2*index].childNodes[1].childNodes[0].rel;
    var uRL = 'https://gigezrate.guard.com/'+sP
    return uRL;
}
