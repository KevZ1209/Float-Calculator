


function floatConversion(input) {
    // input is an 8-bit binary string.
    // the first bit is a sign bit
    // the next 3 are the exponent bits in unsigned integer form
    // the last 4 are the mantissa

    // loop through the input string
    // convert each character to a number

    var sign = 1;
    var exponent = 0;
    var mantissa = 0;

    // check if string only contains 0 and 1
    for (var i = 0; i < input.length; i++) {
        if (input[i] != '0' && input[i] != '1') {
            document.querySelector("#result").innerHTML = "Invalid input characters";
            return;
        }
    }

    if (input.length < 8) {
        document.querySelector("#result").innerHTML = "Invalid input length";
        return;
    }

    if (input[0] == '1') {
        sign = -1;
    }

    var exponent_bits = "";
    var mantissa_bits = "";

    // get substring of input for expoenent bits
    exponent_bits = input.substring(1, 4);

    // get substring of input for mantissa bits
    mantissa_bits = input.substring(4, 8);

    // convert exponent_bits into unsigned integer
    for (var i = 0; i < exponent_bits.length; i++) {
        exponent += exponent_bits[i] * Math.pow(2, exponent_bits.length - i - 1);
    }

    // convert mantissa_bits into unsigned integer
    for (var i = 0; i < mantissa_bits.length; i++) {
        mantissa += mantissa_bits[i] * Math.pow(2, mantissa_bits.length - i - 1);
    }

    let result = sign * (mantissa * Math.pow(2, exponent));

    document.querySelector("#result").innerHTML = result;
}
