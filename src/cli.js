import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { fContaPalavras } from './index.js';
import { fMontaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser lido')
    .option('-d, --destino <string>', 'caminho a ser salvo o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;

        if (!texto || !destino) {
            console.error(chalk.red('Erro ao ler arquivo. Caminho de origem ou destino não informados'));
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            fProcessaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('Texto processado com sucesso'));
        } catch (error) {
            console.error(chalk.red(`Erro ao processar arquivo: ${error}`));
        }
    })

program.parse();


function fProcessaArquivo(pTexto, pDestino) {
    fs.readFile(pTexto, 'utf-8', (pErro, pTexto) => {
        try {
            const resultado = fContaPalavras(pTexto);
            fCriaESalvaArquivo(resultado, pDestino);
        }
        catch (Error) {
            console.error(chalk.red(trataErros(pErro)));
        }
    })
}


async function fCriaESalvaArquivo(pListaPalavras, pCaminho) {
    const arquivoNovo = `${pCaminho}/resultado.txt`;
    const textoPalavras = fMontaSaidaArquivo(pListaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log(chalk.blue('arquivo criado'));
    } catch (error) {
        throw error;
    }
}

//Outra forma
function fCriaESalvaArquivoOutraForma(pListaPalavras, pCaminho) {
    const arquivoNovo = `${pCaminho}/resultado.txt`;
    const textoPalavras = JSON.stringify(pListaPalavras);

    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() => {
            console.log(chalk.green('arquivo criado com sucesso'));
        })
        .catch((erro) => {
            throw erro;
        })
        .finally(() => {
            console.log(chalk.blue('operação finalizada'));  
        })
}