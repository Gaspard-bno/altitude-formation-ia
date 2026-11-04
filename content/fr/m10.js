window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.fr.m10 = {
  title:"Stratégie : multi-modèles, coûts & sécurité",
  level:"Intermédiaire",
  summary:"Comment arrêter de tout demander à une seule IA, bâtir un budget mensuel malin, protéger vos données, et éviter les 10 pièges qui ruinent 90 % des débutants. Le récap qui relie tous les modules.",
  html:`
<p>Vous savez maintenant parler à une IA, générer du texte, des images, automatiser des tâches. Ce module ne rajoute pas d'outil : il vous apprend à <strong>jouer le jeu intelligemment</strong>. Quel modèle sortir à quel moment, combien dépenser, quoi ne jamais coller, et les erreurs à ne pas commettre. C'est le réflexe stratégique qui sépare l'amateur qui s'épuise de l'utilisateur qui avance.</p>
<div class="obj"><b>Objectif.</b> À la fin de ce module, vous aurez votre propre trio d'outils (un principal, un chercheur, un coffre-fort), un budget mensuel décidé sur des faits et pas sur l'envie, les bons réflexes de confidentialité, et une checklist à relire avant chaque usage sérieux.</div>

<h2>1. Une seule IA, c'est bien. Plusieurs, c'est mieux.</h2>
<p>Aucune IA n'est la meilleure partout. Chacune a sa personnalité, ses forces, ses angles morts. Vous attacher à un seul outil, c'est accepter ses faiblesses sur toutes vos tâches. La bonne stratégie n'est pas « laquelle choisir », mais « laquelle à quel moment ».</p>
<p>Le piège inverse existe aussi : empiler dix comptes qu'on n'ouvre jamais. La règle saine tient en <strong>trois rôles</strong>, pas dix abonnements.</p>
<div class="card"><p><strong>Le principal du quotidien</strong> — celui que vous ouvrez par réflexe pour rédiger, résumer, réfléchir, coder un peu. Celui dont l'interface vous est devenue naturelle. 80 % de votre usage passe par lui.<br>
<strong>Le spécialiste recherche</strong> — pour une question qui exige des sources vérifiables et récentes, on sort un outil de recherche sourcée (type Perplexity, ou un mode Deep Research). Bonne pratique : <strong>combiner deux outils</strong>, l'un pour trouver et sourcer, l'autre pour rédiger proprement.<br>
<strong>Le coffre-fort confidentiel</strong> — pour tout ce qui est sensible, une IA 100 % locale ou un compte non entraîné (voir section 3). On n'y met jamais ce qui ne doit pas sortir.</p></div>
<div class="tip">💡 Passer d'un outil à l'autre selon la tâche n'est pas de la dispersion : c'est exactement ce que font les pros. Le réflexe « quelle est la nature de ma tâche ? » doit précéder « quelle IA j'ouvre ? ».</div>

<h2>2. Bâtir un budget mensuel malin</h2>
<p>La peur de « trop dépenser en abonnements IA » est légitime, mais elle se règle avec une méthode simple, pas en restant frustré sur le gratuit.</p>
<span class="step">La logique en 3 temps</span>
<ol>
<li><strong>Commencez gratuit.</strong> Les offres gratuites (Claude, ChatGPT, Gemini, Mistral) suffisent largement pour apprendre et pour un usage occasionnel. Ne payez rien tant que vous découvrez.</li>
<li><strong>Payez les 20 $/mois quand vous l'utilisez tous les jours.</strong> Le repère est net : <strong>dès que l'outil devient un réflexe quotidien, le palier payant (~20 $/mois) devient rentable</strong> — modèles plus puissants, moins de blocages, fonctions avancées. En dessous d'un usage quotidien, le gratuit suffit.</li>
<li><strong>N'empilez pas les abonnements.</strong> Un seul palier payant sur votre outil principal couvre l'immense majorité des besoins. N'ajoutez un deuxième abonnement que si une tâche précise et répétée le justifie (ex. recherche sourcée intensive, génération d'images pro).</li>
</ol>
<div class="card hi"><p style="font-size:1.1rem;color:#fff"><strong>Le repère à retenir</strong></p>
<p>Gratuit = je découvre ou j'utilise de temps en temps. Payant (~20 $) = j'utilise tous les jours. Un abonnement qui dort = de l'argent jeté. Décidez sur votre usage réel du mois dernier, pas sur la promesse de la page de vente.</p></div>

<h2>3. Sécurité & confidentialité : le piège de l'opt-out</h2>
<p>C'est le sujet le plus mal compris, et le plus risqué pour qui travaille avec des données réelles.</p>
<div class="card"><p><strong>« Opt-out entraînement » ne veut PAS dire « privé ».</strong> Cocher la case qui refuse l'entraînement bloque seulement l'usage <strong>futur</strong> de vos échanges pour entraîner le modèle. Vos données <strong>transitent et sont stockées quand même</strong> sur les serveurs de l'éditeur (rétention de quelques jours à plusieurs semaines). Tout passe par le cloud : texte, fichier, image, voix, écran.</p></div>
<p>Les vrais refuges, quand la donnée est sensible :</p>
<ul>
<li><strong>Comptes Business / Team / API</strong> — généralement <strong>non entraînés par défaut</strong>, pensés pour l'usage professionnel. C'est le bon niveau pour des données d'entreprise ou de clients.</li>
<li><strong>IA 100 % locale</strong> — avec <strong>Ollama</strong> (ligne de commande) ou <strong>LM Studio</strong> (interface graphique), le modèle tourne sur votre machine et <strong>rien ne sort</strong>. Fin 2026, le niveau est très bon sur du matériel grand public (16 Go de RAM pour les petits modèles, une carte graphique 24 Go pour le confort).</li>
</ul>
<div class="card hi"><p style="font-size:1.1rem;color:#fff"><strong>Le réflexe : anonymiser</strong></p>
<p>Avant de coller un document, retirez les noms, adresses, numéros, montants identifiants. Vous gardez 99 % de l'utilité sans exposer qui que ce soit.</p>
<p>Et la ligne rouge, quel que soit l'outil : <strong>jamais de mots de passe, de données médicales, de données clients</strong> dans une IA grand public.</p></div>

<h2>4. Les 10 pièges à éviter</h2>
<p>Presque toutes les mauvaises expériences avec l'IA viennent de l'un de ces dix réflexes. Lisez-les une fois, relisez-les quand quelque chose coince.</p>
<ol>
<li><strong>Croire l'IA sur un fait sans vérifier</strong> — elle invente avec aplomb (hallucination). Un chiffre, une source, une date : on recoupe.</li>
<li><strong>Coller du confidentiel</strong> — mots de passe, données clients ou médicales dans une IA grand public. Jamais.</li>
<li><strong>Oublier de préciser le format voulu</strong> — sans « en 5 points », « tableau », « 10 lignes max », vous subissez le format par défaut.</li>
<li><strong>Ne pas donner de contexte</strong> — qui vous êtes, pour qui, dans quel but. Sans ça, la réponse reste générique.</li>
<li><strong>Abandonner au premier essai</strong> — la première réponse est un brouillon. On ajuste, on relance, on affine.</li>
<li><strong>Croire que ça remplace votre jugement</strong> — l'IA propose, vous décidez. La responsabilité finale reste la vôtre.</li>
<li><strong>Publier un contenu IA sans le mentionner quand c'est requis</strong> — la transparence est devenue une obligation légale sur certains contenus (voir le module cadre légal).</li>
<li><strong>Négliger les réglages de confidentialité</strong> — on les ouvre une fois, on choisit l'opt-out, on comprend ce qu'il protège vraiment (et ce qu'il ne protège pas).</li>
<li><strong>Rester en gratuit alors qu'on l'utilise tous les jours</strong> — vous vous privez des bons modèles pour économiser 20 $ sur un outil devenu quotidien.</li>
<li><strong>Tout demander à une seule IA</strong> — vous héritez de ses faiblesses sur chaque tâche. Le bon outil pour le bon moment.</li>
</ol>

<h2>5. La checklist : le réflexe Altitude</h2>
<p>À garder sous la main. Relisez-la avant tout usage un peu sérieux — un livrable, un contenu publié, un document sensible.</p>
<div class="pr"><pre>LE RÉFLEXE ALTITUDE — à relire avant chaque usage sérieux

1. Quelle est la NATURE de ma tâche ? (rédiger / chercher / sensible)
   -> je choisis l'outil en conséquence, pas par habitude.
2. Ai-je donné du CONTEXTE ? (qui je suis, pour qui, dans quel but)
3. Ai-je imposé un FORMAT clair ? (longueur, structure, ton)
4. Est-ce CONFIDENTIEL ? -> anonymiser, ou compte non entraîné, ou local.
5. Jamais de mot de passe / donnee medicale / donnee client.
6. Le résultat contient un FAIT, un chiffre, une source ? -> je vérifie.
7. Première réponse = brouillon -> j'ajuste et je relance si besoin.
8. Je garde le JUGEMENT final : l'IA propose, je décide.
9. Contenu publié : dois-je MENTIONNER l'IA ? (obligation sur certains cas)
10. Cet usage est quotidien ? -> le palier payant devient rentable.</pre><button class="copy">Copier</button></div>

<p>Vous avez maintenant le socle, les outils, et la tête froide pour les utiliser. L'IA n'est pas magique : c'est un multiplicateur de ce que vous savez déjà faire. Bien pilotée, elle vous fait gagner des heures. Mal pilotée, elle vous fait perdre confiance. Toute la différence tient dans ces réflexes.</p>
<div class="tip">💡 Dernier conseil : revenez à cette checklist dans un mois. Ce qui vous paraît aujourd'hui une liste de consignes sera devenu un automatisme — et c'est à ce moment-là que l'IA commence vraiment à travailler pour vous.</div>
`
};
