window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.fr.m8 = {
  title:"Automatiser : l'IA qui travaille pendant que tu dors",
  level:"Avancé",
  summary:"Comment faire tourner des tâches répétitives toutes seules : le principe déclencheur → étapes → action, les trois outils (n8n, Zapier, Make), les tâches planifiées des assistants, et 5 automatisations prêtes à monter.",
  html:`
<p>Jusqu'ici, c'est vous qui ouvrez l'IA et qui lui parlez. Ce module inverse la logique : vous montez une fois un petit « circuit » qui se déclenche et s'exécute sans vous. C'est le niveau avancé de la formation — <strong>facultatif</strong>. Lisez-le pour comprendre ce qui est possible ; ne vous lancez que quand une tâche vous fait vraiment perdre du temps chaque semaine.</p>
<div class="obj"><b>Objectif.</b> À la fin de ce module, vous savez décrire n'importe quelle automatisation en trois briques (déclencheur, étapes, action), vous situez n8n, Zapier et Make les uns par rapport aux autres, et vous repartez avec un prompt qui demande à l'IA de concevoir le scénario à votre place.</div>

<h2>Le principe : déclencheur → étapes → action, en boucle</h2>
<p>Toute automatisation, aussi sophistiquée soit-elle, se lit de la même façon :</p>
<ul>
<li><strong>Un déclencheur</strong> — l'événement qui met tout en route : « un mail arrive », « il est 7 h », « un formulaire est rempli », « une facture est payée ».</li>
<li><strong>Des étapes</strong> — ce qui se passe au milieu : lire le contenu, demander à une IA de trier / résumer / rédiger, filtrer selon une condition, aller chercher une info ailleurs.</li>
<li><strong>Une action</strong> — le résultat concret : envoyer une réponse, créer un document, publier un post, ranger une ligne dans un tableau, vous notifier.</li>
</ul>
<p>Et le tout tourne <strong>en boucle</strong> : une fois posé, le circuit se rejoue à chaque déclenchement, sans vous. La nouveauté de 2026, c'est que l'une des étapes peut être une vraie IA (voire un petit <em>agent</em> qui décide quoi faire), pas juste un copier-coller mécanique.</p>

<h2>Les trois outils, du plus simple au plus puissant</h2>
<div class="card"><p><strong>Zapier — le plus simple.</strong> 7 à 8 000+ applications connectées, logique « quand ceci, alors cela ». On monte une automatisation basique en quelques minutes sans rien installer. Son IA intégrée reste légère, mais pour l'essentiel des besoins d'un indépendant, ça suffit largement. <strong>Commencez ici.</strong></p></div>
<div class="card"><p><strong>Make — le visuel, niveau intermédiaire.</strong> On relie des « modules » sur un tableau visuel ; on voit les données circuler d'une bulle à l'autre. Plus de liberté que Zapier pour les scénarios à conditions et à boucles, avec une brique IA (assistant et agents) ajoutée début 2026. Bon compromis quand Zapier devient trop rigide.</p></div>
<div class="card"><p><strong>n8n — le plus puissant.</strong> Des dizaines de nœuds d'IA, un nœud « AI Agent », de la mémoire et du RAG (interroger vos propres documents). Surtout, il est <strong>auto-hébergeable</strong> : vous l'installez sur votre serveur, donc vos données ne transitent par personne — idéal pour des infos sensibles. La contrepartie : il demande des <strong>compétences serveur</strong> (installation, maintenance). À réserver pour plus tard.</p></div>

<h2>Sans rien installer : les tâches planifiées des assistants</h2>
<p>Avant même ces outils, votre assistant IA sait déjà automatiser des choses simples. ChatGPT et Claude peuvent exécuter une consigne à heure fixe (tâches planifiées, briefs proactifs). L'exemple type : le <strong>brief matinal</strong> — chaque jour à 7 h, l'IA vous prépare un résumé (agenda, actualité de votre secteur, rappels) livré dans l'app. Zéro installation, zéro code : c'est la porte d'entrée idéale pour goûter à l'automatisation.</p>

<h2>5 automatisations qu'un indépendant peut monter</h2>
<ol>
<li><strong>Tri + réponse de mails.</strong> Déclencheur : un mail arrive. Étapes : l'IA le classe (devis, question, spam, à suivre) et rédige un brouillon de réponse adapté. Action : le brouillon vous attend, vous validez et envoyez. Vous gardez la main sur le bouton « envoyer ».</li>
<li><strong>Veille + résumé quotidien.</strong> Déclencheur : tous les matins. Étapes : récupérer les nouveautés de quelques sources (sites, flux, réseaux) et les faire résumer par l'IA. Action : un digest clair dans votre boîte mail ou votre messagerie.</li>
<li><strong>Publication multi-réseaux.</strong> Déclencheur : vous validez un contenu. Étapes : l'IA l'adapte au format de chaque plateforme (ton, longueur, hashtags). Action : publication (ou programmation) sur LinkedIn, Instagram, etc., d'un seul geste.</li>
<li><strong>Devis / factures déclenchés.</strong> Déclencheur : un client accepte une offre (formulaire, case cochée, mail). Étapes : l'IA remplit le bon modèle avec les infos. Action : le document est généré et prêt à envoyer. Vous relisez toujours les montants avant d'envoyer.</li>
<li><strong>Chatbot RAG sur vos propres documents.</strong> Déclencheur : quelqu'un pose une question (sur votre site, ou pour vous). Étapes : l'IA cherche la réponse <strong>dans vos documents à vous</strong> (offres, FAQ, procédures) plutôt que dans ses connaissances générales. Action : une réponse fidèle à votre activité. C'est le terrain de jeu de n8n.</li>
</ol>

<div class="card"><p><strong>🎥 Démo vidéo :</strong> [emplacement réservé — screencast à insérer]</p></div>

<h2>À vous de jouer</h2>
<span class="step">À vous · temps 1</span>
<h3>Décrivez votre corvée</h3>
<p>Repérez une tâche que vous refaites <strong>chaque semaine, toujours pareil</strong> (répondre aux mêmes questions, publier aux mêmes endroits, relancer les mêmes clients…). Écrivez-la en <strong>une seule phrase</strong>, comme vous la raconteriez à un ami. Exemple : « Chaque lundi, je recopie à la main les nouveaux prospects du formulaire dans mon tableau clients. »</p>
<span class="step reveal">Temps 2 · découpez-la, puis laissez l'IA concevoir le scénario</span>
<p>D'abord, découpez votre phrase dans les trois cases :</p>
<ul>
<li><strong>Déclencheur</strong> — qu'est-ce qui lance tout ? (« un formulaire est rempli »)</li>
<li><strong>Étapes</strong> — que faut-il faire au milieu ? (« lire les infos, vérifier que ce n'est pas un doublon »)</li>
<li><strong>Action</strong> — quel résultat concret ? (« ajouter une ligne dans le tableau clients »)</li>
</ul>
<p>Ensuite, copiez ce prompt dans votre IA (en remplaçant la tâche par la vôtre) : elle vous proposera le scénario complet, étape par étape, avec l'outil adapté.</p>
<div class="pr"><pre>Tu es un expert en automatisation no-code (Zapier, Make, n8n).
Voici une tâche répétitive que je veux automatiser :
"[COLLEZ ICI VOTRE PHRASE]"

1. Reformule-la sous forme de scénario clair : DÉCLENCHEUR, puis ÉTAPES numérotées, puis ACTION finale.
2. Indique à quelle étape une IA est utile et ce que je dois lui demander exactement.
3. Recommande UN outil parmi Zapier, Make ou n8n, et explique en une phrase pourquoi, pour mon niveau (débutant).
4. Liste les applications/comptes que je devrai connecter.
5. Signale les points de vigilance (données sensibles, étape où je dois valider à la main).
Réponds en français, de façon simple, sans jargon inutile.</pre><button class="copy">Copier</button></div>

<div class="tip">💡 Deux réflexes avant de vous lancer. Un : <strong>commencez simple</strong> — montez votre première automatisation sur Zapier ou Make avant de toucher à n8n ; on gravit les marches dans cet ordre. Deux : si l'automatisation manipule des <strong>données sensibles</strong> (clients, infos confidentielles), privilégiez une solution <strong>auto-hébergée</strong> comme n8n, pour que rien ne sorte de chez vous. Et gardez toujours un point de validation humaine sur ce qui part vers l'extérieur (mails, factures, publications).</div>
`
};
