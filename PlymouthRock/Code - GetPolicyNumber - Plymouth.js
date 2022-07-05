SearchPolicyNumber (13);

function SearchPolicyNumber (index){
    var PN = document.getElementsByClassName('policyNumber')[index].childNodes[0].innerText;
    var PNSubSlice = PN.substring(0,15)+PN.slice(16);
    return PNSubSlice;
};
