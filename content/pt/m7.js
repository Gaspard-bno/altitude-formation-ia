window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.pt.m7 = {
  title:"Claude Code & Codex: a IA que age na sua máquina",
  level:"Avançado",
  summary:"Além do chatbot: agentes que leem, escrevem e executam de verdade nos seus arquivos. O que é, como acessar sem ser desenvolvedor, e como manter o controle (e o orçamento).",
  html:`
<p>Até agora, a IA <em>respondia</em> a você. Aqui, ela <strong>age</strong>: abre seus arquivos, escreve código, roda scripts, organiza uma pasta, converte PDFs — na sua máquina de verdade, não numa janela de chat isolada. É um salto nítido, poderoso e um pouco vertiginoso. Este módulo é <strong>avançado e facultativo</strong>: se você está começando, pode deixá-lo para depois sem problema algum.</p>
<div class="obj"><b>Objetivo.</b> Entender o que é um "agente" que age no seu computador, ver em que ele difere de um chatbot, saber por qual porta entrar quando não se programa, e sair com o reflexo de segurança e o reflexo de custo que evitam surpresas ruins.</div>
<h2>O que é, na prática</h2>
<p>Claude Code (Anthropic) e Codex (OpenAI) são <strong>agentes de programação</strong>. Diga a eles o que fazer em português, e eles <strong>agem de verdade</strong>: ler e modificar arquivos, criar pastas, executar comandos, encadear várias etapas sozinhos até atingir o objetivo. Não são apenas ferramentas de programadores: eles também sabem renomear 200 fotos, extrair as tabelas de um PDF, limpar um arquivo Excel ou gerar um pequeno site.</p>
<p>No Claude, o "<strong>uso do computador</strong>" (computer use) está disponível desde agosto de 2026, e as funções <code>Cowork</code> e "Claude in Chrome" foram unificadas: a IA pode navegar, clicar, preencher — com, por padrão, uma <strong>confirmação solicitada antes de cada ação de alto impacto</strong>.</p>
<h2>A diferença em relação a um chatbot</h2>
<p>Um chatbot (o ChatGPT ou o Claude clássico) <strong>produz texto</strong>: ele diz o que fazer, você faz. Um agente <strong>faz</strong>: ele executa no seu lugar. A fronteira é fácil de sentir.</p>
<ul>
<li><strong>Chatbot</strong>: "Aqui está o script para colar num arquivo <code>renomear.py</code>, depois execute-o." → é <em>você</em> quem age.</li>
<li><strong>Agente</strong>: "Pronto: criei o arquivo, executei-o, suas 200 fotos estão renomeadas." → é <em>ele</em> quem agiu.</li>
</ul>
<p>Esse poder tem uma contrapartida: um agente também pode <strong>apagar, sobrescrever ou enviar</strong> de verdade. Daí os dois reflexos do fim do módulo.</p>
<div class="card">
<p>🎥 <strong>Demo em vídeo</strong>: [espaço reservado — screencast a inserir]</p>
<p>Nada substitui <em>ver</em> um agente trabalhar: a instrução digitada em português, os arquivos surgindo diante dos seus olhos, o pedido de confirmação antes de uma ação sensível. É o lugar ideal para uma captura de tela comentada.</p>
</div>
<h2>O "vibe coding"</h2>
<p>É a expressão da moda, e ela resume bem a ideia: você <strong>descreve o que quer em linguagem natural</strong>, a IA escreve (e muitas vezes executa) o código. "Faça uma página que lista meus clientes a partir deste arquivo Excel" — e aquilo se constrói sozinho. Você não escreve uma linha de código: você <strong>dirige</strong>.</p>
<p>A armadilha não é técnica, é prática: a gente se empolga, empilha os pedidos, e <strong>a fatura ou os limites sobem sem que a gente perceba</strong>. Voltaremos a isso mais abaixo.</p>
<h2>Como acessar</h2>
<ul>
<li><strong>Claude Code</strong> está <strong>incluído na assinatura Claude Pro (US$ 20/mês)</strong>. Nada a mais para pagar para começar: ele usa a sua janela de uso habitual.</li>
<li><strong>Codex</strong> (OpenAI) está <strong>incluído nos planos Free, Go, Plus e Pro</strong>, mas o consumo é <strong>cobrado em créditos / tokens</strong> (desde 02/04/2026): acima de certo uso, passa a ser pago por tarefa.</li>
</ul>
<div class="card hi"><p style="font-size:1.1rem;color:#fff"><strong>Você não programa? Não abra o terminal.</strong></p>
<p>Claude Code e Codex se usam, de origem, numa janela de comando preta — confuso para quem não é desenvolvedor. A entrada recomendada para quem não programa é a <strong>interface gráfica</strong>: <code>Claude Cowork</code>, integrado ao chat Claude. Você fala em português, vê o que acontece, valida as ações com um clique. Mesmo poder, zero linha de comando.</p></div>
<span class="step">Sua vez · 5 min</span>
<h3>Faça a ferramenta agir, com prudência</h3>
<p>No Claude Cowork (ou no Claude Code, se você estiver à vontade), peça uma ação <strong>pequena e sem perigo</strong>. Copie esta instrução:</p>
<div class="pr"><pre>Crie, em uma NOVA pasta de teste (chame-a de "caixa-de-areia"), um arquivo de texto chamado ola.txt que contenha a data de hoje e a frase "Primeiro teste de agente".
Antes de executar qualquer coisa, mostre-me primeiro o que você pretende fazer, passo a passo, e aguarde meu sinal verde.
Não toque em nenhum outro arquivo.</pre><button class="copy">Copiar</button></div>
<span class="step reveal">A instrução certa + o que verificar</span>
<p>Três coisas tornam esta instrução <strong>segura</strong>, e são sempre as mesmas:</p>
<ul>
<li><strong>Um perímetro fechado</strong>: "uma nova pasta de teste", "não toque em nenhum outro arquivo". O agente não pode avançar sobre seus documentos de verdade.</li>
<li><strong>Um ponto de validação</strong>: "mostre-me primeiro… aguarde meu sinal verde". Você relê o <em>plano</em> antes de qualquer execução.</li>
<li><strong>Uma ação reversível</strong>: criar um pequeno arquivo não destrói nada. Deixamos as ações sensíveis para quando já dominamos.</li>
</ul>
<p><strong>Antes de deixar a IA executar, verifique sempre:</strong></p>
<ol>
<li><strong>Quais arquivos / pastas</strong> a ação toca? Se o plano fala de uma pasta que você não reconhece, pare.</li>
<li><strong>É reversível?</strong> Criar, sim. <strong>Apagar, sobrescrever, enviar uma mensagem, publicar</strong>: não — exija uma confirmação explícita, ou faça você mesmo.</li>
<li><strong>Existe um backup?</strong> Antes de deixar um agente modificar arquivos importantes, tenha uma cópia. Um agente pode errar com confiança, exatamente como um chatbot.</li>
</ol>
<div class="tip">💰 <strong>Custos — ficar de olho.</strong> O Claude Code está incluído no Pro de US$ 20, mas uma sessão longa ou pesada pode <strong>esgotar sua janela de uso</strong> (e depois vem a espera); no Codex, o excedente <strong>passa para cobrança por crédito / token</strong>. O vibe coding dá vontade de emendar uma coisa na outra — fique de olho no seu consumo, trabalhe em pequenas tarefas delimitadas, e pare quando o objetivo for atingido em vez de "ver até onde vai".</div>
<div class="tip">💡 Para lembrar: este módulo é <strong>avançado e facultativo</strong>. Um iniciante faz muito bem 90% do que precisa com um simples chatbot. Volte a ele no dia em que uma tarefa repetitiva nos seus arquivos realmente fizer você perder tempo: é aí que o agente vira uma verdadeira alavanca.</div>
`
};
