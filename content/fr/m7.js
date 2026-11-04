window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.fr.m7 = {
  title:"Claude Code & Codex : l'IA qui agit sur ta machine",
  level:"Avancé",
  summary:"Au-delà du chatbot : des agents qui lisent, écrivent et exécutent vraiment sur tes fichiers. Ce que c'est, comment y accéder sans être développeur, et comment garder la main (et le budget).",
  html:`
<p>Jusqu'ici, l'IA vous <em>répondait</em>. Ici, elle <strong>agit</strong> : elle ouvre vos fichiers, écrit du code, lance des scripts, trie un dossier, convertit des PDF — sur votre vraie machine, pas dans une fenêtre de chat isolée. C'est un saut net, puissant et un peu vertigineux. Ce module est <strong>avancé et facultatif</strong> : si vous débutez, vous pouvez le garder pour plus tard sans aucun problème.</p>
<div class="obj"><b>Objectif.</b> Comprendre ce qu'est un « agent » qui agit sur votre ordinateur, voir en quoi il diffère d'un chatbot, savoir par quelle porte entrer quand on ne code pas, et repartir avec le réflexe de sécurité et le réflexe coût qui évitent les mauvaises surprises.</div>
<h2>Ce que c'est, concrètement</h2>
<p>Claude Code (Anthropic) et Codex (OpenAI) sont des <strong>agents de codage</strong>. Dites-leur quoi faire en français, et ils <strong>agissent réellement</strong> : lire et modifier des fichiers, créer des dossiers, exécuter des commandes, enchaîner plusieurs étapes seuls jusqu'à atteindre le but. Ce ne sont pas que des outils de programmeurs : ils savent aussi renommer 200 photos, extraire les tableaux d'un PDF, nettoyer un fichier Excel ou générer un petit site.</p>
<p>Côté Claude, l'« <strong>usage ordinateur</strong> » (computer use) est disponible depuis août 2026, et les fonctions <code>Cowork</code> et « Claude in Chrome » ont été fusionnées : l'IA peut naviguer, cliquer, remplir — avec, par défaut, une <strong>confirmation demandée avant chaque action à fort impact</strong>.</p>
<h2>La différence avec un chatbot</h2>
<p>Un chatbot (le ChatGPT ou le Claude classique) <strong>produit du texte</strong> : il vous dit quoi faire, vous le faites. Un agent <strong>fait</strong> : il exécute à votre place. La frontière est simple à sentir.</p>
<ul>
<li><strong>Chatbot</strong> : « Voici le script à coller dans un fichier <code>renommer.py</code>, puis lance-le. » → c'est <em>vous</em> qui agissez.</li>
<li><strong>Agent</strong> : « C'est fait : j'ai créé le fichier, je l'ai lancé, vos 200 photos sont renommées. » → c'est <em>lui</em> qui a agi.</li>
</ul>
<p>Cette puissance a une contrepartie : un agent peut aussi <strong>supprimer, écraser ou envoyer</strong> pour de vrai. D'où les deux réflexes de la fin de module.</p>
<div class="card">
<p>🎥 <strong>Démo vidéo</strong> : [emplacement réservé — screencast à insérer]</p>
<p>Rien ne vaut de <em>voir</em> un agent travailler : la consigne tapée en français, les fichiers qui se créent sous vos yeux, la demande de confirmation avant une action sensible. C'est l'endroit idéal pour une capture d'écran commentée.</p>
</div>
<h2>Le « vibe coding »</h2>
<p>C'est le mot à la mode, et il résume bien l'idée : vous <strong>décrivez ce que vous voulez en langage naturel</strong>, l'IA écrit (et souvent exécute) le code. « Fais-moi une page qui liste mes clients à partir de ce fichier Excel » — et ça se construit tout seul. Vous n'écrivez pas une ligne de code : vous <strong>dirigez</strong>.</p>
<p>Le piège n'est pas technique, il est pratique : on se laisse griser, on empile les demandes, et <strong>la facture ou les limites grimpent sans qu'on les surveille</strong>. On y revient plus bas.</p>
<h2>Comment y accéder</h2>
<ul>
<li><strong>Claude Code</strong> est <strong>inclus dans l'abonnement Claude Pro (20 $/mois)</strong>. Rien de plus à payer pour commencer : il puise dans votre fenêtre d'usage habituelle.</li>
<li><strong>Codex</strong> (OpenAI) est <strong>inclus dans les offres Free, Go, Plus et Pro</strong>, mais sa consommation est <strong>facturée en crédits / tokens</strong> (depuis le 02/04/2026) : au-delà d'un certain usage, ça devient payant à la tâche.</li>
</ul>
<div class="card hi"><p style="font-size:1.1rem;color:#fff"><strong>Vous ne codez pas ? N'ouvrez pas le terminal.</strong></p>
<p>Claude Code et Codex s'utilisent d'origine dans une fenêtre de commande noire — déroutant quand on n'est pas développeur. L'entrée recommandée pour un non-développeur, c'est l'<strong>interface graphique</strong> : <code>Claude Cowork</code>, fondu dans le chat Claude. Vous parlez en français, vous voyez ce qui se passe, vous validez les actions d'un clic. Même puissance, zéro ligne de commande.</p></div>
<span class="step">À vous · 5 min</span>
<h3>Faites agir l'outil, prudemment</h3>
<p>Dans Claude Cowork (ou Claude Code si vous êtes à l'aise), demandez une action <strong>petite et sans danger</strong>. Copiez cette consigne :</p>
<div class="pr"><pre>Crée dans un NOUVEAU dossier de test (appelle-le "bac-a-sable") un fichier texte nommé bonjour.txt qui contient la date du jour et la phrase "Premier test d'agent".
Avant d'exécuter quoi que ce soit, montre-moi d'abord ce que tu comptes faire, étape par étape, et attends mon feu vert.
Ne touche à aucun autre fichier.</pre><button class="copy">Copier</button></div>
<span class="step reveal">La bonne consigne + ce qu'il faut vérifier</span>
<p>Trois choses rendent cette consigne <strong>sûre</strong>, et ce sont les mêmes à chaque fois :</p>
<ul>
<li><strong>Un périmètre fermé</strong> : « un nouveau dossier de test », « ne touche à aucun autre fichier ». L'agent ne peut pas déborder sur vos vrais documents.</li>
<li><strong>Un palier de validation</strong> : « montre-moi d'abord… attends mon feu vert ». Vous relisez le <em>plan</em> avant toute exécution.</li>
<li><strong>Une action réversible</strong> : créer un petit fichier ne détruit rien. On garde les actions sensibles pour quand on maîtrise.</li>
</ul>
<p><strong>Avant de laisser l'IA exécuter, vérifiez toujours :</strong></p>
<ol>
<li><strong>Quels fichiers / dossiers</strong> l'action touche-t-elle ? Si le plan parle d'un dossier que vous ne reconnaissez pas, stop.</li>
<li><strong>Est-ce réversible ?</strong> Créer, oui. <strong>Supprimer, écraser, envoyer un message, publier</strong> : non — exigez une confirmation explicite, voire faites-le vous-même.</li>
<li><strong>Une sauvegarde existe-t-elle ?</strong> Avant de laisser un agent modifier des fichiers importants, ayez une copie. Un agent peut se tromper avec aplomb, exactement comme un chatbot.</li>
</ol>
<div class="tip">💰 <strong>Coûts — à surveiller.</strong> Claude Code est inclus dans le Pro à 20 $, mais une session longue ou gourmande peut <strong>épuiser votre fenêtre d'usage</strong> (puis attente) ; côté Codex, le dépassement <strong>bascule en facturation au crédit / token</strong>. Le vibe coding donne envie d'enchaîner — gardez un œil sur votre consommation, travaillez par petites tâches cadrées, et arrêtez-vous quand le but est atteint plutôt que de « voir jusqu'où ça va ».</div>
<div class="tip">💡 À retenir : ce module est <strong>avancé et facultatif</strong>. Un débutant fait très bien 90 % de ce dont il a besoin avec un simple chatbot. Revenez-y le jour où une tâche répétitive sur vos fichiers vous fait vraiment perdre du temps : c'est là que l'agent devient un vrai levier.</div>
`
};
