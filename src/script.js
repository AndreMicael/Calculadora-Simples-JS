function outcome() {
    //Seleciona os valores presentes nos campos para fazer a soma
    let num1 = Number(document.querySelector("#num-one").value);
    let num2 = Number(document.querySelector("#num-two").value);
    let result = 0;

    // Recebe o operador que foi selecionado pelo usuário
    sum = document.getElementById('box1').checked;
    subtract = document.getElementById('box2').checked;
    multiply = document.getElementById('box3').checked;
    divide = document.getElementById('box4').checked;

    //Faz as operações
    if (sum)
        result = num1 + num2;
    else if (subtract)
        result = num1 - num2;
    else if (multiply)
        result = num1 * num2;
    else if (divide)
        result = num1 / num2;
    //Divulga os resultados e retorna para o campo específico
    document.querySelector("#result").value = result;
}