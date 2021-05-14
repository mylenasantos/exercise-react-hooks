Api Fake com o array family:

Neste projeto existe uma library chamada json-server, ela me permite criar APIs fakes. Para executar o json-server:

Abra um terminal, diferente do que o seu servidor está sendo executado.
Digite: json-server -p 3333 -w fake.json
Com isso você conseguirá acessar a api via http://localhost:3333/family



REGRINHAS:
Use a branch development;
Crie uma nova página chamada Home com o layout que você quiser contendo as imagens, inputs recebendo o array family e o botão chamado adicionar com um ícone de +;
Você pode escolher a cor que quiser para a página, os inputs e o Botão;
Os inputs e o botão com o ícone devem ser do https://material-ui.com/pt/;
Os inputs devem trazer o get assim que a tela seja carregada;
Você deve tornar os inputs editáveis (eles devem permitir escrita);
Ao clicar no botão de +, deve ser acrescentada mais um item para a inserção de dados do array family;
o input "age" só deve aceitar números, os outros somente letras.



DICAS PRECIOSAS:

O Material-ui já está instalado neste projeto;
Para percorrer arrays em JavaScript é comum usarmos o método forEach ou o map;
Para adicionar itens em um array em JavaScript usamos o método push;
O nome do input no Material-ui se chama TextField e o ícone é o AddIcon.
