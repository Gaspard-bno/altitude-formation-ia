window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.pt.m2 = {
  title:"Pensar em contexto, não em prompt",
  level:"Iniciante",
  summary:"A virada que muda tudo: parar de procurar a fórmula mágica, aprender a dar contexto. A receita RCOF, o master prompt, a técnica do questionário, e o perfil que se ajusta de uma vez por todas.",
  html:`
<p>Este é o módulo mais importante da formação. A maioria das pessoas acha que existem "prompts mágicos" secretos. Não existem. O que faz a diferença entre uma resposta medíocre e uma resposta excelente não é uma fórmula: é o <strong>contexto</strong> que você fornece.</p>
<div class="obj"><b>Objetivo.</b> Ao final deste módulo, você saberá transformar qualquer pedido vago em uma instrução clara com a receita RCOF, terá um master prompt reutilizável, e terá ajustado seu perfil uma única vez para que a IA te conheça em todo lugar.</div>

<h2>A virada mental</h2>
<p>Uma IA não lê seus pensamentos. Ela só trabalha com o que você coloca na mensagem. Se você escreve "me faça um e-mail", ela tem que <em>adivinhar</em> o destinatário, o tom, o objetivo, o tamanho. Ela adivinha mal, e você fica decepcionado.</p>
<p>O reflexo do iniciante: reformular várias e várias vezes, procurando a frase certa. O reflexo do profissional: <strong>acrescentar contexto</strong>. Quem fala, para quem, para obter o quê, de que forma. Um pedido banal com um bom contexto sempre vence uma "fórmula mágica" sem contexto.</p>
<div class="card hi"><p><strong>Para lembrar: uma resposta medíocre quase nunca é culpa da IA. É uma falta de contexto.</strong></p>
<p>Antes de reclamar de uma resposta fracassada, pergunte-se: eu teria conseguido responder ao meu próprio pedido sem adivinhar nada? Se não, a IA também não.</p></div>

<h2>A receita RCOF</h2>
<p>Para nunca mais ficar diante da página em branco, uma única receita para memorizar. Quatro letras: <strong>R.C.O.F.</strong></p>
<div class="card"><p><strong>R — Papel (Rôle).</strong> Quem a IA deve encarnar? "Você é um gerente de banco", "Você é um professor de matemática paciente". O papel orienta o vocabulário e o nível.<br>
<strong>C — Contexto.</strong> A situação, as restrições, o que é preciso saber. "Estou escrevendo a um cliente insatisfeito que espera o pedido dele há 3 semanas."<br>
<strong>O — Objetivo.</strong> O resultado esperado, preciso. "Tranquilizá-lo e propor um gesto comercial, sem prometer uma data."<br>
<strong>F — Formato.</strong> A forma de saída. "Um e-mail de 8 linhas, tom caloroso, tratamento informal, com um assunto."</p></div>
<p>Nem sempre precisamos dos quatro. Mas quanto mais alto o risco, mais você os preenche.</p>

<h3>Antes / depois</h3>
<p><strong>Antes (sem RCOF):</strong> <code>Escreva um post para anunciar minha formação.</code> → a IA produz um texto genérico, sem graça, que poderia vender qualquer coisa.</p>
<p><strong>Depois (com RCOF):</strong></p>
<div class="pr"><pre>Você é um copywriter especializado em redes sociais (PAPEL).
Estou lançando uma formação online para iniciantes que querem aprender a usar a IA no dia a dia, sem jargão. Meu público tem entre 30 e 55 anos e muitas vezes se sente perdido com a parte técnica (CONTEXTO).
Objetivo: dar vontade de se inscrever, tranquilizando sobre o fato de que é acessível (OBJETIVO).
Formato: um post de LinkedIn de no máximo 120 palavras, tom caloroso e direto, uma chamada forte na primeira linha, sem emoji, termine com um chamado à ação claro (FORMATO).</pre><button class="copy">Copiar</button></div>
<p>Mesma IA, mesmo assunto. A única diferença é o contexto. E o resultado não tem nada a ver.</p>

<h2>O master prompt (e o ultra prompt)</h2>
<p>Um <strong>master prompt</strong> é um prompt rico e completo que você mantém à mão e readapta a cada vez, em vez de recomeçar do zero. Um <strong>ultra prompt</strong> vai ainda mais longe: ele acrescenta exemplos, restrições negativas ("não faça de jeito nenhum X") e critérios de qualidade. Quanto mais detalhado, mais preciso.</p>
<p>Aqui está um master prompt genérico. Cole-o, depois substitua os colchetes pela sua situação. Guarde-o em uma nota, é o seu modelo para a vida toda.</p>
<div class="pr"><pre>Você é [PAPEL: ex. um redator profissional / um consultor / um professor].

Contexto: [descreva sua situação, sua profissão, seu público, as restrições importantes].

Sua missão: [o que você quer obter, precisamente].

Formato de resposta: [tamanho, tom, idioma, estrutura esperada].

Restrições: [o que NÃO se deve fazer].

Antes de redigir, se faltar alguma informação para você fazer um trabalho muito bom, me faça as perguntas necessárias. Caso contrário, me proponha primeiro um plano em 3 pontos, depois aguarde meu sinal verde.</pre><button class="copy">Copiar</button></div>

<h2>A técnica das MAIÚSCULAS</h2>
<p>Uma palavra escrita em maiúsculas atrai a atenção do modelo: ela pesa mais na instrução. Use-a com parcimônia, no que realmente importa.</p>
<ul>
<li><code>Responda SOMENTE em português.</code></li>
<li><code>Máximo de 5 linhas. NUNCA mais.</code></li>
<li><code>Não dê NENHUM número que você não tenha certeza de conhecer.</code></li>
</ul>
<p>Se você colocar tudo em maiúsculas, nada mais se destaca. Reserve-as para 2 ou 3 palavras-chave por prompt.</p>

<h2>A técnica do questionário</h2>
<p>É a técnica que faz um iniciante parecer um especialista. Quando sua necessidade é vaga, ou quando você mira a perfeição, não peça logo de cara o resultado. Peça primeiro à IA para <strong>te fazer perguntas</strong>.</p>
<div class="pr"><pre>Eu preciso de [descreva sua necessidade em uma frase].
Antes de produzir qualquer coisa, me faça de 5 a 10 perguntas, uma a uma ou em lista numerada, para entender exatamente do que eu preciso: objetivo, público, tom, restrições, exemplos a evitar.
Quando eu tiver respondido, me faça uma proposta.</pre><button class="copy">Copiar</button></div>
<p>É contraintuitivo mas terrível de eficaz: você deixa a IA construir o contexto com você, em vez de adivinhar tudo sozinho. É o princípio "uma IA que fala com uma IA" — usamos o modelo para interrogar a si mesmo e esclarecer o pedido antes de executar. Você responde às perguntas dele, e a resposta final é feita sob medida.</p>

<h2>Ajustar-se de uma vez por todas</h2>
<p>Reescrever seu contexto a cada conversa é exaustivo. As grandes IAs permitem salvá-lo de uma vez por todas. Três alavancas para conhecer:</p>
<div class="card"><p><strong>Instruções personalizadas.</strong> Um espaço nas configurações onde você descreve quem você é, o que você faz, como quer que respondam a você. A IA reaplica isso em todas as suas conversas.<br>
<strong>Memória.</strong> A IA retém fatos sobre você ao longo das trocas (tanto no Claude quanto no ChatGPT, ativável nas configurações). Você pode consultá-la, corrigi-la, apagá-la.<br>
<strong>Projects / Projetos.</strong> Espaços dedicados a um assunto (um cliente, um curso, um produto) com suas próprias instruções e arquivos. Tudo o que você faz ali herda esse contexto.</p></div>
<div class="tip">💡 Privacidade: o que você coloca nas instruções ou na memória vai para os servidores do fornecedor. Nunca coloque ali senhas, dados médicos ou dados sensíveis de clientes. Voltamos a isso no módulo de confidencialidade.</div>

<span class="step">Sua vez · 3 min · exercício 1</span>
<h3>Peça um e-mail</h3>
<p>Abra sua IA e escreva, ingenuamente, como você faria espontaneamente:</p>
<div class="pr"><pre>Me escreva um e-mail para remarcar uma reunião.</pre><button class="copy">Copiar</button></div>
<p>Leia a resposta. Ela está correta… mas vazia: ela não sabe nem para quem, nem por quê, nem para quando.</p>
<span class="step reveal">O mesmo, com RCOF</span>
<p>Agora, tente de novo com contexto. Adapte os colchetes à sua situação real:</p>
<div class="pr"><pre>Você é meu assistente pessoal (PAPEL).
Preciso remarcar uma reunião profissional com [nome], prevista para [dia/hora], porque um imprevisto me impede. Nós nos tratamos de forma informal e a relação é cordial (CONTEXTO).
Objetivo: propor educadamente dois novos horários e me desculpar sem exagerar (OBJETIVO).
Formato: um e-mail curto (6 linhas no máximo), tom caloroso mas profissional, com um assunto. Responda SOMENTE o e-mail, nada mais (FORMATO).</pre><button class="copy">Copiar</button></div>
<p>Compare os dois. Você acabou de ver, ao vivo, que o contexto faz 90% do trabalho.</p>

<span class="step">Sua vez · 5 min · exercício 2</span>
<h3>Redija seu perfil</h3>
<p>Em 4 linhas, na sua IA, descreva-se: sua profissão, seu público, como você gosta que respondam a você. Não busque a perfeição, jogue a ideia no papel.</p>
<span class="step reveal">O perfil completo para colar nas suas instruções personalizadas</span>
<p>Use a IA para fabricar um perfil limpo. Cole este prompt, responda às perguntas dele, depois copie o resultado em <strong>Configurações → Instruções personalizadas</strong>:</p>
<div class="pr"><pre>Me ajude a redigir meu perfil para as suas instruções personalizadas.
Me faça primeiro 6 perguntas, uma a uma, para entender: minha profissão, meu público, meus projetos em andamento, meu nível em IA, o tom que eu prefiro, e o que você deve SEMPRE ou NUNCA fazer quando responde para mim.
Quando eu tiver respondido, redija um perfil claro na primeira pessoa, em menos de 150 palavras, pronto para colar nas configurações.</pre><button class="copy">Copiar</button></div>
<div class="tip">💡 Uma vez salvo esse perfil, cada nova conversa já começa com o seu contexto. Você acabou de ajustar, em 5 minutos, um conforto que vai manter por anos.</div>
`
};
