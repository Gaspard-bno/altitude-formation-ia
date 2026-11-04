window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.fr.m6 = {
  title:"Votre second cerveau avec Obsidian",
  level:"Intermédiaire",
  summary:"Pourquoi noter dans un outil que vous possédez vraiment, la méthode pour démarrer sans se noyer, et les plugins IA qui transforment vos notes en assistant personnel.",
  html:`
<p>Vous retenez de moins en moins, et ce n'est pas un problème de mémoire : c'est que personne ne peut tout garder en tête. Un « second cerveau » règle ça autrement — vous <strong>capturez</strong> dehors ce que vous n'avez pas à retenir dedans. Ce module vous montre comment le construire dans Obsidian, puis le brancher à l'IA.</p>
<div class="obj"><b>Objectif.</b> À la fin, vous avez installé Obsidian, créé une structure qui tient, compris la seule règle qui compte (capturer d'abord, ranger ensuite), et vous savez quels plugins IA valent le coup au 20/10/2026.</div>

<h2>Pourquoi un « second cerveau »</h2>
<p>Votre tête est faite pour <strong>réfléchir</strong>, pas pour <strong>stocker</strong>. Chaque idée, lien, réunion ou intuition que vous essayez de retenir « au cas où » occupe de la place et finit par s'effacer. Le principe du second cerveau est simple : tout ce qui mérite d'être gardé part dans un système de confiance, et votre tête se libère pour le travail réel. Vous ne « révisez » plus — vous <em>retrouvez</em>.</p>

<h2>Pourquoi Obsidian précisément</h2>
<p>Il existe des dizaines d'apps de notes. Obsidian gagne sur un point décisif : <strong>vos notes sont de simples fichiers texte (Markdown) stockés sur votre disque</strong>. Pas dans le cloud d'une entreprise, pas dans un format propriétaire. Concrètement :</p>
<ul>
<li><strong>Vous possédez vos données.</strong> Si Obsidian disparaissait demain, vos notes resteraient lisibles dans n'importe quel éditeur de texte. Zéro lock-in.</li>
<li><strong>Les liens <code>[[ ]]</code> et le graphe.</strong> Vous reliez deux notes en tapant <code>[[nom de la note]]</code>. Obsidian dessine automatiquement le <em>graphe</em> de vos idées — vous voyez ce qui se connecte, vous retombez sur des liens oubliés.</li>
<li><strong>Gratuit pour un usage perso.</strong> Vous ne payez que si vous voulez la synchro officielle ou un usage commercial.</li>
<li><strong>Lisible par les IA.</strong> Du Markdown en texte brut, c'est exactement ce qu'un modèle digère le mieux. Votre vault devient une base que Claude ou ChatGPT peut lire et enrichir (on y vient).</li>
</ul>

<h2>La seule règle de débutant qui compte</h2>
<div class="card hi"><p style="font-size:1.15rem;color:#fff"><strong>Capturez d'abord. Rangez ensuite.</strong></p>
<p>La plupart des gens abandonnent parce qu'ils veulent « l'arborescence parfaite » avant d'avoir une seule note. Faites l'inverse : balancez tout dans une boîte d'entrée, sans réfléchir au rangement. Le classement se fait <em>plus tard</em>, par petites touches. Une idée non capturée est perdue ; une idée mal rangée se retrouve toujours.</p></div>

<h3>La structure PARA</h3>
<p>Pour ranger sans se poser 50 questions, une seule méthode suffit : <strong>PARA</strong>, quatre dossiers qui couvrent 100 % de ce que vous notez.</p>
<div class="card"><p><strong>P · Projects (Projets)</strong> — ce qui a une fin et une date (ex. « Lancer le site client X »).<br>
<strong>A · Areas (Domaines)</strong> — vos responsabilités continues, sans fin (ex. « Santé », « Finances », « DreamFly »).<br>
<strong>R · Resources (Ressources)</strong> — vos sujets d'intérêt, documentations, références (ex. « Prompts », « Montage vidéo »).<br>
<strong>A · Archives</strong> — tout ce qui est terminé ou inactif. On n'efface pas, on archive.</p></div>
<p>Le réflexe de rangement devient trivial : <em>« Est-ce que ça sert un projet en cours ? Sinon un domaine ? Sinon une ressource ? Sinon archive. »</em></p>

<h3>Notes atomiques</h3>
<p>Une bonne note = <strong>une seule idée</strong>. Pas un fourre-tout de 3 pages. Et surtout, <strong>le titre est une affirmation</strong>, pas un mot-clé. On n'écrit pas « Prix » mais « Un prix rond paraît moins sérieux qu'un prix précis ». Pourquoi ? Parce qu'un titre qui affirme quelque chose est déjà réutilisable, citable, reliable à d'autres notes. Votre second cerveau devient un réseau d'idées, pas un tiroir de brouillons.</p>

<h3>Les Daily Notes</h3>
<p>Activez les <strong>Notes du jour</strong> (réglages intégrés). Chaque jour, une note datée s'ouvre : c'est votre point de capture par défaut. Une pensée, un lien, une tâche ? Ça tombe dans la note du jour, vous triez plus tard. C'est le cœur battant du système.</p>

<h2>Votre première semaine (plan concret)</h2>
<ol>
<li><strong>Jour 1</strong> — Installez Obsidian, créez un vault, créez les 4 dossiers PARA + une Inbox. C'est tout.</li>
<li><strong>Jours 2 à 5</strong> — Capturez sans ranger. Tout va dans l'Inbox ou la note du jour. Zéro pression d'organisation.</li>
<li><strong>Au fil de l'eau</strong> — Dès que deux notes se parlent, reliez-les avec <code>[[ ]]</code>.</li>
<li><strong>Jour 7</strong> — Revue de 20 minutes : vous videz l'Inbox dans PARA. L'IA, elle, vient <em>plus tard</em> — le système doit d'abord exister.</li>
</ol>
<div class="tip">🎁 Pour vous éviter le jour 1, un <strong>kit template Obsidian vierge</strong> est fourni avec la formation (dossier « kit-obsidian ») : structure PARA + Inbox + Daily Notes déjà en place, <strong>zéro donnée perso</strong>. Vous le copiez, vous ouvrez, vous capturez.</div>

<h2>Brancher l'IA sur votre vault (au 20/10/2026)</h2>
<p>Une fois le système vivant, l'IA le démultiplie. Trois approches, de la plus simple à la plus puissante :</p>
<ul>
<li><strong>Smart Connections</strong> — un plugin qui relie automatiquement vos notes par le <em>sens</em> (pas seulement par mots-clés) et vous laisse « discuter » avec votre vault. Atout majeur : ses <strong>embeddings peuvent tourner en local</strong>, donc sans envoyer vos notes dehors.</li>
<li><strong>Copilot for Obsidian</strong> — un chat intégré, multi-modèles (Claude / GPT / Gemini / Ollama en local). Vous posez une question, il répond en s'appuyant sur vos notes. Attention : le mode RAG cloud envoie du contenu aux serveurs du modèle — arbitrage à faire selon la sensibilité.</li>
<li><strong>Connecter Claude / Claude Code via MCP</strong> — le plus intégré. Vous pointez Claude Desktop ou Claude Code sur le dossier du vault (via un serveur MCP) : l'IA peut alors <strong>lire, créer et modifier</strong> vos notes directement. C'est votre second cerveau qui devient agent.</li>
</ul>
<div class="card"><p><strong>Obsidian Bases</strong> 🟡 — un plugin cœur récent qui transforme les propriétés de vos notes en vues type base de données (Table, Cartes, Liste, Kanban). En clair : une alternative no-code à Notion, sans quitter vos fichiers locaux. Fonctionnalité jeune et en évolution — vérifiez la version de votre Obsidian avant de bâtir dessus.</p></div>

<span class="step">À vous · 10 min</span>
<h3>Installez Obsidian et créez 5 dossiers</h3>
<p>Téléchargez Obsidian (obsidian.md), créez un nouveau vault, et créez <strong>cinq dossiers</strong> comme bon vous semble pour organiser votre vie. Ne cherchez pas la perfection — faites au feeling, on corrige juste après.</p>

<span class="step reveal">La structure exacte, et un coup de pouce de l'IA</span>
<p>Voici le squelette qui marche pour 99 % des gens (nommez vos dossiers ainsi — c'est aussi ce que contient le kit) :</p>
<div class="card"><p><strong>00 Inbox</strong> — capture brute, tout arrive ici.<br>
<strong>01 Projets</strong> — ce qui a une fin et une date.<br>
<strong>02 Domaines</strong> — vos responsabilités continues.<br>
<strong>03 Ressources</strong> — sujets d'intérêt et références.<br>
<strong>04 Archives</strong> — terminé ou inactif.</p></div>
<p>Maintenant, laissez l'IA vous aider à amorcer le contenu. Collez ce prompt dans Claude ou ChatGPT :</p>
<div class="pr"><pre>Tu es mon coach en organisation personnelle. Je démarre un "second cerveau" dans Obsidian avec la méthode PARA (Projets / Domaines / Ressources / Archives) + une Inbox.

Pose-moi 5 questions, une par une, pour cerner ma vie actuelle : mes projets en cours, mes responsabilités continues, mes centres d'intérêt.

Ensuite, propose-moi :
1. La liste de mes projets à mettre dans "01 Projets" (avec une date de fin estimée pour chacun).
2. Mes domaines pour "02 Domaines".
3. 3 à 5 notes atomiques à créer dès aujourd'hui — pour chacune, donne un TITRE qui est une affirmation (pas un mot-clé).

Réponds en français, de façon concrète, sans blabla.</pre><button class="copy">Copier</button></div>
<p>En 10 minutes de dialogue, votre vault vide devient un système qui vous ressemble. Vous n'aviez pas la page blanche à remplir seul.</p>

<div class="tip">🔒 Confidentialité : la force d'Obsidian, c'est le <strong>local</strong>. Gardez-le ainsi. Avant d'installer un plugin IA, vérifiez s'il envoie vos notes dans le cloud (certains le font pour le RAG ou les embeddings). Pour des notes sensibles, privilégiez les options locales (embeddings locaux, modèle via Ollama) — et ne mettez jamais mots de passe, données clients ou données médicales dans un vault relié à un service cloud.</div>
`
};
