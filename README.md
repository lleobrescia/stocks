# Stocks
Teste para processo seletivo da Toro Investimentos.

Stocks é um produto que te ajuda a decidir se é o melhor momento para comprar ou vender determinada ação.

Você pode fazer uma busca pelo nome da ação e visualizar os detalhes dela, nos detalhes você é informado se o preço dela está em queda ou subindo.

O que decide se uma ação é boa para comprar ou vender e se o preço atual dela é maior ou menor do que o preço de abertura.

## Observações
Essa seção é exclusiva para a **Toro Investimentos**.
Gostaria de justificar algumas decisões para fazer esse projeto, sendo a principal demonstração de conhecimento:

### GIT
Usei a metodologia GIT Flow na utilização do GIT e criei *Pull Requests* para as novas *Features*, onde eu mesmo aprovei e mesclei.
Sei que não era necessário esse processo todo, ele serve como um demonstrativo de como seria um processo normal em uma equipe.

### Redux
Utilizei o Redux ( e o redux saga) para lidar com os dados do stock selecionado.
Mesmo um projeto sendo pequeno, gosto de configurar o redux logo no inicio, pois o projeto pode crescer. Dessa forma, é mais seguro configurar no inicio( mesmo que não use em um primeiro momento) do que precisar mais para frente e ter que refatorar o código.
Alem disso, achei 'elegante' essa solução para o stock selecionado.

### Router
Da mesma forma que o redux, o router não se fazia necessário, mas a justificativa também é a mesma dele. É uma forma de prevenção.
Ele foi utilizado também para poder gerar uma página 404.

### Tests
Coloquei alguns testes simples, apenas para testar se o componente renderiza, o *header* é que tem coisa a mais.
Tenho conhecimento de como realizar testes, mas ainda estou formando meu *mindset* para isso. Ainda fico na dúvida do que testar ou não.


## Requisitos

