# Registo de Erros — TP6

## Projeto: Doce Ribeira

Durante o desenvolvimento e os testes do projeto foram identificados e corrigidos os seguintes problemas:

| # | Problema | Causa | Correção |
|---|---|---|---|
| 1 | O menu não ficava organizado horizontalmente | O elemento `nav ul` não estava configurado corretamente com Flexbox | Foi aplicado `display: flex` ao `nav ul` e removidos os marcadores da lista |
| 2 | O menu ficava em coluna de forma inadequada | Existia uma regra antiga com `display: block` numa media query | A regra antiga foi removida e substituída pela abordagem Mobile First |
| 3 | Os cartões das especialidades não ficavam lado a lado | Os cartões não estavam dentro de um container Flexbox | Foi criada a classe `.cartoes` com `display: flex`, `flex-wrap` e `gap` |
| 4 | As imagens podiam ultrapassar o espaço disponível | As imagens não tinham uma regra geral de responsividade | Foi aplicada a regra `img { max-width: 100%; height: auto; }` |
| 5 | A página de produtos tinha conteúdo fora do elemento principal | O conteúdo não estava dentro de `<main>` | O conteúdo foi reorganizado dentro de `<main>` |
| 6 | O `footer` estava fora da estrutura correta da página | O `<footer>` estava colocado fora do `<body>` | O `<footer>` foi colocado dentro do `<body>` |
| 7 | Um link do menu apontava para a página errada | O `href` do link “PRODUTOS” apontava para `precario.html` | O `href` foi corrigido para `produtos.html` |

## Testes e validação

- CSS validado no W3C CSS Validator: sem erros.
- Páginas HTML validadas no W3C Markup Validation Service.
- Foram realizados testes de responsividade para diferentes larguras de ecrã.
- Foi verificada a estrutura das páginas para garantir a utilização de `header`, `main` e `footer`.
