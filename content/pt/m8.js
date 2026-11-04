window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.pt.m8 = {
  title:"Automatizar: a IA que trabalha enquanto você dorme",
  level:"Avançado",
  summary:"Como fazer tarefas repetitivas rodarem sozinhas: o princípio gatilho → etapas → ação, as três ferramentas (n8n, Zapier, Make), as tarefas agendadas dos assistentes, e 5 automações prontas para montar.",
  html:`
<p>Até agora, é você que abre a IA e fala com ela. Este módulo inverte a lógica: você monta uma única vez um pequeno "circuito" que se dispara e se executa sem você. É o nível avançado da formação — <strong>facultativo</strong>. Leia para entender o que é possível; só se lance quando uma tarefa realmente fizer você perder tempo toda semana.</p>
<div class="obj"><b>Objetivo.</b> Ao fim deste módulo, você sabe descrever qualquer automação em três blocos (gatilho, etapas, ação), você situa n8n, Zapier e Make uns em relação aos outros, e sai com um prompt que pede à IA que conceba o cenário no seu lugar.</div>

<h2>O princípio: gatilho → etapas → ação, em loop</h2>
<p>Toda automação, por mais sofisticada que seja, se lê da mesma forma:</p>
<ul>
<li><strong>Um gatilho</strong> — o evento que põe tudo em marcha: "chega um e-mail", "são 7h", "um formulário é preenchido", "uma fatura é paga".</li>
<li><strong>Etapas</strong> — o que acontece no meio: ler o conteúdo, pedir a uma IA que classifique / resuma / redija, filtrar segundo uma condição, ir buscar uma informação em outro lugar.</li>
<li><strong>Uma ação</strong> — o resultado concreto: enviar uma resposta, criar um documento, publicar um post, guardar uma linha numa tabela, notificar você.</li>
</ul>
<p>E tudo roda <strong>em loop</strong>: uma vez montado, o circuito se repete a cada disparo, sem você. A novidade de 2026 é que uma das etapas pode ser uma IA de verdade (ou mesmo um pequeno <em>agente</em> que decide o que fazer), não apenas um copiar-colar mecânico.</p>

<h2>As três ferramentas, da mais simples à mais poderosa</h2>
<div class="card"><p><strong>Zapier — a mais simples.</strong> 7 a 8.000+ aplicativos conectados, lógica "quando isto, então aquilo". Monta-se uma automação básica em alguns minutos sem instalar nada. A IA integrada dele continua leve, mas para o essencial das necessidades de um autônomo, já basta de sobra. <strong>Comece por aqui.</strong></p></div>
<div class="card"><p><strong>Make — o visual, nível intermediário.</strong> Conectam-se "módulos" num quadro visual; vê-se os dados circulando de uma bolha a outra. Mais liberdade que o Zapier para os cenários com condições e loops, com um bloco de IA (assistente e agentes) adicionado no início de 2026. Bom meio-termo quando o Zapier fica rígido demais.</p></div>
<div class="card"><p><strong>n8n — o mais poderoso.</strong> Dezenas de nós de IA, um nó "AI Agent", memória e RAG (consultar seus próprios documentos). Sobretudo, ele é <strong>auto-hospedável</strong>: você o instala no seu servidor, então seus dados não passam por ninguém — ideal para informações sensíveis. A contrapartida: ele exige <strong>competências de servidor</strong> (instalação, manutenção). A reservar para depois.</p></div>

<h2>Sem instalar nada: as tarefas agendadas dos assistentes</h2>
<p>Antes mesmo dessas ferramentas, seu assistente de IA já sabe automatizar coisas simples. ChatGPT e Claude podem executar uma instrução em horário fixo (tarefas agendadas, briefings proativos). O exemplo típico: o <strong>briefing matinal</strong> — todo dia às 7h, a IA prepara para você um resumo (agenda, notícias do seu setor, lembretes) entregue no app. Zero instalação, zero código: é a porta de entrada ideal para provar da automação.</p>

<h2>5 automações que um autônomo pode montar</h2>
<ol>
<li><strong>Triagem + resposta de e-mails.</strong> Gatilho: chega um e-mail. Etapas: a IA o classifica (orçamento, pergunta, spam, a acompanhar) e redige um rascunho de resposta adequado. Ação: o rascunho espera por você, você valida e envia. Você mantém o controle sobre o botão "enviar".</li>
<li><strong>Monitoramento + resumo diário.</strong> Gatilho: toda manhã. Etapas: recuperar as novidades de algumas fontes (sites, feeds, redes) e fazer a IA resumi-las. Ação: um resumo claro na sua caixa de e-mail ou no seu mensageiro.</li>
<li><strong>Publicação multirredes.</strong> Gatilho: você valida um conteúdo. Etapas: a IA o adapta ao formato de cada plataforma (tom, tamanho, hashtags). Ação: publicação (ou agendamento) no LinkedIn, Instagram, etc., com um só gesto.</li>
<li><strong>Orçamentos / faturas disparados.</strong> Gatilho: um cliente aceita uma oferta (formulário, caixa marcada, e-mail). Etapas: a IA preenche o modelo certo com as informações. Ação: o documento é gerado e pronto para enviar. Você sempre relê os valores antes de enviar.</li>
<li><strong>Chatbot RAG sobre seus próprios documentos.</strong> Gatilho: alguém faz uma pergunta (no seu site, ou para você). Etapas: a IA busca a resposta <strong>nos seus próprios documentos</strong> (ofertas, FAQ, procedimentos) em vez de nos conhecimentos gerais dela. Ação: uma resposta fiel à sua atividade. É o campo de jogo do n8n.</li>
</ol>

<div class="card"><p><strong>🎥 Demo em vídeo:</strong> [espaço reservado — screencast a inserir]</p></div>

<h2>Sua vez</h2>
<span class="step">Sua vez · tempo 1</span>
<h3>Descreva a sua tarefa chata</h3>
<p>Identifique uma tarefa que você refaz <strong>toda semana, sempre igual</strong> (responder às mesmas perguntas, publicar nos mesmos lugares, cobrar os mesmos clientes…). Escreva-a em <strong>uma única frase</strong>, como você a contaria para um amigo. Exemplo: "Toda segunda-feira, copio à mão os novos prospectos do formulário para a minha tabela de clientes."</p>
<span class="step reveal">Tempo 2 · divida-a, depois deixe a IA conceber o cenário</span>
<p>Primeiro, divida sua frase nas três caixas:</p>
<ul>
<li><strong>Gatilho</strong> — o que dá início a tudo? ("um formulário é preenchido")</li>
<li><strong>Etapas</strong> — o que fazer no meio? ("ler as informações, verificar que não é duplicata")</li>
<li><strong>Ação</strong> — qual resultado concreto? ("adicionar uma linha na tabela de clientes")</li>
</ul>
<p>Em seguida, copie este prompt na sua IA (trocando a tarefa pela sua): ela proporá o cenário completo, passo a passo, com a ferramenta adequada.</p>
<div class="pr"><pre>Você é um especialista em automação no-code (Zapier, Make, n8n).
Aqui está uma tarefa repetitiva que quero automatizar:
"[COLE AQUI A SUA FRASE]"

1. Reformule-a em forma de cenário claro: GATILHO, depois ETAPAS numeradas, depois AÇÃO final.
2. Indique em qual etapa uma IA é útil e o que eu devo pedir a ela exatamente.
3. Recomende UMA ferramenta entre Zapier, Make ou n8n, e explique em uma frase o porquê, para o meu nível (iniciante).
4. Liste os aplicativos/contas que eu precisarei conectar.
5. Aponte os pontos de atenção (dados sensíveis, etapa em que devo validar à mão).
Responda em português, de forma simples, sem jargão desnecessário.</pre><button class="copy">Copiar</button></div>

<div class="tip">💡 Dois reflexos antes de se lançar. Um: <strong>comece simples</strong> — monte sua primeira automação no Zapier ou Make antes de tocar no n8n; sobe-se os degraus nessa ordem. Dois: se a automação manipula <strong>dados sensíveis</strong> (clientes, informações confidenciais), prefira uma solução <strong>auto-hospedada</strong> como o n8n, para que nada saia da sua casa. E mantenha sempre um ponto de validação humana sobre o que sai para fora (e-mails, faturas, publicações).</div>
`
};
