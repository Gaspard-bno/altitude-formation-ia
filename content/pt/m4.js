window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.pt.m4 = {
  title:"Criar: imagem, vídeo, voz, slides e sites",
  level:"Intermediário",
  summary:"As ferramentas certas para fabricar imagens nítidas, vídeos convincentes, vozes, apresentações e até sites — e o método que muda tudo: deixar a IA escrever o prompt.",
  html:`
<p>Você já sabe conversar com a IA. Agora passamos à fabricação: imagens, vídeos, vozes, slides, sites. Cada família tem suas ferramentas de referência (situação em 20/10/2026) e, acima de tudo, um método. O mais importante cabe em uma frase: <strong>quanto mais complexa a mídia, mais cabe à IA escrever o prompt, não a você</strong>.</p>
<div class="obj"><b>Objetivo.</b> No final, você sabe qual ferramenta abrir para cada necessidade, redige (ou manda redigir) um prompt que se sustenta e evita o famoso "efeito IA" que denuncia um conteúdo malfeito.</div>

<h2>Imagem: 4 ferramentas, 4 usos</h2>
<p>Não existe um "melhor" gerador, existe a ferramenta adequada à sua necessidade. As quatro que importam hoje:</p>
<div class="card"><p><strong>Nano Banana Pro</strong> (Google, no app Gemini) — A referência quando é preciso ter <strong>texto legível na imagem</strong> (cartaz, post, visual com slogan) e um resultado profissional. Gratuito com marca-d'água no Gemini.<br>
<strong>Midjourney</strong> — a estética mais caprichada, para visuais "bonitos" e artísticos. Assinatura de 10 a 120 $, texto na imagem fraco.<br>
<strong>Ideogram</strong> — especialista em <strong>tipografia</strong> e logos textuais.<br>
<strong>FLUX.2</strong> — boa relação custo/benefício, e sua versão "klein" é <strong>open-weight</strong>: instalável na sua máquina, nada vai para a nuvem.</p></div>
<div class="tip">💡 Gratuito vs pago: o gratuito basta para testar e aprender (muitas vezes com marca-d'água ou cota diária). O pago serve quando você produz para um cliente: mais resolução, sem marca-d'água e, sobretudo, um enquadramento de direitos mais claro.</div>

<span class="step">Sua vez · 4 min</span>
<h3>Gere uma imagem precisa</h3>
<p>Abra um gerador de imagens e peça a ele, em uma frase simples e espontânea, "uma foto de um café pela manhã". Olhe o resultado. Depois tente obter <em>exatamente</em> a imagem que você tinha em mente. Você vai ter que tatear — é proposital.</p>

<span class="step reveal">O prompt certo</span>
<p>Um prompt de imagem sólido responde a 5 perguntas: <strong>sujeito, estilo, enquadramento, luz e o que NÃO deve aparecer</strong>. Compare a sua tentativa com esta:</p>
<div class="pr"><pre>Uma xícara de café fumegante apoiada numa mesa de madeira clara, perto de uma janela.
Estilo: fotografia, lente 50mm, baixa profundidade de campo (fundo desfocado).
Enquadramento: close-up levemente em plongée.
Luz: suave, matinal, entrando pela janela à esquerda.
Clima: calmo, acolhedor.
A evitar: ninguém no quadro, texto, logo, cores saturadas, aspecto 3D ou cartoon.</pre><button class="copy">Copiar</button></div>
<p>A diferença não é o talento: é a <strong>precisão</strong>. "O que não deve aparecer" muitas vezes é o que salva a imagem (o famoso resultado "plástico" quase sempre vem de um prompt vago demais).</p>

<h2>Vídeo: deixe a IA escrever o prompt</h2>
<p>O vídeo é a mídia mais difícil: é preciso descrever um movimento, uma câmera, um ritmo, às vezes um som. Um prompt de vídeo bem-sucedido é longo, técnico e preciso — exatamente o tipo de texto que a gente erra quando está começando. Daí o princípio central deste módulo:</p>
<div class="card hi"><p style="font-size:1.15rem;color:#fff"><strong>Não redija o prompt de vídeo você mesmo. Mande uma IA de texto escrevê-lo.</strong></p>
<p>Você descreve sua ideia em português simples para o ChatGPT, Claude ou Gemini; <em>ele</em> a transforma em prompt estruturado para a ferramenta de vídeo. É mais rápido, mais completo, e o resultado é nitidamente melhor.</p></div>

<p>As ferramentas de referência hoje:</p>
<ul>
<li><strong>Google Veo 3.1 / Flow</strong> — frequentemente considerado o melhor no geral, com <strong>áudio nativo</strong> (ele gera o som junto com a imagem).</li>
<li><strong>Kling 3.0</strong> — a melhor relação preço/segundo, clipes de 10-15 s.</li>
<li><strong>Seedance</strong> — áudio e vídeo juntos, lip-sync multilíngue.</li>
<li><strong>Higgsfield</strong> — um <strong>agregador</strong>: uma única assinatura (pool de créditos) para acessar mais de 50 modelos e comparar.</li>
</ul>
<div class="tip">⚠️ <strong>Sora 2 da OpenAI</strong> é apontado como descontinuado por várias fontes (não confirmado oficialmente): não conte com ele por enquanto, verifique antes de assinar.</div>

<span class="step">Sua vez · 3 min</span>
<h3>Mande redigir seu prompt de vídeo</h3>
<p>Abra o ChatGPT (ou Claude, Gemini) e cole isto — substituindo apenas a ideia entre colchetes:</p>
<div class="pr"><pre>Você é especialista em geração de vídeo por IA. Quero criar um clipe curto com o Veo.
Minha ideia: [um drone sobrevoando uma costa da Bretanha ao nascer do sol].
Redija para mim um prompt de vídeo completo e pronto para colar, especificando:
- o sujeito e a ação principal,
- o movimento de câmera (travelling, plano fixo, drone...),
- a luz e o clima,
- o estilo visual (cinematográfico, documental...),
- a duração visada (clipe curto, 5 a 8 segundos),
- o que evitar (texto na tela, deformações, transições bruscas).
Me dê APENAS o prompt final, em inglês, pronto para copiar.</pre><button class="copy">Copiar</button></div>

<span class="step reveal">Por que funciona</span>
<p>Você acaba de delegar a parte técnica a uma IA que a domina, mantendo o controle sobre a ideia. É a boa divisão do trabalho: <strong>você = a intenção, a IA = a formulação especialista</strong>. Você não precisa mais conhecer o jargão "travelling" ou "profundidade de campo": você pede.</p>
<div class="card"><p><strong>O "efeito IA" no vídeo</strong> — três reflexos para evitá-lo:</p>
<ul>
<li>Vise <strong>clipes curtos</strong> (5-8 s). Quanto mais longo, mais os defeitos aparecem (mãos, rostos, objetos que se deformam).</li>
<li>Capriche no prompt (você acabou de fazê-lo): um prompt rico = menos erros.</li>
<li>Aceite <strong>refazer várias vezes</strong>. Conte de 3 a 5 tentativas para 1 clipe aproveitável — é normal, inclua isso no orçamento.</li>
</ul></div>

<h2>Voz e áudio</h2>
<div class="card"><p><strong>ElevenLabs</strong> — a referência para a voz sintética (narração, voz off). Gratuito ~10 000 créditos/mês, depois pago a partir de 6 $.<br>
<strong>Suno / Udio</strong> — para gerar música a partir de uma descrição.</p></div>
<div class="tip">⚠️ <strong>Direitos comerciais.</strong> O gratuito muitas vezes é <strong>sem direitos de uso comercial</strong>: perfeito para testar, proibido para um vídeo de cliente ou uma publicidade. No Suno, por exemplo, os direitos só vêm com a oferta paga. Verifique sempre antes de publicar.</div>

<h2>Slides, docs e sites — sem programar</h2>
<p>A IA não serve só para imagem: ela também fabrica seus materiais profissionais.</p>
<div class="card"><p><strong>Gamma</strong> — você escreve um tema, ele gera uma apresentação completa (deck). Gratuito na versão limitada (com marca-d'água).<br>
<strong>Canva IA</strong> — o melhor uso gratuito no dia a dia para visuais, posts e docs.<br>
<strong>Lovable / v0</strong> — você descreve um site ou um pequeno aplicativo, a IA o escreve e coloca no ar, <strong>sem que você programe</strong>. Conte com ~25-30 $/mês no pago.</p></div>

<span class="step">Sua vez · 2 min</span>
<h3>Um deck em uma frase</h3>
<p>Abra o Gamma e cole:</p>
<div class="pr"><pre>Crie uma apresentação de 6 slides para apresentar minha atividade a um novo cliente.
Tema: [descreva sua atividade em uma frase].
Tom: profissional e acolhedor. Público: dirigente não técnico.
Estrutura: quem sou eu, o problema que resolvo, meu método, 2 exemplos, a oferta, como me contatar.
Idioma: português.</pre><button class="copy">Copiar</button></div>
<span class="step reveal">O que reter</span>
<p>Você obtém um rascunho em 30 segundos. Como sempre: <strong>a IA faz o rascunho, você mantém o julgamento</strong> — a gente relê, corrige os fatos, ajusta o tom. Nunca uma entrega bruta.</p>

<h2>O enquadramento legal, em uma linha</h2>
<div class="card hi"><p style="color:#fff">Desde 2 de agosto de 2026, o <strong>AI Act</strong> (Art. 50) obriga a <strong>sinalizar um conteúdo gerado por IA</strong> em certos casos (notadamente os deepfakes). Não é uma obrigação de rotular tudo o que você cria, mas uma regra para conhecer assim que você publica.</p>
<p>O detalhe (direitos autorais, menções, uso comercial) é tratado no <strong>módulo business</strong>. Aqui, retenha apenas o reflexo: conteúdo enganoso ou deepfake = a gente sinaliza.</p></div>

<div class="tip">💡 A reter do módulo: uma ferramenta por necessidade (texto na imagem → Nano Banana Pro; estética → Midjourney; vídeo → Veo/Kling + prompt escrito pela IA; voz → ElevenLabs; deck → Gamma). E a regra que vale para tudo: teste no gratuito, verifique os direitos antes de publicar, aceite várias tentativas.</div>
`
};
