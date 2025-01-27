// 1) Faça um regex para capturar os cpfs presentes no trecho abaixo. Obs.: o regex precisa casar com cpfs com ou sem pontuação (772.843.809-34 ou 77284380934)

const texto = 'Maria foi ao Na Hora e recebeu seu novo CPF (772.843.809-34), porém, para confirmar o número do seu novo documento, foi pedido que na hora de digitar no sistema, que digitasse sem a pontuação, então ela digitou 77284380934.'
console.log(texto.match(/\d{3}\.?\d{3}\.?\d{3}\.?-?\d{2}/g))


// 2) Encontre a data e hora no texto abaixo.

const texto2 = 'O sistema vai parar para uma manutenção programada no dia 10/09/2020 às 23:00.'
console.log(texto2.match(/\d{2}\/\d{2}\/\d{4}|\d{2}:\d{2}/g))


// 3) Escreva um regex que encontre o conteúdo do atributo href do link no html a seguir (somente o endereço).

const texto3 = `html
<html>
  <head><title>Exercícios</title></head>
  <body>
    <p>Menu</p>
    <ul>
      <li><a href="https://google.com">Google</a></li>
    </ul>
</html>
`
console.log(texto3.match(/(?<=href=").*?(?=")/g))


// 4) Encontre o texto dentro da tag h1 abaixo.

const texto4 = `html
<html>
  <head><title>Exercícios</title></head>
  <body>
    <h1>Exercícios</h1>
    <table>
      <thead>
        <th>#</th>
        <th>Questão</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Primeiro exercício de regex</td>
        </tr>
      </tbody>
    </table>
</html>
`
console.log(texto4.match(/(?<=<h1>).*?(?=<\/h1>)/gi))