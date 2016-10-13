$(document).ready(function(){

    $("#button-food").click(function(){
        if( $("#barcode").val().length != 0 ) {
            var barcode = $("#barcode").val();
            $.ajax({
                url: "http://fr.openfoodfacts.org/api/v0/produit/" + barcode + ".json",
                success: function (data) {
                    var status = data.status;
                    if (status == 1) {
                        console.log(data);
                        var name = data.product.generic_name;
                        var energy = data.product.nutriments.energy;
                        var unit = data.product.nutriments.energy_unit;
                        var calorie = Math.round(energy / 4.184);

                        alert(name + ', energy : ' + energy + unit + '('+calorie+'kcal) for 100g');
                    }
                    else {
                        alert("Oups ! Product Not Found !");
                    }
                },
                error: function (data) {
                    alert("Oups ! Page Not Found !");
                }
            })
        }
        else{
            alert("Oups ! No Barcode !");
        }
    })

});