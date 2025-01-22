export default function fTrataErros(pErro) {
    if (pErro.code === 'ENOENT') {
        throw new Error(`Arquivo não encontrado`);
    }
    else {
        return `Erro não esperado`;
    }
}
