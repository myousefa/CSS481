var size_v_crust = [
                [10,15,20],
                [12,17,22],
                [15,20,25]
            ]; 

        function placeOrder() {
            var total = 0;
            var crust_idx = getCrust();
            var size_idx = getSize();
            total += size_v_crust[crust_idx][size_idx];
            total += toppings(size_idx);
            alert("This pizza will cost $"+total+ ".")
        }
        function getCrust() {
            var crust_type = document.getElementById("Crust").value;
            console.log(crust_type);
            if(crust_type == "thin") {
                return 0;
            }
            else if(crust_type == "regular") {
                return 1;
            } else {
                return 2;
            }
        }
        function getSize() {
            var pizza_size = document.getElementById("Size").value;
            console.log(pizza_size);
            if(pizza_size == "large") {
                return 2;
            }
            else if (pizza_size == "medium") {
                return 1;
            } else {
                return 0;
            }
        }
        function toppings(size_idx) {
            var toppping_counter = 0;
            var small_topping = 1;
            var medium_topping = 2;
            var large_topping = 3;
            for(var i = 1; i < 8; i++) {
                if(document.getElementById("topping" + i.toString()).checked) {
                    toppping_counter++;
                }
            }
            if(toppping_counter > 3) {
                alert("Too many toppings! Maximum 3 toppings!")
            } else {
                if(size_idx == 0) {
                    return toppping_counter * small_topping;
                }
                else if(size_idx == 1) {
                    return toppping_counter * medium_topping;
                } else {
                    return toppping_counter * large_topping;
                }
            }
        }