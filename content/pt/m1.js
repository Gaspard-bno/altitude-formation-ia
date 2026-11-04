window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.pt.m1 = {
  title:"Quem faz o quê em outubro de 2026",
  level:"Iniciante",
  summary:"O panorama claro dos assistentes de IA para o grande público: o ponto forte de cada um, qual ferramenta para qual tarefa, e como escolher sem cair nas armadilhas das versões e dos preços que mudam.",
  html:`
<p>Existe cerca de uma dezena de assistentes de IA sérios, e cada um tem uma musiquinha própria. Não é preciso conhecer todos. Este módulo te dá o mapa do terreno em 20 de outubro de 2026, e depois um método simples para escolher o seu e não errar.</p>
<div class="obj"><b>Objetivo.</b> Ao final deste módulo, você situa os grandes assistentes e seus pontos fortes, sabe qual ferramenta abrir para qual tarefa, e escolheu uma combinação de partida: um assistente principal + uma solução "cofre-forte" para o que é sensível.</div>

<h2>Os assistentes, em uma linha cada</h2>
<p>Para cada um: o que ele faz melhor, e quando abri-lo. (Versões e preços em 20/10/2026 — voltamos a isso logo depois.)</p>
<div class="card"><p>
<strong>Claude (Anthropic)</strong> — família Claude 5 (Opus, Sonnet, Haiku, mais Fable no lado criativo), memória de leitura muito grande. Excelente para redigir textos longos, raciocinar, trabalhar com documentos grandes e agir sobre seus arquivos. <em>Quando:</em> redação caprichada, análise de dossiês.<br>
<strong>ChatGPT (OpenAI)</strong> — a família GPT-6 chegou em setembro de 2026; o nome exato do modelo padrão ainda está incerto (a verificar). O mais versátil, ecossistema muito bom. <em>Quando:</em> canivete suíço do dia a dia, primeiros passos.<br>
<strong>Gemini (Google)</strong> — Gemini 3.x, integrado ao Gmail, Docs e Sheets. <em>Quando:</em> você já vive dentro das ferramentas Google.<br>
<strong>Le Chat (Mistral)</strong> 🇫🇷 — assistente francês, servidores na Europa, LGPD/RGPD. <em>Quando:</em> você quer um player europeu (nuançamos a parte de confidencialidade mais abaixo).<br>
<strong>Grok (xAI)</strong> — integrado ao X, tom direto, acesso às notícias da rede. <em>Quando:</em> monitoramento no X, respostas descontraídas.<br>
<strong>Perplexity</strong> — especialista em busca <strong>com fontes</strong>: ele responde citando os links. <em>Quando:</em> você quer fontes verificáveis.<br>
<strong>Copilot (Microsoft)</strong> — fundido ao Microsoft 365, portanto presente no Word, Excel, Outlook. <em>Quando:</em> você trabalha o dia todo dentro do Office.</p></div>

<div class="card hi"><p style="font-size:1.1rem;color:#fff"><strong>⚠️ Isso muda muito rápido.</strong></p>
<p>As versões, os nomes e os preços citados aqui são os de <strong>20/10/2026</strong>. Esse mercado muda todo mês: um modelo "padrão" pode mudar, um preço pode dobrar, uma oferta pode desaparecer. <strong>Antes de pagar qualquer coisa, verifique na página oficial do fornecedor.</strong> Nunca confie em um número lido em um vídeo ou em um artigo (mesmo neste).</p></div>

<h2>Qual ferramenta para qual tarefa</h2>
<p>Uma referência rápida. Nenhuma é "a melhor" em termos absolutos: depende do que você faz.</p>
<div class="card"><p>
<strong>Redigir / reformular</strong> → Claude ou ChatGPT.<br>
<strong>Resumir um PDF grande</strong> → Claude (ele lê muito texto de uma vez) ou Gemini.<br>
<strong>Busca com fontes</strong> (com os links) → Perplexity; ChatGPT e Gemini também sabem citar.<br>
<strong>Criar imagens</strong> → ferramentas dedicadas (vistas no módulo de Criação); ChatGPT e Gemini também fazem, de forma correta.<br>
<strong>No Word / Excel / Outlook</strong> → Copilot. No Gmail / Docs / Sheets → Gemini.<br>
<strong>Dossiê confidencial</strong> → jamais a conta gratuita para o grande público. Veja logo abaixo.</p></div>

<h2>Confidencialidade: a verdade e o mito</h2>
<p>Um mito persistente circula: "a Mistral é francesa, então meus dados estão seguros por padrão". <strong>Isso precisa ser nuançado.</strong> Ser uma empresa francesa e respeitar o RGPD é uma vantagem real. Mas em 20/10/2026, uma atualização dos termos deles teria alterado o treinamento nas ofertas pagas 🟡 — esse ponto não está confirmado por uma página oficial, portanto <strong>a verificar antes de confiar</strong>. A nacionalidade de uma ferramenta não faz, sozinha, um cofre-forte.</p>
<p>Duas ideias para ter em mente:</p>
<ul>
<li><strong>"Não treinar com meus dados" não é "confidencial".</strong> Isso impede um uso futuro para o treinamento, mas suas trocas transitam mesmo assim pelos servidores do fornecedor e ficam armazenadas ali por um tempo.</li>
<li><strong>O verdadeiro "cofre-forte"</strong> é ou uma conta <strong>Business / Equipe / API</strong> — essas ofertas geralmente não são treinadas com seus dados —, ou uma <strong>IA 100% local</strong> que roda no seu computador e de onde nada sai: <code>Ollama</code> (em linha de comando) ou <code>LM Studio</code> (interface simples). Voltaremos a isso.</li>
</ul>
<div class="tip">💡 Regra simples: nunca senhas, dados médicos, nem dados de clientes em um chat de IA para o grande público. Para esses casos, conta profissional não treinada ou IA local.</div>

<h2>Por onde começar</h2>
<div class="card hi"><p style="color:#fff">Não tente instalar tudo. Para começar, <strong>uma combinação de duas basta</strong>:</p>
<p><strong>1 assistente principal</strong> — ChatGPT ou Claude. É ele que você abre por reflexo, todos os dias. Escolha um, aprenda-o a fundo.<br>
<strong>1 solução "cofre-forte"</strong> — para tudo o que for sensível: uma conta profissional não treinada, ou uma IA local (Ollama / LM Studio).</p></div>
<p>Você adicionará os outros depois, só se surgir uma necessidade específica (busca com fontes, vida dentro do Office…). Melhor dominar bem uma ferramenta do que passar por cima de cinco.</p>

<span class="step">Sua vez · 6 min</span>
<h3>Ponha duas IAs para trabalhar na mesma tarefa</h3>
<p>A melhor forma de sentir as diferenças é comparar. Abra <strong>dois assistentes</strong> (por exemplo ChatGPT e Claude), e dê <strong>exatamente o mesmo prompt</strong> aos dois:</p>
<div class="pr"><pre>Você é meu assistente. Redija um e-mail curto e caloroso para cobrar educadamente um cliente que não respondeu a um orçamento enviado há 10 dias. Tom profissional mas humano, no máximo 120 palavras, em português. Termine com uma pergunta simples que facilite a resposta.</pre><button class="copy">Copiar</button></div>
<p>Leia os dois resultados. Qual deles te dá vontade de enviar do jeito que está? Qual soa mais "você"?</p>

<span class="step reveal">O que era preciso notar</span>
<p>Você acabou de fazer seu primeiro teste comparativo. Aqui está a grade de leitura para comparar quaisquer ferramentas:</p>
<ul>
<li><strong>O tom.</strong> Alguns modelos escrevem de forma mais calorosa, outros mais direta. É o critério nº 1 para um e-mail ou um post.</li>
<li><strong>O respeito à instrução</strong> (tamanho, formato, idioma). Um bom modelo mantém o enquadramento; outro extrapola.</li>
<li><strong>A verificabilidade.</strong> Assim que há fatos, prefira aquele que cita suas fontes (Perplexity, ou ChatGPT/Gemini em modo de busca).</li>
<li><strong>O conforto.</strong> Velocidade, interface, integração às suas ferramentas: conta tanto quanto a "qualidade" bruta.</li>
</ul>
<p>Dica de profissional: em vez de decidir você mesmo, <strong>faça uma IA julgar a outra</strong>. Uma IA que dialoga com uma IA frequentemente faz melhor do que um humano que fala sozinho com uma IA. Cole as duas respostas em um terceiro chat com este prompt:</p>
<div class="pr"><pre>Aqui estão duas versões de um mesmo e-mail de cobrança a um cliente. Compare-as segundo 4 critérios: tom, respeito à instrução (120 palavras, caloroso, uma pergunta final), clareza, e probabilidade de obter uma resposta. Dê um vencedor por critério, depois proponha uma versão final que aproveite o melhor das duas.

VERSÃO A:
[cole aqui a resposta do 1º assistente]

VERSÃO B:
[cole aqui a resposta do 2º assistente]</pre><button class="copy">Copiar</button></div>
<div class="tip">💡 Necessidade vaga? Não adivinhe o prompt certo: peça à IA que te faça perguntas. "Antes de responder, me faça de 3 a 5 perguntas para entender bem minha necessidade." É a técnica do questionário — nós a aprofundamos no próximo módulo.</div>
`
};
