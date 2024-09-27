const express = require("express");
const cors = require("cors");
const app = express();
const TelegramBot = require("node-telegram-bot-api");

const token = "7570626039:AAGQ0L2nZdaz2KEkPqn2gA3ABjkbJ4IhFWA";
const bot = new TelegramBot(token, { polling: true });


app.use(cors()); // Permite requisições de qualquer origem

// Rota HTTP para o UptimeRobot pingar
app.get("/", (req, res) => {
  res.send("O bot está rodando corretamente.");
});




// Inicia o servidor na porta definida pelo Glitch ou 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Lógica para novos membros do chat
bot.on("new_chat_members", (msg) => {
  const newMember = msg.new_chat_members
    ? msg.new_chat_members[0].first_name
    : "Membro";
  const BoasVindas = `Bem-vindo(a) ${newMember}! 🎉 Deixe sua dúvida no chat ou aguarde até que um membro da equipe entre em contato com você para resolução do seu problema. Você também pode me fazer uma pergunta!`;

  bot.sendMessage(msg.chat.id, BoasVindas);
  console.log("NOVO USUÁRIO: ", BoasVindas);
});

// Função para lidar com mensagens recebidas
function handleMessage(msg) {
  const chatId = msg.chat.id;

  if (!msg.text) {
    return;
  }

  const messageText = msg.text.toLowerCase();
  console.log("Mensagem recebida:", messageText); // Log para depuração

  if (
    messageText.includes("olá") ||
    messageText.includes("oi") ||
    messageText.includes("/start") ||
    messageText.includes("oi?") ||
    messageText.includes("olá?")
  ) {
    const PrimeiroContato = "Olá! Como posso ajudar você hoje?";
    bot.sendMessage(chatId, PrimeiroContato);
    console.log("Primeira interação com o cliente:", PrimeiroContato);
  } else if (
    messageText.includes("não recebi os dados") ||
    messageText.includes("não recebi") ||
    messageText.includes("quando recebo?") ||
    messageText.includes("quando recebo") ||
    messageText.includes("quando vou receber") ||
    messageText.includes("até agora não recebi os dados") ||
    messageText.includes("os dados não foram enviados") ||
    messageText.includes("os dados não foram enviado a mim") ||
    messageText.includes("paguei mas não recebi") ||
    messageText.includes("paguei e não recebbi") ||
    messageText.includes("não recebi nada") ||
    messageText.includes("não recebi") ||
    messageText.includes("paguei mas não enviaram nada para mim") ||
    messageText.includes("ainda não recebi") ||
    messageText.includes("ainda não me mandaram os dados") ||
    messageText.includes("porque ainda não recebi?") ||
    messageText.includes("por que ainda não recebi?") ||
    messageText.includes("por quê ainda não recebi?") ||
    messageText.includes("porquê ainda não recebi?") ||
    messageText.includes("por que ainda não recebi os dados?") ||
    messageText.includes("por quê ainda não recebi os dados?") ||
    messageText.includes("porquê ainda não recebi os dados?") ||
    messageText.includes("como recebo?") ||
    messageText.includes("como recebo") ||
    messageText.includes("comprei e não recebi") ||
    messageText.includes("eu não recebi") ||
    messageText.includes("eu ainda não recebi")
  ) {
    const RespTempo =
      "Os dados serão enviados em um prazo de até 48 horas. Caso tenha passado as 48 horas e você ainda não recebeu, aguarde o contato de um dos nossos suportes.";
    bot.sendMessage(chatId, RespTempo);
    console.log("Resposta Sobre tempo: ", RespTempo);
  } else if (
    messageText.includes("fiz o pagamento mas não coloquei os dados") ||
    messageText.includes("fiz o pagamento, mas não coloquei os dados") ||
    messageText.includes("fiz o pagamento, mas não coloquei os dados, o que faço?") ||
    messageText.includes("acabei não colocando os dados") ||
    messageText.includes("acabei não colocando os dados, o que faço") ||
    messageText.includes("não coloquei meu telefone") ||
    messageText.includes("paguei mas não coloquei meu telefone") ||
    messageText.includes("paguei mas não coloquei meu celular") ||
    messageText.includes("paguei mas não coloquei meu número de telefone") ||
    messageText.includes("paguei mas não coloquei meu numero de telefone") ||
    messageText.includes("paguei mas não coloquei meu numero de celular") ||
    messageText.includes("paguei mas não coloquei meu número de whatsapp") ||
    messageText.includes("paguei mas não coloquei meu numero de whatsapp") ||
    messageText.includes("Comprei com cripto mas não enviei preenchi com minha carteira") ||
    messageText.includes("paguei mas esqueci de colocar meus dados") ||
    messageText.includes("paguei e não coloquei minha carteira") ||
    messageText.includes("paguei e não coloquei meu nome") ||
    messageText.includes("paguei e não coloquei meu numero") ||
    messageText.includes("paguei e não coloquei o celular") ||
    messageText.includes("apenas paguei e não coloquei os dados") ||
    messageText.includes("não coloquei os dados") ||
    messageText.includes("não coloquei minha wallet") ||
    messageText.includes("não coloquei a carteira de pagamento") ||
    messageText.includes("não coloquei a carteira")
  ) {
    const RespFaltadeDados =
      "Se efetuou o pagamento e esqueceu de colocar os dados. Isso significa que terá que aguardar o contato de um dos nossos administradores.";
    bot.sendMessage(chatId, RespFaltadeDados);
    console.log("Resposta sobre falta de dados fornecido pelo cliente: ", RespFaltadeDados);
  } else if (
    messageText.includes("quero reembolso") ||
    messageText.includes("recebi mas está errado") ||
    messageText.includes("recebi mais está errado") ||
    messageText.includes("recebi mas está errado") ||
    messageText.includes("os dados estão errados") ||
    messageText.includes("os dados estão errados, quero meu dinheiro de volta") ||
    messageText.includes("quero meu dinheiro de volta") ||
    messageText.includes("os dados já vieram da forma que eu queria") ||
    messageText.includes("os dados vieram errados") ||
    messageText.includes("os dados estão imcompletos") ||
    messageText.includes("os dados estão faltando")
  ) {
    const RespErroRecebimentoDeDados =
      "Caso acredite que os dados estão incorretos, imcompletos ou não vieram da forma que imaginava, aguarde o contato do nosso suporte para uma resposta e solução personalizada.";
    bot.sendMessage(chatId, RespErroRecebimentoDeDados);
    console.log("Respota sobre erro no recebimento dos dados solicitados: ", RespErroRecebimentoDeDados);
  } else if (
    messageText.includes("paguei com cripto, mas não recebi os dados") ||
    messageText.includes("paguei com cripto mas não coloquei minha carteira") ||
    messageText.includes("paguei com cripto") ||
    messageText.includes("paguei com cripto mas não coloquei meu telefone") ||
    messageText.includes("paguei com cripto mas não coloquei meu fone") ||
    messageText.includes("paguei com cripto mas não coloquei meu celular") ||
    messageText.includes("paguei com cripto mas não coloquei meu número") ||
    messageText.includes("paguei com cripto mas não coloquei meu número de celular") ||
    messageText.includes("paguei com cripto mas não coloquei meu número de whatsapp") ||
    messageText.includes("paguei com cripto mas não coloquei meu whatsapp") ||
    messageText.includes("paguei e não coloquei meus dados de contato") ||
    messageText.includes("paguei mas não coloquei meu dados") ||
    messageText.includes("paguei mas não coloquei meus dados de contato") ||
    messageText.includes("paguei e esqueci de colocar os dados")
  ) {
    const faltaDeDados =
      "Se você pagou e esqueceu de vincular algum dado como carteira de pagamento, número de whatsapp ou nome, terá que aguardar o contato do nosso suporte para um atendimento e resolução personalizada para seu caso.";
    bot.sendMessage(chatId, faltaDeDados);
    console.log("Resposta ao esquecimento de vínculo de dados: ", faltaDeDados);
  } else if (
    messageText.includes("como funciona?") ||
    messageText.includes("como usar?") ||
    messageText.includes("como funciona") ||
    messageText.includes("como usar") ||
    messageText.includes("tutorial") ||
    messageText.includes("como usa?") ||
    messageText.includes("como usa") ||
    messageText.includes("como faço?") ||
    messageText.includes("como faço") ||
    messageText.includes("me ajuda a usar?") ||
    messageText.includes("me ajude a usar") ||
    messageText.includes("me ensina a usar") ||
    messageText.includes("me ensina?") ||
    messageText.includes("como funciona o processo?") ||
    messageText.includes("como funciona o sistema?") ||
    messageText.includes("como funciona o que você está vendendo?") ||
    messageText.includes("como funciona o seu serviço?")
  ) {
    const comoFunciona =
      "Para utilizar a plataforma, é simples! Basta escolher a opção que se encaixa com o dado que você tem em mãos e clicar nela. Ao entrar, o sistema solicitará os dados. Leia atentamente e preencha cada um deles. Em até 48 horas, os dados serão enviados ao seu número de contato.Olhe também nosso whitepaper(Manual do cliente) em https://tutorial-sobre-plataforma-de-bus.gitbook.io/tutorialbuscadados";
    bot.sendMessage(chatId, comoFunciona);
    console.log("Resposta sobre como funciona: ", comoFunciona);
  } else if (
    messageText.includes("não consigo acessar") ||
    messageText.includes("não consigo entrar") ||
    messageText.includes("não estou conseguindo acessar") ||
    messageText.includes("não estou conseguindo entrar") ||
    messageText.includes("não estou conseguindo logar") ||
    messageText.includes("estou tendo dificuldade de acessar") ||
    messageText.includes("estou tendo dificuldade de entrar") ||
    messageText.includes("estou tendo dificuldade de logar") ||
    messageText.includes("não consigo logar") ||
    messageText.includes("não consigo entrar na plataforma")
  ) {
    const dificuldadeDeAcesso =
      "Se você não está conseguindo acessar, pode ser que seu acesso tenha sido bloqueado por alguma razão ou pode ser um erro de login. Recomendamos que entre em contato com nosso suporte.";
    bot.sendMessage(chatId, dificuldadeDeAcesso);
    console.log("Resposta sobre dificuldade de acesso: ", dificuldadeDeAcesso);
  } else if (
    messageText.includes("quero cancelar") ||
    messageText.includes("cancelar assinatura") ||
    messageText.includes("cancelar pagamento") ||
    messageText.includes("quero cancelar assinatura") ||
    messageText.includes("quero cancelar meu pagamento") ||
    messageText.includes("quero cancelar meu serviço")
  ) {
    const cancelamento =
      "Caso deseje cancelar o pagamento ou assinatura, por favor, entre em contato com o nosso suporte para que possamos te ajudar.";
    bot.sendMessage(chatId, cancelamento);
    console.log("Resposta sobre cancelamento: ", cancelamento);
  } else {
    const defaultResponse =
      "Desculpe, não consegui entender sua mensagem. Você pode reformular ou perguntar outra coisa!";
    bot.sendMessage(chatId, defaultResponse);
    console.log("Resposta padrão: ", defaultResponse);
  }
}

bot.on("message", handleMessage);

bot.on("polling_error", (error) => {
  console.error("Polling Error:", error);
});
