window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.fr.m1 = {
  title:"Qui fait quoi en octobre 2026",
  level:"Débutant",
  summary:"Le panorama clair des assistants IA grand public : le point fort de chacun, quel outil pour quelle tâche, et comment choisir sans se faire piéger par les versions et les prix qui bougent.",
  html:`
<p>Il existe une dizaine d'assistants IA sérieux, et chacun a une petite musique à lui. Pas besoin de tous les connaître. Ce module vous donne la carte du terrain au 20 octobre 2026, puis une méthode simple pour choisir le vôtre et ne pas vous tromper.</p>
<div class="obj"><b>Objectif.</b> À la fin de ce module, vous situez les grands assistants et leur point fort, vous savez quel outil ouvrir pour quelle tâche, et vous avez choisi une combinaison de départ : un assistant principal + une solution « coffre-fort » pour le sensible.</div>

<h2>Les assistants, en une ligne chacun</h2>
<p>Pour chacun : ce qu'il fait le mieux, et quand l'ouvrir. (Versions et prix au 20/10/2026 — on y revient juste après.)</p>
<div class="card"><p>
<strong>Claude (Anthropic)</strong> — famille Claude 5 (Opus, Sonnet, Haiku, plus Fable côté créatif), très grande mémoire de lecture. Excellent pour rédiger long, raisonner, travailler sur de gros documents et agir sur vos fichiers. <em>Quand :</em> rédaction soignée, analyse de dossiers.<br>
<strong>ChatGPT (OpenAI)</strong> — la famille GPT-6 est arrivée en septembre 2026 ; le nom exact du modèle par défaut est encore flou (à vérifier). Le plus polyvalent, très bon écosystème. <em>Quand :</em> couteau suisse du quotidien, premiers pas.<br>
<strong>Gemini (Google)</strong> — Gemini 3.x, intégré à Gmail, Docs et Sheets. <em>Quand :</em> vous vivez déjà dans les outils Google.<br>
<strong>Le Chat (Mistral)</strong> 🇫🇷 — assistant français, serveurs en Europe, RGPD. <em>Quand :</em> vous voulez un acteur européen (on nuance la partie confidentialité plus bas).<br>
<strong>Grok (xAI)</strong> — intégré à X, ton direct, accès à l'actu du réseau. <em>Quand :</em> veille sur X, réponses décontractées.<br>
<strong>Perplexity</strong> — spécialiste de la recherche <strong>sourcée</strong> : il répond en citant ses liens. <em>Quand :</em> vous voulez des sources vérifiables.<br>
<strong>Copilot (Microsoft)</strong> — fondu dans Microsoft 365, donc présent dans Word, Excel, Outlook. <em>Quand :</em> vous travaillez toute la journée dans Office.</p></div>

<div class="card hi"><p style="font-size:1.1rem;color:#fff"><strong>⚠️ Ça bouge très vite.</strong></p>
<p>Les versions, les noms et les prix cités ici sont ceux du <strong>20/10/2026</strong>. Ce marché change tous les mois : un modèle « par défaut » peut changer, un prix peut doubler, une offre peut disparaître. <strong>Avant de payer quoi que ce soit, vérifiez sur la page officielle de l'éditeur.</strong> Ne vous fiez jamais à un chiffre lu dans une vidéo ou un article (même celui-ci).</p></div>

<h2>Quel outil pour quelle tâche</h2>
<p>Un repère rapide. Aucun n'est « le meilleur » dans l'absolu : ça dépend de ce que vous faites.</p>
<div class="card"><p>
<strong>Rédiger / reformuler</strong> → Claude ou ChatGPT.<br>
<strong>Résumer un gros PDF</strong> → Claude (il lit beaucoup de texte d'un coup) ou Gemini.<br>
<strong>Recherche sourcée</strong> (avec les liens) → Perplexity ; ChatGPT et Gemini savent aussi citer.<br>
<strong>Créer des images</strong> → outils dédiés (vus au module Création) ; ChatGPT et Gemini en font aussi, de façon correcte.<br>
<strong>Dans Word / Excel / Outlook</strong> → Copilot. Dans Gmail / Docs / Sheets → Gemini.<br>
<strong>Dossier confidentiel</strong> → surtout pas le compte gratuit grand public. Voir juste en dessous.</p></div>

<h2>Confidentialité : le vrai du faux</h2>
<p>Un mythe tenace circule : « Mistral est français, donc mes données sont en sécurité par défaut ». <strong>C'est à nuancer.</strong> Être une société française et respecter le RGPD est un vrai plus. Mais au 20/10/2026, une mise à jour de leurs conditions aurait modifié l'entraînement sur les offres payantes 🟡 — ce point n'est pas confirmé par une page officielle, donc <strong>à vérifier avant de s'y fier</strong>. La nationalité d'un outil ne fait pas, à elle seule, un coffre-fort.</p>
<p>Deux idées à garder en tête :</p>
<ul>
<li><strong>« Ne pas entraîner sur mes données » n'est pas « confidentiel ».</strong> Cela empêche un usage futur pour l'entraînement, mais vos échanges transitent quand même par les serveurs de l'éditeur et y sont stockés un temps.</li>
<li><strong>Le vrai « coffre-fort »</strong>, c'est soit un compte <strong>Business / Équipe / API</strong> — ces offres ne sont généralement pas entraînées sur vos données —, soit une <strong>IA 100 % locale</strong> qui tourne sur votre ordinateur et où rien ne sort : <code>Ollama</code> (en ligne de commande) ou <code>LM Studio</code> (interface simple). On y reviendra.</li>
</ul>
<div class="tip">💡 Règle simple : jamais de mots de passe, de données médicales, ni de données clients dans un chat IA grand public. Pour ces cas, compte pro non entraîné ou IA locale.</div>

<h2>Par quoi commencer</h2>
<div class="card hi"><p style="color:#fff">Ne cherchez pas à tout installer. Pour démarrer, <strong>une combinaison de deux suffit</strong> :</p>
<p><strong>1 assistant principal</strong> — ChatGPT ou Claude. C'est lui que vous ouvrez par réflexe, tous les jours. Prenez-en un, apprenez-le à fond.<br>
<strong>1 solution « coffre-fort »</strong> — pour tout ce qui est sensible : un compte pro non entraîné, ou une IA locale (Ollama / LM Studio).</p></div>
<p>Vous ajouterez les autres plus tard, seulement si un besoin précis apparaît (recherche sourcée, vie dans Office…). Mieux vaut bien maîtriser un outil que survoler cinq.</p>

<span class="step">À vous · 6 min</span>
<h3>Faites plancher deux IA sur la même tâche</h3>
<p>Le meilleur moyen de sentir les différences, c'est de comparer. Ouvrez <strong>deux assistants</strong> (par exemple ChatGPT et Claude), et donnez <strong>exactement le même prompt</strong> aux deux :</p>
<div class="pr"><pre>Tu es mon assistant. Rédige un e-mail court et chaleureux pour relancer poliment un client qui n'a pas répondu à un devis envoyé il y a 10 jours. Ton professionnel mais humain, 120 mots maximum, en français. Termine par une question simple qui facilite la réponse.</pre><button class="copy">Copier</button></div>
<p>Lisez les deux résultats. Lequel vous donne envie de l'envoyer tel quel ? Lequel sonne le plus « vous » ?</p>

<span class="step reveal">Ce qu'il fallait remarquer</span>
<p>Vous venez de faire votre premier banc d'essai. Voici la grille de lecture pour comparer n'importe quels outils :</p>
<ul>
<li><strong>Le ton.</strong> Certains modèles écrivent plus chaleureux, d'autres plus carrés. C'est le critère nº 1 pour un e-mail ou un post.</li>
<li><strong>Le respect de la consigne</strong> (longueur, format, langue). Un bon modèle tient le cadre ; un autre déborde.</li>
<li><strong>La vérifiabilité.</strong> Dès qu'il y a des faits, préférez celui qui cite ses sources (Perplexity, ou ChatGPT/Gemini en mode recherche).</li>
<li><strong>Le confort.</strong> Vitesse, interface, intégration à vos outils : ça compte autant que la « qualité » brute.</li>
</ul>
<p>Astuce de pro : au lieu de trancher vous-même, <strong>faites juger une IA par une autre</strong>. Une IA qui dialogue avec une IA fait souvent mieux qu'un humain qui parle seul à une IA. Collez les deux réponses dans un troisième chat avec ce prompt :</p>
<div class="pr"><pre>Voici deux versions d'un même e-mail de relance client. Compare-les sur 4 critères : ton, respect de la consigne (120 mots, chaleureux, une question finale), clarté, et probabilité d'obtenir une réponse. Donne un gagnant par critère, puis propose une version finale qui prend le meilleur des deux.

VERSION A :
[colle ici la réponse du 1er assistant]

VERSION B :
[colle ici la réponse du 2e assistant]</pre><button class="copy">Copier</button></div>
<div class="tip">💡 Besoin flou ? Ne devinez pas le bon prompt : demandez à l'IA de vous poser des questions. « Avant de répondre, pose-moi 3 à 5 questions pour bien cerner mon besoin. » C'est la technique du QCM — on l'approfondit au module suivant.</div>
`
};
