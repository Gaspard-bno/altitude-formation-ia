window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.pt.m10 = {
  title:"Estratégia: multimodelos, custos e segurança",
  level:"Intermediário",
  summary:"Como parar de pedir tudo a uma única IA, montar um orçamento mensal esperto, proteger seus dados e evitar as 10 armadilhas que arruínam 90% dos iniciantes. O resumo que conecta todos os módulos.",
  html:`
<p>Agora você já sabe conversar com uma IA, gerar texto, imagens, automatizar tarefas. Este módulo não acrescenta nenhuma ferramenta: ele ensina você a <strong>jogar o jogo com inteligência</strong>. Qual modelo usar em cada momento, quanto gastar, o que nunca colar e os erros que não se deve cometer. É o reflexo estratégico que separa o amador que se esgota do usuário que avança.</p>
<div class="obj"><b>Objetivo.</b> Ao final deste módulo, você terá o seu próprio trio de ferramentas (uma principal, uma pesquisadora, um cofre), um orçamento mensal decidido com base em fatos e não na vontade, os bons reflexos de privacidade e uma checklist para reler antes de cada uso sério.</div>

<h2>1. Uma única IA é bom. Várias é melhor.</h2>
<p>Nenhuma IA é a melhor em tudo. Cada uma tem sua personalidade, seus pontos fortes, seus pontos cegos. Prender-se a uma única ferramenta é aceitar suas fraquezas em todas as suas tarefas. A boa estratégia não é "qual escolher", mas "qual em cada momento".</p>
<p>A armadilha inversa também existe: acumular dez contas que você nunca abre. A regra saudável cabe em <strong>três papéis</strong>, não em dez assinaturas.</p>
<div class="card"><p><strong>A principal do dia a dia</strong> — aquela que você abre por reflexo para redigir, resumir, refletir, programar um pouco. Aquela cuja interface já se tornou natural para você. 80% do seu uso passa por ela.<br>
<strong>A especialista em pesquisa</strong> — para uma pergunta que exige fontes verificáveis e recentes, usa-se uma ferramenta de pesquisa com fontes (tipo Perplexity, ou um modo Deep Research). Boa prática: <strong>combinar duas ferramentas</strong>, uma para encontrar e apontar as fontes, outra para redigir com capricho.<br>
<strong>O cofre confidencial</strong> — para tudo o que for sensível, uma IA 100% local ou uma conta não treinada (ver seção 3). Nunca se coloca ali o que não pode sair.</p></div>
<div class="tip">💡 Trocar de ferramenta conforme a tarefa não é dispersão: é exatamente o que os profissionais fazem. O reflexo "qual é a natureza da minha tarefa?" deve vir antes de "qual IA eu abro?".</div>

<h2>2. Montar um orçamento mensal esperto</h2>
<p>O medo de "gastar demais com assinaturas de IA" é legítimo, mas se resolve com um método simples, não ficando frustrado no gratuito.</p>
<span class="step">A lógica em 3 tempos</span>
<ol>
<li><strong>Comece pelo gratuito.</strong> As ofertas gratuitas (Claude, ChatGPT, Gemini, Mistral) bastam de sobra para aprender e para um uso ocasional. Não pague nada enquanto estiver descobrindo.</li>
<li><strong>Pague os US$ 20/mês quando usar todos os dias.</strong> O marco é claro: <strong>assim que a ferramenta vira um reflexo diário, o plano pago (~US$ 20/mês) passa a valer a pena</strong> — modelos mais potentes, menos bloqueios, funções avançadas. Abaixo de um uso diário, o gratuito basta.</li>
<li><strong>Não acumule assinaturas.</strong> Um único plano pago na sua ferramenta principal cobre a imensa maioria das necessidades. Só adicione uma segunda assinatura se uma tarefa precisa e repetida justificar (ex.: pesquisa com fontes intensiva, geração de imagens profissional).</li>
</ol>
<div class="card hi"><p style="font-size:1.1rem;color:#fff"><strong>O marco a guardar</strong></p>
<p>Gratuito = eu descubro ou uso de vez em quando. Pago (~US$ 20) = eu uso todos os dias. Uma assinatura que dorme = dinheiro jogado fora. Decida com base no seu uso real do mês passado, não na promessa da página de vendas.</p></div>

<h2>3. Segurança e privacidade: a armadilha do opt-out</h2>
<p>É o assunto mais mal compreendido, e o mais arriscado para quem trabalha com dados reais.</p>
<div class="card"><p><strong>"Opt-out de treinamento" NÃO quer dizer "privado".</strong> Marcar a caixa que recusa o treinamento bloqueia apenas o uso <strong>futuro</strong> das suas conversas para treinar o modelo. Seus dados <strong>transitam e são armazenados mesmo assim</strong> nos servidores da empresa (retenção de alguns dias a várias semanas). Tudo passa pela nuvem: texto, arquivo, imagem, voz, tela.</p></div>
<p>Os verdadeiros refúgios, quando o dado é sensível:</p>
<ul>
<li><strong>Contas Business / Team / API</strong> — em geral <strong>não treinadas por padrão</strong>, pensadas para o uso profissional. É o nível certo para dados de empresa ou de clientes.</li>
<li><strong>IA 100% local</strong> — com o <strong>Ollama</strong> (linha de comando) ou o <strong>LM Studio</strong> (interface gráfica), o modelo roda na sua máquina e <strong>nada sai</strong>. No fim de 2026, o nível é muito bom em hardware de consumo (16 GB de RAM para os modelos pequenos, uma placa de vídeo de 24 GB para o conforto).</li>
</ul>
<div class="card hi"><p style="font-size:1.1rem;color:#fff"><strong>O reflexo: anonimizar</strong></p>
<p>Antes de colar um documento, retire os nomes, endereços, números, valores que identifiquem. Você mantém 99% da utilidade sem expor ninguém.</p>
<p>E a linha vermelha, seja qual for a ferramenta: <strong>nunca senhas, dados médicos, dados de clientes</strong> em uma IA de uso geral.</p></div>

<h2>4. As 10 armadilhas a evitar</h2>
<p>Quase todas as más experiências com a IA vêm de um destes dez reflexos. Leia-os uma vez, releia-os quando algo travar.</p>
<ol>
<li><strong>Acreditar na IA sobre um fato sem verificar</strong> — ela inventa com firmeza (alucinação). Um número, uma fonte, uma data: a gente cruza as informações.</li>
<li><strong>Colar o confidencial</strong> — senhas, dados de clientes ou médicos em uma IA de uso geral. Nunca.</li>
<li><strong>Esquecer de especificar o formato desejado</strong> — sem "em 5 pontos", "tabela", "no máximo 10 linhas", você se submete ao formato padrão.</li>
<li><strong>Não dar contexto</strong> — quem você é, para quem, com que objetivo. Sem isso, a resposta continua genérica.</li>
<li><strong>Desistir na primeira tentativa</strong> — a primeira resposta é um rascunho. A gente ajusta, relança, refina.</li>
<li><strong>Achar que isso substitui o seu julgamento</strong> — a IA propõe, você decide. A responsabilidade final continua sendo sua.</li>
<li><strong>Publicar um conteúdo de IA sem mencioná-lo quando é exigido</strong> — a transparência virou uma obrigação legal em certos conteúdos (ver o módulo sobre o marco legal).</li>
<li><strong>Negligenciar as configurações de privacidade</strong> — a gente as abre uma vez, escolhe o opt-out, entende o que ele realmente protege (e o que ele não protege).</li>
<li><strong>Ficar no gratuito mesmo usando todos os dias</strong> — você se priva dos bons modelos para economizar US$ 20 em uma ferramenta que virou diária.</li>
<li><strong>Pedir tudo a uma única IA</strong> — você herda as fraquezas dela em cada tarefa. A ferramenta certa para o momento certo.</li>
</ol>

<h2>5. A checklist: o reflexo Altitude</h2>
<p>Para manter à mão. Releia-a antes de qualquer uso um pouco sério — uma entrega, um conteúdo publicado, um documento sensível.</p>
<div class="pr"><pre>O REFLEXO ALTITUDE — reler antes de cada uso sério

1. Qual e a NATUREZA da minha tarefa? (redigir / pesquisar / sensivel)
   -> escolho a ferramenta de acordo, nao por habito.
2. Dei o CONTEXTO? (quem sou eu, para quem, com que objetivo)
3. Impus um FORMATO claro? (tamanho, estrutura, tom)
4. E CONFIDENCIAL? -> anonimizar, ou conta nao treinada, ou local.
5. Nunca senha / dado medico / dado de cliente.
6. O resultado tem um FATO, um numero, uma fonte? -> eu verifico.
7. Primeira resposta = rascunho -> ajusto e relanco se preciso.
8. Mantenho o JULGAMENTO final: a IA propoe, eu decido.
9. Conteudo publicado: devo MENCIONAR a IA? (obrigacao em certos casos)
10. Este uso e diario? -> o plano pago passa a valer a pena.</pre><button class="copy">Copiar</button></div>

<p>Agora você tem a base, as ferramentas e a cabeça fria para usá-las. A IA não é mágica: é um multiplicador do que você já sabe fazer. Bem conduzida, ela faz você ganhar horas. Mal conduzida, ela faz você perder confiança. Toda a diferença está nesses reflexos.</p>
<div class="tip">💡 Último conselho: volte a esta checklist daqui a um mês. O que hoje lhe parece uma lista de instruções terá se tornado um automatismo — e é nesse momento que a IA começa de verdade a trabalhar para você.</div>
`
};
