window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.pt.m5 = {
  title:"20 projetos concretos do dia a dia",
  level:"Iniciante",
  summary:"20 receitas prontas para copiar e colar — pessoal, profissional, criativo, aprendizado — para realmente fazer coisas com a IA já hoje.",
  html:`
<p>Chega de teoria. Este módulo é uma caixa de ferramentas: 20 situações reais, cada uma com um prompt já escrito. Você só precisa copiar, substituir os <code>[colchetes]</code> pela sua situação real e olhar o que sai. A ideia não é fazer tudo — é perceber, exemplo após exemplo, o quanto isso ficou <strong>fácil</strong>.</p>
<div class="obj"><b>Objetivo.</b> Sair com pelo menos 3 prompts que você reutilizará esta semana. Pegue o que te interessa, ignore o resto. Cada receita cabe em 4 linhas: um título, para que serve, o prompt para colar e uma variante para ir mais longe.</div>

<h2>No dia a dia</h2>

<h3>1. Planejar uma viagem</h3>
<p>Um programa dia a dia, com orçamento e boas dicas, em um minuto.</p>
<div class="pr"><pre>Você é meu agente de viagens. Organize uma estadia de [número] dias em [destino], de [data] a [data], para [número] pessoas, orçamento [valor].
Dê um programa dia a dia (manhã / tarde / noite): bairro onde dormir, atividades, 2 restaurantes adequados a [preferências alimentares], tempo de deslocamento entre cada etapa e um orçamento estimado por item.
Formato: uma tabela por dia.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "otimize para viajar com crianças / com orçamento baixo / para fotografia".</p>

<h3>2. Triar e responder aos e-mails</h3>
<p>Entender um e-mail em 3 pontos e obter uma resposta pronta para enviar.</p>
<div class="pr"><pre>Aqui está um e-mail que recebi (colado mais abaixo). Faça três coisas:
1) resuma-o em 3 pontos; 2) me diga claramente o que esperam de mim;
3) proponha 2 respostas: uma curta e educada, uma mais detalhada.
Tom: [profissional / amigável]. Assinado: [nome].

[cole o e-mail aqui]</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "aqui estão 10 e-mails, classifique-os por urgência e me diga quais posso ignorar".</p>

<h3>3. Fazer um orçamento mensal</h3>
<p>Uma distribuição realista do seu dinheiro, e onde cortar para economizar.</p>
<div class="pr"><pre>Me ajude a fazer um orçamento mensal.
Rendimentos: [valor]. Despesas fixas: [aluguel, assinaturas, transporte...].
Objetivo: economizar [valor] por mês.
Proponha uma distribuição realista, identifique 3 itens onde posso reduzir e apresente tudo numa tabela clara.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "simule meu orçamento se meus rendimentos subirem para [valor]".</p>

<h3>4. Preparar as refeições da semana</h3>
<p>Um cardápio completo de 7 dias + a lista de compras organizada por seção.</p>
<div class="pr"><pre>Proponha um cardápio para [número] pessoas em 7 dias (almoço e jantar).
Cozinha [tipo], orçamento [valor], evitando [alergias / alimentos].
Para cada dia: o prato + o tempo de preparo.
No final, dê UMA lista de compras agrupada por seção.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "aproveite 3 ingredientes a semana toda para evitar o desperdício".</p>

<h3>5. Analisar uma foto ou um documento</h3>
<p>Fazer a IA ler uma imagem, um recibo, uma tela — e responder à sua pergunta.</p>
<div class="pr"><pre>Analise a imagem que eu te mostro.
Descreva o que você vê, identifique [o que me interessa: erros, informações-chave, anomalias], depois responda a: [sua pergunta].
Se você não tiver certeza de um detalhe, diga isso em vez de inventar.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "copie para mim o texto / os números deste documento fotografado numa tabela".</p>

<h2>No trabalho</h2>

<h3>6. Resumir um PDF de 40 páginas</h3>
<p>O essencial de um documento longo sem ler tudo — sem inventar nada.</p>
<div class="pr"><pre>Vou te dar um documento de [número] páginas (colado / anexado mais abaixo). Faça:
1) um resumo em 10 linhas; 2) as 5 ideias mais importantes em lista;
3) os números e datas-chave; 4) o que retenho se eu só tiver 30 segundos.
Não invente nada: se uma informação não estiver no texto, diga "não especificado".

[cole o texto aqui]</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "responda apenas a: [minha pergunta precisa], citando a página".</p>

<h3>7. Preparar uma entrevista</h3>
<p>Treinar com um recrutador que faz perguntas de verdade, uma a uma.</p>
<div class="pr"><pre>Vou fazer uma entrevista para o cargo de [título] na [empresa / setor].
Faça o papel do recrutador: me faça 8 perguntas, da mais simples à mais difícil, UMA DE CADA VEZ, e espere minha resposta antes da seguinte.
No final, me dê um retorno honesto: pontos fortes e 3 coisas a melhorar.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "me dê primeiro as 5 perguntas-armadilha do setor com um roteiro de resposta".</p>

<h3>8. Preparar uma negociação (rascunho)</h3>
<p>Uma mensagem argumentada para pedir um desconto, um prazo, uma cláusula.</p>
<div class="pr"><pre>Aqui estão os pontos de um contrato / orçamento que quero negociar: [lista].
Redija um e-mail educado mas firme para pedir [redução / prazo / modificação], com 2 argumentos sólidos por ponto. Tom profissional e aberto à discussão.
É um rascunho: vou reler tudo antes de enviar.

[cole o contexto aqui]</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "acrescente uma versão de recuo caso a outra parte recuse".</p>

<h3>9. Redigir uma descrição de vaga</h3>
<p>Um anúncio claro e atraente, estruturado de primeira.</p>
<div class="pr"><pre>Redija uma descrição de vaga para [título] em [tipo de empresa].
Estrutura: missão em 2 linhas · responsabilidades (6 tópicos) · perfil buscado (indispensável / desejável) · o que oferecemos.
Tom [atraente / sério], sem jargão inútil.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "adapte-a em um anúncio curto e impactante para o LinkedIn".</p>

<h3>10. Limpar uma tabela de Excel</h3>
<p>Dados bagunçados transformados em tabela limpa e aproveitável.</p>
<div class="pr"><pre>Vou colar uma tabela bagunçada. Limpe-a:
corrija os formatos de datas e números, uniformize os títulos, identifique as duplicatas e os valores faltantes.
Me devolva a tabela limpa, depois a lista do que você corrigiu.

[cole os dados aqui]</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "me dê a fórmula de Excel / Google Sheets para calcular [o que você quer]".</p>

<h2>Para criar</h2>

<h3>11. Criar um visual de anúncio</h3>
<p>Um cartaz ou um post limpo, com o texto bem legível nele.</p>
<div class="pr"><pre>Gere um visual de anúncio para [evento / produto].
Formato [quadrado Instagram / story 9:16].
Texto a exibir EXATAMENTE: "[título]" e "[data / local]".
Estilo: [moderno / colorido / clean]. Cores: [paleta]. Resultado profissional, texto legível e sem erros.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "faça 3 versões de cores". Dica: para texto nítido na imagem, uma IA como o Gemini (Nano Banana Pro) é a mais confiável.</p>

<h3>12. Reescrever um texto</h3>
<p>Tornar uma mensagem mais clara, mais curta ou mais bem direcionada, sem perder o sentido.</p>
<div class="pr"><pre>Reescreva o texto abaixo para que fique [mais claro / mais curto / mais profissional / mais acolhedor].
Mantenha o sentido e as informações, retire o supérfluo, corrija os erros.
Dê a versão reescrita, depois em uma linha o que você mudou.

[cole seu texto aqui]</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "proponha 3 versões: neutra, entusiasmada, formal".</p>

<h3>13. Escrever um discurso</h3>
<p>Um texto feito para ser dito em voz alta: casamento, despedida, premiação.</p>
<div class="pr"><pre>Escreva um discurso de [duração] para [ocasião].
Eu me dirijo a [pessoa / público]. Tom: [emocionante / engraçado / sóbrio].
A incluir: [anedota, agradecimentos, mensagem-chave].
Escreva para ser LIDO em voz alta: frases curtas, respirações, sem palavras complicadas demais.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "me dê só o roteiro + uma abertura forte, eu redijo o resto".</p>

<h3>14. Gerar ideias de conteúdo</h3>
<p>Nunca mais ficar sem ideias para suas redes ou seu blog.</p>
<div class="pr"><pre>Eu crio conteúdo sobre [tema] para [plataforma].
Proponha 15 ideias de publicações que dão vontade de clicar, variadas (dica, erro comum, antes / depois, pergunta, bastidores).
Para cada uma: um título chamativo + o ângulo em uma linha.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "desenvolva a ideia nº [x] em um roteiro completo pronto para gravar".</p>

<h3>15. Montar um minisite pessoal</h3>
<p>Uma página de portfólio ou de evento, sem programar, textos incluídos.</p>
<div class="pr"><pre>Me explique, passo a passo, como criar um minisite pessoal (portfólio / página de evento) sem programar, com uma ferramenta como [Canva / Lovable].
Depois redija diretamente os textos das minhas páginas: início, sobre, contato, para [minha atividade]. Tom [profissional / pessoal].</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "gere os textos em português E em inglês".</p>

<h2>Para aprender</h2>

<h3>16. Ter um professor particular</h3>
<p>Uma aula sob medida sobre qualquer assunto, no seu ritmo.</p>
<div class="pr"><pre>Seja meu professor particular de [assunto]. Eu parto do [zero / nível].
Faça um plano em 5 etapas, depois comece a etapa 1: explique de forma simples, dê um exemplo concreto e me faça uma pergunta para verificar se entendi antes de passar adiante.</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "me explique como se eu tivesse 12 anos, com uma analogia do cotidiano".</p>

<h3>17. Fabricar um quiz de revisão</h3>
<p>Transformar uma matéria em quiz interativo para memorizar de verdade.</p>
<div class="pr"><pre>A partir do conteúdo abaixo, crie um quiz de 10 perguntas para revisar.
Misture questões de múltipla escolha e questões abertas, da mais fácil à mais difícil.
Faça-as UMA DE CADA VEZ, corrija minha resposta a cada vez, depois dê minha pontuação final e os pontos a retrabalhar.

[cole sua matéria aqui]</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "transforme isso em fichas frente / verso (pergunta de um lado, resposta do outro)".</p>

<h3>18. Traduzir e adaptar</h3>
<p>Uma tradução que soa natural, não um palavra-por-palavra robótico.</p>
<div class="pr"><pre>Traduza o texto abaixo para [idioma].
Não traduza palavra por palavra: adapte o tom e as expressões para que soe natural para um [público / país].
Mantenha o sentido e o nível de polidez, e sinalize as passagens intraduzíveis.

[cole o texto aqui]</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "me dê também a pronúncia simples das 5 frases mais úteis".</p>

<h3>19. Montar um planejamento de exercícios</h3>
<p>Um programa progressivo adaptado ao seu objetivo e ao seu equipamento.</p>
<div class="pr"><pre>Me faça um programa de exercícios de [número] semanas.
Objetivo: [perder peso / correr 10 km / ganhar músculo]. Nível: [iniciante].
Posso treinar [número] vezes por semana, [duração] por sessão, com [em casa / academia / equipamento].
Dê um planejamento semana a semana, progressivo e realista. (Vou validar com um profissional de saúde em caso de dúvida.)</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "preveja alternativas para os dias em que eu estiver com dor em algum lugar ou sem tempo".</p>

<h3>20. Transformar documentos em podcast</h3>
<p>Ouvir seus próprios documentos resumidos como um programa, graças ao NotebookLM.</p>
<div class="pr"><pre>[No NotebookLM, depois de importar meus documentos]
Gere um Audio Overview (podcast) em português que explica os pontos-chave das minhas fontes como uma conversa entre duas vozes.
Duração [curta / média], acessível a um iniciante, enfatizando [o que me interessa].</pre><button class="copy">Copiar</button></div>
<p><strong>Variante:</strong> "faça melhor um vídeo explicativo (Video Overview) ou um resumo escrito com as fontes".</p>

<div class="tip">💡 O único método a reter: <strong>copie o prompt, substitua os [colchetes]</strong> pela sua situação real, depois <strong>ajuste</strong> a resposta dialogando ("mais curto", "mude o tom", "refaça o ponto 2"). É normal reformular uma ou duas vezes — é aí que o resultado fica bom.</div>
`
};
