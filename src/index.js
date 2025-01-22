//1. crio um array de palavras
//2. Conto as ocorrências
//3. Monto um objeto com o resultado
// {
//     "web": 5,
//     "computador": 3
// }

function fVerificaPalavrasDuplicadas(pTexto) {
    const listaPalavras = pTexto.split(' ');
    const resultado = {}; //Objeto Vazio
    // objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        if(palavra.length > 4) {
            const palavraLimpa = fLimpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; //Se a propriedade existir, incremento com mais 1, se não, passo 0    
        }
    });  
    return resultado;  
}

function fLimpaPalavras(pPalavra) {
    return pPalavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

}

export function fContaPalavras(pTexto) {
    const paragrafos = fExtraiParagrafos(pTexto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return fVerificaPalavrasDuplicadas(paragrafo);
    })
    return contagem;
    
}

function fExtraiParagrafos(pTexto) {
    return pTexto.toLowerCase().split('\n'); //transformo em tudo em letra minuscula e quebro em paragrafos quando tiver uma quebra de linha

}
