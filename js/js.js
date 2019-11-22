
     function formatarValorMoeda() 
     {
        var valor = $('[name=moeda]').val();//pega o conteudo do campo da tela.
        valor = valor.replace(/[^0-9]/g, '');//remove tudo que nao e numero.
        valor = valor.replace(/^0+/, '');
        valor = valor.toString();//converte para string.
        valor = valor + '0';//concatena um 0 a mais no numero.
        var nFormatado = '';//numero formatado.
        if (valor.length > 3)//se o campo possui mais de tres algarismos. 
        {
            for (var i = valor.length; i > 0; i = i - 3) 
            {
                /*
                vai concatenando com '.' de tres em tres para 
                    fazer a formatasao do numero. por isso que foi
                    concatenado um 0 apos o valor.os centavos tambem
                    estam com tres algarismos. 
                */
                nFormatado += '.' + valor.substring(i - 3, i);
            }
            /*
                pega o numero e separa em por pontos com o split() a partir da 
                primeira posisao(slice(1)) pega de tras para frente comcatenando
                com um '.' .
            */
            nFormatado = nFormatado.split('.').slice(1).reverse().join('.');
        }
        //caso o valor tenha somente dois algarismos.
        else if (valor.length == 2) 
        {
            valor = '0.0' + valor;
            nFormatado = valor;
        }
        //caso o valor tenha somente tres algarismos.
        else if (valor.length == 3) 
        {
            valor = '0.' + valor;
            nFormatado = valor;
        }
        else
        {
            valor = '0.00' + valor;
            nFormatado = valor;
        }
        //troca ponto por virgula
        nFormatado = nFormatado.substring(0, nFormatado.length - 1);
        var reais = nFormatado.substring(0, nFormatado.length - 3);
        var centavos = nFormatado.substring(nFormatado.length - 2);//pega os centavos do valor.
        nFormatado = reais + ',' + centavos;
        $('[name=moeda]').val('');//limpa o campo da tela.
        $('[name=moeda]').val(nFormatado);//incere novo valor formatado no campo.
    }