Para desenvolvimento, você precisará do Node.js e do Yarn instalados em seu ambiente. E, por favor, use o plugin [Editorconfig](http://editorconfig.org/) apropriado para o seu Editor (não obrigatório).

Versões usadas:
 - Node@8.12.0
 - Yarn@1.10.1

### Node
[Node](http://nodejs.org/)  é realmente fácil de instalar. Você deve conseguir executar o seguinte comando abaixo após o procedimento de instalação.

```
$ node --version
v8.12.0
```

#### Instalação do Node no OS X

Você precisará usar o terminal. No OS X, você pode encontrar o terminal padrão em  `/Applications/Utilities/Terminal.app`.

Por favor, instale o [Homebrew] (http://brew.sh/) se ele ainda não foi feito com o seguinte comando.

```
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```
Se a instalação ocorreu com sucesso, execute o comando:
```
brew install node
```

#### Instalação do Node no Linux

```
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

#### Instalação do Node no Windows

Acesse o [site oficial do Node.js](http://nodejs.org/) e pegue o instalador.

### Yarn
Com o node instalado, execute o comando para instalar o [Yarn](https://yarnpkg.com/pt-BR/)

```
$ npm install yarn -g
```
Para verificar se a instalação ocorreu com sucesso, execute o comando:
```
$ yarn --version
v1.10.1
```

## GIT
### GIT Flow
O [GIT Flow](https://br.atlassian.com/git/tutorials/comparing-workflows) é utilizado como metodologia para a utilização do GIT.
As seguintes *branches* são utilizadas:
|Nome da *branch*  | Motivo  |
|--|--|
|master	| para versões de produção |
|develop|para o desenvolvimento da "próxima versão"|
|feature |para nova feature|
|bugfix|para conserto de bug|
|release| para nova versão|
|hotfix | para conserto de bug em produção|
|support|para conserto de bug em versões antigas|



### Commits
Todos os *commits* devem ser escritos em inglês.

Este projeto segue um template de *commits*:

``` bash
# <tipo>: (Se aplicado, este commit será...) <assunto> (Max 50 letras)

# |<---- Use um máximo de 50 caracteres ---->|
# Explique por que esta mudança está sendo feita
# |<---- Tente limitar cada linha a um máximo de 72 caracteres ---->|

# Forneça links ou ids para quaisquer tickets, artigos ou outros recursos relevantes
# Ex: Github issue #23

# --- COMMIT END ---
```

 Tipo pode ser:
-    feat     (nova feature)
-    fix      (bug fix)
-    refactor (refatoração de código)
-    style    (formatação, falta de ponto e vírgula, etc; sem alteração de código)
-    docs     (mudanças na documentação)
-    test     (adicionar ou refatorar testes; nenhuma mudança de código de produção)
-    chore    (atualizando tarefas GULP etc; nenhuma mudança de código de produção)

Lembre-se de:
-    Comece o assunto com letra maiúscula
-    Use o imperativo na linha de assunto
-    Não termine a linha de assunto com período
-    Assunto separado do corpo com uma linha em branco
-    Use o corpo para explicar o que e porque vs. como
-    Pode usar várias linhas com "-" para pontos no corpo

Para mais detalhes de boas práticas, [acesse aqui.](https://chris.beams.io/posts/git-commit/)
## Instalação
Para instalar basta executar o comando:
```
$ yarn
```

## Execução
Para rodar o projeto basta executar o comando:
```
$ yarn start
```

## Desenvolvimento
Este projeto utiliza o [React](https://reactjs.org/) e foi iniciado com o [Create React App](https://github.com/facebook/create-react-app) ( sem executar o *eject*).
As versões utilizadas foram:

 - React@16.8.1
 - npx@6.4.1 ( Create React App)

### Estrutura de pastas
``` bash
├── public 	# Arquivos estáticos. Mais informações [aqui](https://facebook.github.io/create-react-app/docs/using-the-public-folder)
├── src 	# Todos os arquivos de desenvolvimento ficam nessa pasta
│ 	├── assets
│ 	│ 	├── icons 	# Icones do projeto
│ 	│ 	├── images  # Imagens do projeto
│ 	│ 	├── locales # Arquivos de tradução
│ 	│ 	└── sass
│ 	│ 		├── base 		# Estilos globais, como tipografia, cores, etc.
│ 	│ 		├── components 	# Estilo de cada componente independente em seu próprio .scss parcial
│ 	│ 		├── layout 		# Estilos para componentes de layout maiores; por exemplo nav, cabeçalho, rodapé, etc.
│ 	│ 		├── pages 		# Estilo específico de cada página, se necessário
│ 	│ 		├── themes 		# Estilo para diferentes temas
│ 	│ 		├── utils 		# Contém mixins globais, funções, seletores auxiliares, etc.
│ 	│ 		└── vendors 	# Estilos de terceiros, mixins, etc.
│ 	├── components 	 # Componentes globais do projeto
│ 	├── store		 # Arquivos de configuração do redux
│ 	│ 	├── reducers # Armazena todos os Reducers
│ 	│ 	├── sagas 	 # Armazena todos as funções de actions
│ 	├── utils 		  # Armazena todos os scripts auxiliares
│ 	│ 	└── constants # Armazena as constantes do prjeto; tais como: nome actions, endpoits,etc
│ 	└── views 	 # São as seções do projeto.
├── CHANGELOG.md # Registro de mudanças do projeto
├── README.md
├── package.json
└── yarn.lock
```

###  CSS
Este projeto utiliza o [SASS](https://sass-lang.com/) como pré-processador.
Utilize as seguintes práticas no desenvolvimento:

 - [BEM](http://getbem.com/introduction/) para a nomeação das classes.
 - [SASS Guideline](https://sass-guidelin.es/pt/#formatao-e-sintaxe) para boas práticas no SASS.
 -  [CSS Guideline](https://cssguidelin.es/#introduction)  para boas práticas no CSS.

### JS
Esse projeto utiliza o [ESLint](https://eslint.org/) para evitar erros e manter consistência. Por favor, use o plugin  apropriado para o seu Editor.
As [regras](https://eslint.org/docs/rules/) utilizadas são:


``` json
{
	"space-in-parens": [0, "always"],
	"object-curly-spacing": [2, "always"],
	"no-multiple-empty-lines": [2, {
		"max": 1,
		"maxEOF": 0,
		"maxBOF": 0
	}],
	"quotes": [1, "single", "avoid-escape"],
	"semi": [2, "always"],
	"prefer-const": 1,
	"react/jsx-indent": [2, 2],
	"react/prop-types": [2],
	"react/no-array-index-key": [1],
	"no-undef": [1],
	"no-case-declarations": [1],
	"no-return-assign": [1],
	"no-param-reassign": [1],
	"no-shadow": [1],
	"camelcase": [1],
	"no-underscore-dangle": [0, "always"]
}
```
Para mais detalhes veja o arquivo `.eslintrc`

### Plugins
Acesso a documentação dos plugins utilizados nesse projeto:

|Nome |Docs | Onde foi usado  |
|--|--|--|
|react-select  | [link](https://github.com/JedWatson/react-select) | na busca de stock  |

### Scripts

 **`npm start`**
Executa o aplicativo no modo de desenvolvimento. <br>
Abra [http: // localhost: 3000] (http: // localhost: 3000) para visualizá-lo no navegador.
A página será recarregada se você fizer edições. <br>
Você também verá quaisquer erros de lint no console.


 **`npm test`**
Inicia o test runner no modo de *watch* interativo. <br>
Veja a seção sobre [testes em execução] (https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

**`npm run build`**
Cria o aplicativo para produção na pasta `build`. <br>
Ele agrupa corretamente o React no modo de produção e otimiza o build para obter o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes. <br>

Veja a seção sobre [deployment] (https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

## Compilar
Para compilar o projeto basta executar o comando:
```
$ yarn build
```
## Versões
Essa seção é para manter um histórico de número de versões, para mais detalhes de cada versão veja o arquivo `CHENGELOG.md`.
| Versão | Data |
|--|--|
| 1.0.0 | 11/02/2019  |
| 0.1.0 | 09/02/2019  |


## Autor
Leonardo Brescia Avelar
leonardo@leobrescia.com.br
[www.leobrescia.com.br](https://www.leobrescia.com.br/)

