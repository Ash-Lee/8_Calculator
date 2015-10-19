/* 8_Calculator - JavaScript and jQuery */

var num1 = "",
    num2 = "",
    opSelected = false,
    operation = null,
    operationData = {
        sign: ["/", "*", "-", "+"],
        process: [
            function(num1, num2) {return num1 / num2;},
            function(num1, num2) {return num1 * num2;},
            function(num1, num2) {return num1 - num2;},
            function(num1, num2) {return num1 + num2;}]
    },
    solved = false;


$(function() {

    // User numeric input
    $('.num').on('click', function() {
        // Reset calculator from previous calculation
        if (solved === true) {
            solved = false;
            $('.screen').empty();
        }

        // Remove default 0 value from screen
        if (num1 === "" && num2 === "") {
            $('.screen').empty();
        }

        // Assign number values
        if (opSelected === false) {
            $('.screen').append($(this).html());
            num1 += $(this).html();
        } else {
            $('.screen').append($(this).html());
            num2 += $(this).html();
        }
    });

    // User operation input
    $('.divide').on('click', function() {
        if (opSelected === true || num1 === "") {
        } else {
            calculate(0);
        }
    });

    $('.multiply').on('click', function() {
        if (opSelected === true || num1 === "") {
        } else {
            calculate(1);
        }
    });

    $('.subtract').on('click', function() {
        if (opSelected === true || num1 === "") {
        } else {
            calculate(2);
        }
    });

    $('.add').on('click', function() {
        if (opSelected === true || num1 === "") {
        } else {
            calculate(3);
        }
    });

    // Calculate answer
    $('.equals').on('click', function() {
        num1 = Math.floor(num1);
        num2 = Math.floor(num2);
        var answer = operation(num1, num2);
        $('.screen').empty().append(answer);
        num1 = num2 = String();
        opSelected = false;
        solved = true;
    });

    // Clear screen
    $('.clear').on('click', function() {
        $('.screen').empty().append('0');
        num1 = num2 = String();
    })

});


// Assign appropriate operation for the required calculation
function calculate(op) {
    opSelected = true;
    $('.screen').append(operationData.sign[op]);
    operation = operationData.process[op];
};