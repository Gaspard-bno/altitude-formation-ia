window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.fr.m3 = {
  title:"Faire bosser l'IA",
  level:"Intermédiaire",
  summary:"Trois façons de passer de la conversation à l'action : la recherche approfondie (Deep Research), les connecteurs qui branchent vos comptes, et les agents qui cliquent à votre place. Avec les garde-fous qui vont avec.",
  html:`
<p>Jusqu'ici, vous écriviez un prompt et l'IA répondait. On change d'échelle : ici elle va <strong>chercher pour vous pendant plusieurs minutes</strong>, <strong>lire vos vrais fichiers</strong>, et même <strong>agir dans un navigateur</strong>. Trois leviers, trois niveaux de pouvoir — et à chaque niveau, une vigilance qui monte d'un cran.</p>
<div class="obj"><b>Objectif.</b> À la fin de ce module, vous savez quand lancer une recherche approfondie plutôt qu'une simple question, comment brancher vos comptes à une IA en connaissant les limites réelles, et ce qu'un agent sait (et ne sait pas) faire sans vous mettre en danger.</div>

<h2>1. Deep Research — la recherche qui travaille à votre place</h2>
<p>Un chat normal répond en quelques secondes avec ce qu'il « sait ». Le <strong>Deep Research</strong>, lui, part en mission : il décompose votre demande, lance des dizaines de recherches web, lit les pages, recoupe, et vous rend un <strong>rapport sourcé</strong> en 3 à 10 minutes. C'est l'outil des décisions qui comptent : choisir un fournisseur, cadrer un marché, préparer un dossier.</p>
<p>Les quatre grands, chacun avec sa personnalité :</p>
<div class="card"><p><strong>Perplexity</strong> — le plus rapide, citations claires et cliquables à chaque phrase. Parfait pour vérifier vite et voir d'où vient l'info.<br>
<strong>ChatGPT</strong> — les rapports longs et fouillés (il peut lire autour de 200 sources). Idéal quand vous voulez un vrai document structuré.<br>
<strong>Gemini</strong> — très fort si vous êtes dans l'écosystème Google (Workspace) : il peut puiser dans vos données privées.<br>
<strong>Claude</strong> — hybride : bon équilibre entre raisonnement et rédaction propre.</p></div>
<p>Comptez une entrée vers <strong>20 $/mois</strong> pour accéder sérieusement à ces modes. La version gratuite donne un aperçu, rarement le mode complet.</p>
<div class="tip">💡 La bonne pratique des pros : <strong>combinez deux outils</strong>. Un pour <em>sourcer</em> (Perplexity trouve et cite les faits bruts), un pour <em>rédiger</em> (ChatGPT ou Claude met en forme le rapport final). Vous gagnez la fiabilité des sources ET la qualité de la plume.</div>

<h3>Ce qui fait une BONNE demande de recherche</h3>
<p>Une recherche approfondie coûte du temps : autant la cadrer. Quatre ingrédients font toute la différence — le <strong>sujet précis</strong>, l'<strong>angle</strong> (ce que vous cherchez vraiment), l'exigence de <strong>sources datées</strong>, et le <strong>format de sortie</strong> attendu. On les met en pratique dans l'exercice en bas de page.</p>

<h2>2. Les connecteurs — brancher vos comptes à l'IA</h2>
<p>Un connecteur, c'est un <strong>pont autorisé</strong> entre l'IA et un de vos services : Gmail, Google Drive, Notion, Slack… Une fois branché, vous pouvez demander « résume les 3 derniers mails de ce client » ou « retrouve le compte-rendu dans mon Drive » — l'IA lit directement la source, sans copier-coller.</p>
<p>Le paysage n'est pas uniforme, et c'est important de le savoir avant de choisir :</p>
<ul>
<li><strong>Claude</strong> — l'offre la plus large aujourd'hui (une marketplace de connecteurs : Gmail, Drive, Notion, Slack, Microsoft 365). Lecture et souvent actions.</li>
<li><strong>ChatGPT</strong> — connecteurs <strong>payants</strong>, et surtout <strong>signalés indisponibles dans l'EEE / UK / Suisse</strong> (🟡 à confirmer sur la page officielle avant de compter dessus — si vous êtes en France, ça vous concerne directement).</li>
<li><strong>Gemini</strong> — très fort sur l'écosystème Google (Gmail, Docs, Sheets), mais <strong>pas de Notion</strong>.</li>
</ul>
<p>Deux réflexes : la configuration <strong>n'est pas transférable</strong> d'un assistant à l'autre (vous rebranchez tout si vous changez d'outil), et ne branchez que des comptes dont vous maîtrisez le contenu — un connecteur donne à l'IA un vrai accès à vos données.</p>
<div class="tip">💡 Repère simple : lecture seule (résumer, retrouver) = peu risqué. Action (envoyer un mail, modifier un doc) = relisez toujours avant de valider.</div>

<h2>3. Les agents — l'IA qui clique et navigue</h2>
<p>Dernier étage : l'<strong>agent</strong>. Là, l'IA ne se contente plus de répondre — elle <strong>ouvre un navigateur, clique, remplit des formulaires, enchaîne des étapes</strong> pour accomplir une tâche. « Compare ces trois produits et mets-moi un tableau », « remplis ce formulaire à partir de ces infos ».</p>
<div class="card"><p><strong>ChatGPT agent</strong> (ex-Operator) — navigateur virtuel, recherche multi-étapes, formulaires. Payant, avec des quotas mensuels. 🟡 une page d'aide le dit par ailleurs « plus disponible » : vérifiez son statut réel avant de vous y fier.<br>
<strong>Claude computer use</strong> — Claude qui pilote un ordinateur ou un navigateur ; il demande une confirmation avant d'agir, par défaut.</p></div>
<p>À retenir sur toute cette catégorie : c'est <strong>payant et limité</strong> (quotas), c'est <strong>encore jeune</strong> (l'agent se trompe, se bloque, part parfois dans une mauvaise direction), et les bons outils <strong>demandent une confirmation avant toute action à fort impact</strong> — un achat, un envoi, une suppression. Ne désactivez jamais ce garde-fou.</p>
<div class="card hi"><p style="font-size:1.1rem;color:#fff"><strong>La règle de sécurité non négociable.</strong></p>
<p>Ne laissez <strong>jamais</strong> un agent agir sans surveillance sur un compte sensible (banque, messagerie principale, outils clients). Vous restez devant l'écran, vous validez chaque action à fort impact, et vous coupez à la moindre dérive. L'agent travaille <em>avec</em> vous, pas <em>à votre place en aveugle</em>.</p></div>

<h2>À vous · 5 min</h2>
<span class="step">Temps 1 — lancez une veille</span>
<h3>Demandez à l'IA une recherche sur un sujet qui vous concerne</h3>
<p>Ouvrez un outil de Deep Research (Perplexity, ou le mode « recherche approfondie » de ChatGPT / Claude / Gemini). Choisissez un sujet réel : un marché que vous voulez comprendre, un concurrent, un outil à acheter. Et lancez une première demande, avec vos mots, sans trop réfléchir à la forme.</p>
<p>Regardez le résultat. Est-il précis ? Daté ? Les sources sont-elles là et vérifiables ? Notez ce qui manque — c'est exactement ce que le cadrage va corriger.</p>

<span class="step reveal">Temps 2 — la demande bien cadrée</span>
<h3>Comparez avec ce prompt-ci</h3>
<p>Reprenez votre sujet et collez ce cadre : il impose un angle, des sources datées et un format exploitable. Remplacez juste ce qui est entre crochets.</p>
<div class="pr"><pre>Fais une recherche approfondie sur : [VOTRE SUJET PRÉCIS].

Angle : je cherche à [décider / comparer / comprendre] en vue de [votre objectif concret].

Exigences :
- Appuie chaque affirmation importante sur une source, avec le lien et la date de publication.
- Privilégie les sources de moins de 12 mois ; signale clairement toute donnée plus ancienne.
- Distingue les faits confirmés des estimations ou rumeurs.
- Si les sources se contredisent, dis-le au lieu de trancher au hasard.

Format de sortie :
1. Synthèse en 5 points (l'essentiel d'abord).
2. Tableau comparatif des options, avec critères en colonnes.
3. Liste des sources (titre, lien, date).
4. Ce qui reste incertain ou à vérifier.</pre><button class="copy">Copier</button></div>
<p>La différence saute aux yeux : vous êtes passé d'une question vague à une <strong>commande de mission</strong>. L'IA sait quoi chercher, jusqu'où remonter dans le temps, et sous quelle forme vous rendre le travail. C'est tout l'art de faire bosser l'IA — vous ne subissez pas sa réponse, vous la pilotez.</p>
<div class="tip">💡 Dernier réflexe, valable pour les trois leviers : plus l'IA gagne en pouvoir (chercher, lire vos comptes, agir), plus votre relecture compte. Le niveau de vérification doit monter au même rythme que le niveau d'autonomie.</div>
`
};
