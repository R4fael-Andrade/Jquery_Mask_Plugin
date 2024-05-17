$('document').ready(function() {

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-00'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required:true
            },
            endereco: {
                required:true
            },
            cep: {
                required: true
            }

        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Insira seu email',
            telefone: 'Informe o telefone',
            cpf: 'Preencha o CPF',
            endereco: 'Informe o endereco',
            cep: 'Preencha o CEP'
        }
    })

}) 



