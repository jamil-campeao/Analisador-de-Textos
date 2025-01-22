function fFiltraOcorrencias(pParagrafo) {
    return Object.keys(pParagrafo).filter((chave) => pParagrafo[chave] > 1);
}

function fMontaSaidaArquivo(pListaPalavras) {
    let textoFinal = '';
    pListaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = fFiltraOcorrencias(paragrafo).join(', ');
        if (duplicadas !== '') {
            textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`;
        }
    })

    return textoFinal;
}

export { fMontaSaidaArquivo}