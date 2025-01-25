# Projeto: Analisador de Palavras Repetidas

## Sobre o Projeto

Este projeto foi desenvolvido em **JavaScript** para analisar palavras repetidas em arquivos de texto. Ele permite que o usuário importe um arquivo `.txt`, e o código processa os dados, identificando palavras duplicadas em cada parágrafo. Para facilitar a interação do usuário com o programa, foi implementado um menu intuitivo usando a biblioteca **Commander**.

---
## Licença
Este projeto esta licenciado por [MIT LICENSE](https://github.com/jamil-campeao/Analisador-de-Textos/blob/main/LICENSE)

## Estrutura do Repositório

- **`./src`**: Contém os arquivos-fonte do projeto.
- **`./resultado`**: Pasta onde são salvos os resultados das análises realizadas.
- **`./arquivos`**: Diretório destinado aos arquivos `.txt` utilizados na análise.

---

## Tecnologias Utilizadas

- **JavaScript**
- **Commander**: Para criar um menu CLI interativo.
- **Chalk**: Para adicionar cores e melhorar a visualização no terminal.
- **Node.js**: Para leitura/escrita de arquivos e execução do código.

---

## Como Utilizar

1. **Clone o repositório**:
```bash
  git clone https://github.com/jamil-campeao/Analisador-de-Textos.git
```

2. **Instale as dependências**:
```bash
npm install chalk
npm install commander
```
3. **Execute o programa**:
```bash
node src/index.js --texto ./arquivos/exemplo.txt --destino ./resultado
```

4. Resultado:
O arquivo de saída será salvo na pasta ./resultado com o nome resultado.txt.


## Exemplo de Uso
- Coloque um arquivo .txt com o texto a ser analisado na pasta ./arquivos.
- Execute o comando no terminal (Recomendação: GitBash):
```bash
node src/index.js --texto ./arquivos/exemplo.txt --destino ./resultado
```
- O programa exibirá mensagens no terminal sobre o progresso e salvará os resultados no diretório especificado.

## Contribuições
Contribuições são sempre bem-vindas! Caso tenha sugestões, encontre bugs ou deseje colaborar de alguma forma, sinta-se à vontade para abrir uma issue ou enviar um pull request.
Feedbacks e críticas construtivas também são muito apreciados

## Autor
Desenvolvido por: [Jamil Luiz da Silva Campeão](https://github.com/jamil-campeao)

Linkedin: https://www.linkedin.com/in/jamilcampeao/
