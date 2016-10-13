$(document).ready(function(){

    function isPrime(value) {
        for(var i = 2; i < value; i++) {
            if(value % i === 0) {
                return false
            }
        }
        return true;
    }


    $("#button-prime").click(function(){
        var tabPrime = [];
        if( $("#prime").val().length != 0 ) {
            var n = $("#prime").val();
            var digits = (""+n).split("");
            var lenght = digits.length;
            digits.forEach(function(value,i){
                if(isPrime(value) == true){
                    tabPrime.push(value);
                }
                i = i+1;
                for(i;i<lenght;i++){
                    value = value+digits[i];
                    if(isPrime(value) == true){
                        tabPrime.push(value);
                    }
                }
            });
            tabPrime.sort(function(a, b){return a - b});
            console.log(tabPrime);
        }
        else{
            alert("Oups ! No Numbers !");
        }
    })


});