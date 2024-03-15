$(function () {

    $("#campo-telefone").mask('(00) 00000-0000')
    $("#CPF").mask('000.000.000-00')
    $("#CEP").mask(' 00000-000')


    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            CPF: {
                required: true,
            },
            CEP: {
                required: true,
            },
            telefone: {
                required: true
            },
            endereço: {
                required: true
            },
        },
        // MUDA A MENSAGEM PADRÃO DE ERRO PARA A MENSAGEM ABAIXO
        messages: {
            nome: ' Por favor, insira o seu nome.',
            telefone: ' Por favor, insira o seu número de telefone/celular.',
            email: ' Por favor, insira um email valido.',
        },
        
        //FAZ APARECER A MENSAGEM DE ERRO QUANDO NÃO TEM 1 CAMPO PREENCHIDO
        invalidHandler: function (evento, validador) {
            let CamposInvalidos = validador.numberOfInvalids();
            if (CamposInvalidos) {
                alert(`Existem ${CamposInvalidos} campos incorretos.`)
            }
        }
    })
})