$(document).ready(function(){
    $('#cpf').mask('000.000.000-00')

    $('#phone').mask('(00) 00000-0000')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            },
            cpf: {
                required: true
            },
            address: {
                required: true
            },
            cep: {
                required: true
            }
        }, 
        submitHandler: function(form){
            alert('Formulário enviado com sucesso!')
            cleanForm()
        }, 
        invalidHandler: function(e, validador){
            let incorrectFields = validador.numberOfInvalids();
            if (incorrectFields){
                alert(`Existem ${incorrectFields} campos incorretos`)
            }
        }
    })

    function cleanForm(){
        $('#name').val('')
        $('#email').val('')
        $('#phone').val('')
        $('#cpf').val('')
        $('#address').val('')
        $('#cep').val('')
    }    
})

