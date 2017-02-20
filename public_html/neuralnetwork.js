var input = [];
var hidden = [];
var output = [];

var w_hidden = [];
var w_output = [];

var input_data = [0, 1, 0, 1];


function reset() {
    input = [0.0, 0.0, 0.0, 0.0];
    hidden = [0.0, 0.0, 0.0, 0.0];
    output = [0.0, 0.0];

    w_hidden = [
        [0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5]
    ];
    w_output = [
        [0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5]
    ];
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function propagate(d) {
    // Copie les données dans la couche d'entrée
    for (var i = 0; i < input.length; i++) {
        input[i] = d[i];
    }

    // Propage dans la couche cachée
    var x_hidden = [0, 0, 0, 0];
    for (var j = 0; j < hidden.length; j++) {
        for (var k = 0; k < input.length; k++) {
            x_hidden[j] += w_hidden[j][k] * input[k];
        }
    }

    // Application de la fonction d'activation
    for (var j = 0; j < hidden.length; j++) {
        hidden[j] = sigmoid(x_hidden[j])
    }

    // Propagation dans la couche de sortie
    x_output = [0, 0];
    for (var k = 0; k < output.length; k++) {
        for (var j = 0; j < hidden.length; j++) {
            x_output[k] += w_output[k][j] * hidden[j];
        }
    }

    // Application de la fonction d'activation dans la couche de sortie
    for (var k = 0; k < output.length; k++) {
        output[k] = sigmoid(x_output[k]);
    }
}

function display() {
    document.getElementById("out0").innerHTML = output[0];
    document.getElementById("out1").innerHTML = output[1];
}