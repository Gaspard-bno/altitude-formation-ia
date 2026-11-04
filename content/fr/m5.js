window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.fr.m5 = {
  title:"20 projets concrets du quotidien",
  level:"Débutant",
  summary:"20 recettes prêtes à copier-coller — perso, pro, créatif, apprentissage — pour faire vraiment des choses avec l'IA dès aujourd'hui.",
  html:`
<p>Assez de théorie. Ce module est une boîte à outils : 20 situations réelles, chacune avec un prompt déjà écrit. Vous n'avez qu'à copier, remplacer les <code>[crochets]</code> par votre vraie situation, et regarder ce qui sort. L'idée n'est pas de tout faire — c'est de réaliser, exemple après exemple, à quel point c'est devenu <strong>facile</strong>.</p>
<div class="obj"><b>Objectif.</b> Repartir avec au moins 3 prompts que vous réutiliserez cette semaine. Piochez ce qui vous parle, ignorez le reste. Chaque recette tient en 4 lignes : un titre, à quoi ça sert, le prompt à coller, et une variante pour aller plus loin.</div>

<h2>Au quotidien</h2>

<h3>1. Planifier un voyage</h3>
<p>Un programme jour par jour, avec budget et bonnes adresses, en une minute.</p>
<div class="pr"><pre>Tu es mon agent de voyage. Organise un séjour de [nombre] jours à [destination], du [date] au [date], pour [nombre] personnes, budget [montant].
Donne un programme jour par jour (matin / midi / soir) : quartier où dormir, activités, 2 restos adaptés à [préférences alimentaires], temps de trajet entre chaque étape, et un budget estimé par poste.
Format : un tableau par jour.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « optimise pour voyager avec des enfants / en petit budget / pour la photo ».</p>

<h3>2. Trier et répondre à ses mails</h3>
<p>Comprendre un mail en 3 points et obtenir une réponse prête à envoyer.</p>
<div class="pr"><pre>Voici un mail que j'ai reçu (collé plus bas). Fais trois choses :
1) résume-le en 3 points ; 2) dis-moi clairement ce qu'on attend de moi ;
3) propose 2 réponses : une courte et polie, une plus détaillée.
Ton : [professionnel / amical]. Signé : [prénom].

[colle le mail ici]</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « voici 10 mails, classe-les par urgence et dis-moi lesquels je peux ignorer ».</p>

<h3>3. Faire un budget mensuel</h3>
<p>Une répartition réaliste de votre argent, et où couper pour économiser.</p>
<div class="pr"><pre>Aide-moi à faire un budget mensuel.
Revenus : [montant]. Dépenses fixes : [loyer, abonnements, transport…].
Objectif : économiser [montant] par mois.
Propose une répartition réaliste, repère 3 postes où je peux réduire, et présente tout dans un tableau clair.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « simule mon budget si mes revenus passent à [montant] ».</p>

<h3>4. Préparer les repas de la semaine</h3>
<p>Un menu complet sur 7 jours + la liste de courses rangée par rayon.</p>
<div class="pr"><pre>Propose un menu pour [nombre] personnes sur 7 jours (midi et soir).
Cuisine [type], budget [montant], en évitant [allergies / aliments].
Pour chaque jour : le plat + le temps de préparation.
À la fin, donne UNE liste de courses regroupée par rayon.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « fais revenir 3 ingrédients toute la semaine pour éviter le gaspillage ».</p>

<h3>5. Analyser une photo ou un document</h3>
<p>Faire lire à l'IA une image, un ticket, un écran — et répondre à votre question.</p>
<div class="pr"><pre>Analyse l'image que je te montre.
Décris ce que tu vois, repère [ce qui m'intéresse : erreurs, infos clés, anomalies], puis réponds à : [ta question].
Si tu n'es pas sûr d'un détail, dis-le plutôt que d'inventer.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « recopie-moi le texte / les chiffres de ce document photographié dans un tableau ».</p>

<h2>Au travail</h2>

<h3>6. Résumer un PDF de 40 pages</h3>
<p>L'essentiel d'un long document sans tout lire — sans rien inventer.</p>
<div class="pr"><pre>Je te donne un document de [nombre] pages (collé / joint plus bas). Fais :
1) un résumé en 10 lignes ; 2) les 5 idées les plus importantes en liste ;
3) les chiffres et dates clés ; 4) ce que je retiens si je n'ai que 30 secondes.
N'invente rien : si une info n'est pas dans le texte, dis « non précisé ».

[colle le texte ici]</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « réponds seulement à : [ma question précise], en citant la page ».</p>

<h3>7. Préparer un entretien</h3>
<p>S'entraîner avec un recruteur qui vous pose de vraies questions, une par une.</p>
<div class="pr"><pre>Je passe un entretien pour le poste de [intitulé] chez [entreprise / secteur].
Joue le recruteur : pose-moi 8 questions, de la plus simple à la plus difficile, UNE À LA FOIS, et attends ma réponse avant la suivante.
À la fin, fais-moi un retour honnête : points forts et 3 choses à améliorer.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « donne-moi d'abord les 5 questions pièges du secteur avec une trame de réponse ».</p>

<h3>8. Préparer une négociation (brouillon)</h3>
<p>Un message argumenté pour demander une remise, un délai, une clause.</p>
<div class="pr"><pre>Voici les points d'un contrat / devis que je veux négocier : [liste].
Rédige un mail poli mais ferme pour demander [réduction / délai / modification], avec 2 arguments solides par point. Ton pro et ouvert à la discussion.
C'est un brouillon : je relirai tout avant d'envoyer.

[colle le contexte ici]</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « ajoute une version de repli si l'autre partie refuse ».</p>

<h3>9. Rédiger une fiche de poste</h3>
<p>Une annonce claire et attractive, structurée du premier coup.</p>
<div class="pr"><pre>Rédige une fiche de poste pour [intitulé] dans [type d'entreprise].
Structure : mission en 2 lignes · responsabilités (6 puces) · profil recherché (indispensable / apprécié) · ce qu'on offre.
Ton [attractif / sérieux], sans jargon inutile.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « adapte-la en annonce courte et percutante pour LinkedIn ».</p>

<h3>10. Nettoyer un tableau Excel</h3>
<p>Des données en vrac transformées en tableau propre et exploitable.</p>
<div class="pr"><pre>Je colle un tableau en vrac. Nettoie-le :
corrige les formats de dates et de nombres, uniformise les intitulés, repère les doublons et les valeurs manquantes.
Rends-moi le tableau propre, puis la liste de ce que tu as corrigé.

[colle les données ici]</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « donne-moi la formule Excel / Google Sheets pour calculer [ce que tu veux] ».</p>

<h2>Pour créer</h2>

<h3>11. Créer un visuel d'annonce</h3>
<p>Une affiche ou un post propre, avec le texte bien lisible dessus.</p>
<div class="pr"><pre>Génère un visuel d'annonce pour [événement / produit].
Format [carré Instagram / story 9:16].
Texte à afficher EXACTEMENT : « [titre] » et « [date / lieu] ».
Style : [moderne / coloré / épuré]. Couleurs : [palette]. Rendu pro, texte lisible et sans fautes.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « décline-le en 3 versions de couleurs ». Astuce : pour du texte net dans l'image, une IA comme Gemini (Nano Banana Pro) est la plus fiable.</p>

<h3>12. Réécrire un texte</h3>
<p>Rendre un message plus clair, plus court ou mieux ciblé, sans en perdre le sens.</p>
<div class="pr"><pre>Réécris le texte ci-dessous pour qu'il soit [plus clair / plus court / plus pro / plus chaleureux].
Garde le sens et les infos, enlève le superflu, corrige les fautes.
Donne la version réécrite, puis en une ligne ce que tu as changé.

[colle ton texte ici]</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « propose 3 versions : neutre, enthousiaste, formelle ».</p>

<h3>13. Écrire un discours</h3>
<p>Un texte fait pour être dit à voix haute : mariage, départ, remise de prix.</p>
<div class="pr"><pre>Écris un discours de [durée] pour [occasion].
Je m'adresse à [personne / public]. Ton : [émouvant / drôle / sobre].
À inclure : [anecdote, remerciements, message clé].
Écris pour être LU à voix haute : phrases courtes, respirations, pas de mots trop compliqués.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « donne-moi juste le plan + une accroche forte, je rédige le reste ».</p>

<h3>14. Générer des idées de contenu</h3>
<p>Ne plus jamais être à court d'idées pour vos réseaux ou votre blog.</p>
<div class="pr"><pre>Je crée du contenu sur [sujet] pour [plateforme].
Propose 15 idées de publications qui donnent envie de cliquer, variées (conseil, erreur courante, avant / après, question, coulisses).
Pour chacune : un titre accrocheur + l'angle en une ligne.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « développe l'idée n°[x] en script complet prêt à tourner ».</p>

<h3>15. Monter un mini-site perso</h3>
<p>Une page portfolio ou événement, sans coder, textes inclus.</p>
<div class="pr"><pre>Explique-moi, étape par étape, comment créer un mini-site perso (portfolio / page d'événement) sans coder, avec un outil comme [Canva / Lovable].
Puis rédige directement les textes de mes pages : accueil, à propos, contact, pour [mon activité]. Ton [pro / perso].</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « génère les textes en français ET en anglais ».</p>

<h2>Pour apprendre</h2>

<h3>16. Se faire un prof particulier</h3>
<p>Un cours sur mesure sur n'importe quel sujet, à votre rythme.</p>
<div class="pr"><pre>Sois mon prof particulier sur [sujet]. Je pars de [zéro / niveau].
Fais un plan en 5 étapes, puis commence l'étape 1 : explique simplement, donne un exemple concret, et pose-moi une question pour vérifier que j'ai compris avant de passer à la suite.</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « explique-moi comme si j'avais 12 ans, avec une analogie du quotidien ».</p>

<h3>17. Fabriquer un quiz de révision</h3>
<p>Transformer un cours en quiz interactif pour mémoriser vraiment.</p>
<div class="pr"><pre>À partir du contenu ci-dessous, crée un quiz de 10 questions pour réviser.
Mélange QCM et questions ouvertes, du plus facile au plus dur.
Pose-les UNE À LA FOIS, corrige ma réponse à chaque fois, puis donne mon score final et les points à retravailler.

[colle ton cours ici]</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « transforme ça en fiches recto / verso (question d'un côté, réponse de l'autre) ».</p>

<h3>18. Traduire et adapter</h3>
<p>Une traduction qui sonne naturelle, pas du mot-à-mot robotique.</p>
<div class="pr"><pre>Traduis le texte ci-dessous en [langue].
Ne traduis pas mot à mot : adapte le ton et les expressions pour que ça sonne naturel pour un [public / pays].
Garde le sens et le niveau de politesse, et signale les passages intraduisibles.

[colle le texte ici]</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « donne-moi aussi la prononciation simple des 5 phrases les plus utiles ».</p>

<h3>19. Bâtir un planning sport</h3>
<p>Un programme progressif adapté à votre objectif et votre matériel.</p>
<div class="pr"><pre>Fais-moi un programme sportif sur [nombre] semaines.
Objectif : [perdre du poids / courir 10 km / me muscler]. Niveau : [débutant].
Je peux m'entraîner [nombre] fois par semaine, [durée] par séance, avec [à la maison / salle / matériel].
Donne un planning semaine par semaine, progressif et réaliste. (Je validerai avec un pro de santé en cas de doute.)</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « prévois des alternatives les jours où j'ai mal quelque part ou pas le temps ».</p>

<h3>20. Transformer des docs en podcast</h3>
<p>Écouter vos propres documents résumés comme une émission, grâce à NotebookLM.</p>
<div class="pr"><pre>[Dans NotebookLM, après avoir importé mes documents]
Génère un Audio Overview (podcast) en français qui explique les points clés de mes sources comme une discussion entre deux voix.
Durée [courte / moyenne], accessible à un débutant, en insistant sur [ce qui m'intéresse].</pre><button class="copy">Copier</button></div>
<p><strong>Variante :</strong> « fais plutôt une vidéo explicative (Video Overview) ou un résumé écrit avec les sources ».</p>

<div class="tip">💡 La seule méthode à retenir : <strong>copiez le prompt, remplacez les [crochets]</strong> par votre vraie situation, puis <strong>ajustez</strong> la réponse en dialoguant (« plus court », « change le ton », « refais le point 2 »). C'est normal de reformuler une ou deux fois — c'est là que le résultat devient bon.</div>
`
};
