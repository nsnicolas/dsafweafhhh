$(document).ready(function(){

    console.log('Ready')

    //  Busque a data atual e atualize-a no DOM
    var new_date = date.toLocaleDateString('pt-BR')



    // Escreva um evento, quando o botão Enviar for clicado
    $('').click(function(){

        //  Obtenha o valor do texto da área de texto usando o método 'val()'
        let text_value = $('').val()

        //  Converta-o em um objeto JS.
        //  Forneça uma "chave" aqui e escreva o mesmo no arquivo app.py também para extrair dados
        let input_text = {'' : text_value}
        console.log(input_text)

        //  requisição ajax
        $.ajax({

            //  tipo da requisição web
            url : "/predict",
            type : 'POST',

            //  dados a serem enviados no formato JSON
            data : JSON.stringify(),

            //  o tipo de resposta esperado é json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  se tudo funcionar, execute esta função
            success : function(result){

                // extraia previsão e a URL do emoticon do resultado
                let prediction = result.prediction
                let emoji_url = result.url
                console.log(emoji_url)

                //  atualize os elementos DOM
                $('#sentiment').text(prediction)
                $('#sentiment').show()


                //  exiba-os
                $('#emoji').attr('src',emoji_url)
                $('#emoji').show()
            },

            //  se houver algum erro, execute esta função
            error : function(result){

                console.log(result)
            }
        })
        $('#text').val("")


        //  limpando a caixa de texto após cada pressionamento de botão
        $('#text').val("")
    })
        
})