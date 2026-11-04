# Portefólio — Roziel Lima Pimenta

Portefólio pessoal desenvolvido no âmbito da formação de Web Design do IEFP. Apresenta o meu percurso, competências e projetos nas áreas de eletrotecnia, automação e tecnologia.

## Páginas

- `index.html` — apresentação e primeiro contacto; é a página inicial publicada.
- `portfolio.html` — currículo, formação, experiência, competências, projetos e contactos.
- `mini-cnc.html` — apresentação do projeto final de curso.
- `iot-programacao.html` — página de apresentação de IoT e programação.
- `technovadb.html` — página informativa do projeto TechNovaDB, atualmente em construção.

## Estrutura

```text
Portfolio/
├── index.html
├── portfolio.html
├── mini-cnc.html
├── iot-programacao.html
├── technovadb.html
├── css/                 # uma folha de estilos por página
├── js/                  # carrossel e ícones
├── img/                 # fotografias, fundos e imagens dos projetos
├── downloads/           # CV
├── README.md
└── creditos.txt
```

## Tecnologias e funcionamento

O site usa HTML5, CSS3 e JavaScript, sem processo de compilação nem pacotes para instalar. Cada página tem o seu CSS. `portfolio.js` anima e controla o carrossel de projetos; `mini-cnc.js` inicializa os ícones Lucide. As restantes páginas não precisam de JavaScript próprio.

O site adapta o conteúdo a ecrãs de computador, tablet e telemóvel. Para manter as ligações entre projetos locais, abra a pasta `Projetos` num servidor local, deixando `Portfolio`, `DoceRibeira` e `meu-plano-treino` como pastas irmãs. O Google Fonts e os ícones Lucide são carregados de serviços externos e precisam de Internet; o conteúdo principal continua disponível sem eles.

## Motivação e aprendizagem

O objetivo é apresentar a minha experiência profissional, formação, competências e projetos na área tecnológica. Durante o desenvolvimento, trabalhei a organização do layout e a adaptação a diferentes tamanhos de ecrã, usando Flexbox e media queries para estruturar as páginas responsivas.

## Créditos

As fontes, imagens, ilustrações conceptuais e ferramentas externas estão descritas em [`creditos.txt`](creditos.txt).

## Publicação

O repositório pode ser publicado com GitHub Pages a partir da raiz. Manter a estrutura de pastas preserva os caminhos das páginas, imagens, estilos, CV e scripts.

[Ver portefólio publicado](https://rlpimenta.github.io/Portfolio/)

## Autor

Roziel Lima Pimenta