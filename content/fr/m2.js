window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.fr.m2 = {
  title:"Penser contexte, pas prompt",
  level:"Débutant",
  summary:"La bascule qui change tout : arrêter de chercher la formule magique, apprendre à donner du contexte. La recette RCOF, le master prompt, la technique du QCM, et le profil qu'on règle une fois pour toutes.",
  html:`
<p>C'est le module le plus important de la formation. La plupart des gens pensent qu'il existe des « prompts magiques » secrets. Il n'y en a pas. Ce qui fait la différence entre une réponse médiocre et une réponse excellente, ce n'est pas une formule : c'est le <strong>contexte</strong> que vous donnez.</p>
<div class="obj"><b>Objectif.</b> À la fin de ce module, vous saurez transformer n'importe quelle demande vague en une consigne claire avec la recette RCOF, vous aurez un master prompt réutilisable, et vous aurez réglé votre profil une seule fois pour que l'IA vous connaisse partout.</div>

<h2>La bascule mentale</h2>
<p>Une IA ne lit pas dans vos pensées. Elle ne travaille qu'avec ce que vous mettez dans le message. Si vous écrivez « fais-moi un mail », elle doit <em>deviner</em> le destinataire, le ton, le but, la longueur. Elle devine mal, et vous êtes déçu.</p>
<p>Le réflexe du débutant : reformuler encore et encore, en cherchant la bonne tournure. Le réflexe du pro : <strong>ajouter du contexte</strong>. Qui parle, à qui, pour obtenir quoi, sous quelle forme. Une demande banale avec un bon contexte bat toujours une « formule magique » sans contexte.</p>
<div class="card hi"><p><strong>À retenir : une réponse médiocre n'est presque jamais la faute de l'IA. C'est un manque de contexte.</strong></p>
<p>Avant de râler sur une réponse ratée, demandez-vous : est-ce que j'aurais pu répondre à ma propre demande sans rien deviner ? Si non, l'IA non plus.</p></div>

<h2>La recette RCOF</h2>
<p>Pour ne plus jamais rester devant la page blanche, une seule recette à mémoriser. Quatre lettres : <strong>R.C.O.F.</strong></p>
<div class="card"><p><strong>R — Rôle.</strong> Qui l'IA doit-elle incarner ? « Tu es un conseiller bancaire », « Tu es un prof de maths patient ». Le rôle oriente le vocabulaire et le niveau.<br>
<strong>C — Contexte.</strong> La situation, les contraintes, ce qu'il faut savoir. « J'écris à un client mécontent qui attend sa commande depuis 3 semaines. »<br>
<strong>O — Objectif.</strong> Le résultat attendu, précis. « Le rassurer et proposer un geste commercial, sans promettre de date. »<br>
<strong>F — Format.</strong> La forme de sortie. « Un mail de 8 lignes, ton chaleureux, tutoiement, avec un objet. »</p></div>
<p>On n'a pas toujours besoin des quatre. Mais plus l'enjeu est élevé, plus vous les remplissez.</p>

<h3>Avant / après</h3>
<p><strong>Avant (sans RCOF) :</strong> <code>Écris un post pour annoncer ma formation.</code> → l'IA produit un texte générique, plat, qui pourrait vendre n'importe quoi.</p>
<p><strong>Après (avec RCOF) :</strong></p>
<div class="pr"><pre>Tu es un copywriter spécialisé en réseaux sociaux (RÔLE).
Je lance une formation en ligne pour débutants qui veulent apprendre à utiliser l'IA au quotidien, sans jargon. Mon audience a entre 30 et 55 ans et se sent souvent dépassée par la technique (CONTEXTE).
Objectif : donner envie de s'inscrire, en rassurant sur le fait que c'est accessible (OBJECTIF).
Format : un post LinkedIn de 120 mots maximum, ton chaleureux et direct, une accroche forte en première ligne, pas d'emoji, termine par un appel à l'action clair (FORMAT).</pre><button class="copy">Copier</button></div>
<p>Même IA, même sujet. La seule différence, c'est le contexte. Et le résultat n'a rien à voir.</p>

<h2>Le master prompt (et l'ultra prompt)</h2>
<p>Un <strong>master prompt</strong> est un prompt riche et complet que vous gardez sous la main et que vous réadaptez à chaque fois, au lieu de repartir de zéro. Un <strong>ultra prompt</strong> va encore plus loin : il ajoute des exemples, des contraintes négatives (« ne fais surtout pas X ») et des critères de qualité. Plus c'est détaillé, plus c'est précis.</p>
<p>Voici un master prompt générique. Collez-le, puis remplacez les crochets par votre situation. Gardez-le dans une note, c'est votre gabarit à vie.</p>
<div class="pr"><pre>Tu es [RÔLE : ex. un rédacteur professionnel / un consultant / un prof].

Contexte : [décris ta situation, ton métier, ton audience, les contraintes importantes].

Ta mission : [ce que tu veux obtenir, précisément].

Format de réponse : [longueur, ton, langue, structure attendue].

Contraintes : [ce qu'il NE faut PAS faire].

Avant de rédiger, si une information te manque pour faire du très bon travail, pose-moi les questions nécessaires. Sinon, propose-moi d'abord un plan en 3 points, puis attends mon feu vert.</pre><button class="copy">Copier</button></div>

<h2>La technique des MAJUSCULES</h2>
<p>Un mot écrit en capitales attire l'attention du modèle : il pèse davantage dans la consigne. Utilisez-le avec parcimonie, sur ce qui compte vraiment.</p>
<ul>
<li><code>Réponds UNIQUEMENT en français.</code></li>
<li><code>Maximum 5 lignes. JAMAIS plus.</code></li>
<li><code>Ne donne AUCUN chiffre que tu n'es pas sûr de connaître.</code></li>
</ul>
<p>Si vous mettez tout en majuscules, plus rien ne ressort. Réservez-les à 2 ou 3 mots clés par prompt.</p>

<h2>La technique du QCM</h2>
<p>C'est la technique qui fait passer un débutant pour un expert. Quand votre besoin est flou, ou que vous visez la perfection, ne demandez pas tout de suite le résultat. Demandez d'abord à l'IA de <strong>vous poser des questions</strong>.</p>
<div class="pr"><pre>J'ai besoin de [décris ton besoin en une phrase].
Avant de produire quoi que ce soit, pose-moi 5 à 10 questions, une par une ou en liste numérotée, pour cerner exactement ce dont j'ai besoin : objectif, audience, ton, contraintes, exemples à éviter.
Quand j'aurai répondu, fais-moi une proposition.</pre><button class="copy">Copier</button></div>
<p>C'est contre-intuitif mais redoutable : vous laissez l'IA construire le contexte avec vous, au lieu de tout deviner seul. C'est le principe « une IA qui parle à une IA » — on utilise le modèle pour s'interroger lui-même et clarifier la demande avant d'exécuter. Vous répondez à ses questions, et la réponse finale est taillée sur mesure.</p>

<h2>Se régler une fois pour toutes</h2>
<p>Réécrire son contexte à chaque conversation, c'est épuisant. Les grandes IA permettent de l'enregistrer une bonne fois. Trois leviers à connaître :</p>
<div class="card"><p><strong>Instructions personnalisées.</strong> Un espace dans les réglages où vous décrivez qui vous êtes, ce que vous faites, comment vous voulez qu'on vous réponde. L'IA le réapplique à toutes vos conversations.<br>
<strong>Mémoire.</strong> L'IA retient des faits sur vous au fil des échanges (chez Claude comme chez ChatGPT, activable dans les réglages). Vous pouvez la consulter, la corriger, l'effacer.<br>
<strong>Projects / Projets.</strong> Des espaces dédiés à un sujet (un client, un cours, un produit) avec leurs propres instructions et fichiers. Tout ce que vous y faites hérite de ce contexte.</p></div>
<div class="tip">💡 Vie privée : ce que vous mettez en instructions ou en mémoire part sur les serveurs de l'éditeur. N'y mettez jamais de mot de passe, de données médicales ou de données clients sensibles. On y revient dans le module confidentialité.</div>

<span class="step">À vous · 3 min · exercice 1</span>
<h3>Demandez un mail</h3>
<p>Ouvrez votre IA et écrivez, naïvement, comme vous le feriez spontanément :</p>
<div class="pr"><pre>Écris-moi un mail pour décaler un rendez-vous.</pre><button class="copy">Copier</button></div>
<p>Lisez la réponse. Elle est correcte… mais vide : elle ne sait ni à qui, ni pourquoi, ni pour quand.</p>
<span class="step reveal">Le même, avec RCOF</span>
<p>Maintenant, relancez avec du contexte. Adaptez les crochets à votre vraie situation :</p>
<div class="pr"><pre>Tu es mon assistant personnel (RÔLE).
Je dois décaler un rendez-vous pro avec [prénom], prévu [jour/heure], parce qu'un imprévu m'en empêche. Nous nous tutoyons et la relation est cordiale (CONTEXTE).
Objectif : proposer poliment deux nouveaux créneaux et m'excuser sans en faire trop (OBJECTIF).
Format : un mail court (6 lignes max), ton chaleureux mais pro, avec un objet. Réponds UNIQUEMENT le mail, rien d'autre (FORMAT).</pre><button class="copy">Copier</button></div>
<p>Comparez les deux. Vous venez de voir, en direct, que le contexte fait 90 % du travail.</p>

<span class="step">À vous · 5 min · exercice 2</span>
<h3>Rédigez votre profil</h3>
<p>En 4 lignes, dans votre IA, décrivez-vous : votre métier, votre audience, comment vous aimez qu'on vous réponde. Ne cherchez pas la perfection, jetez l'idée.</p>
<span class="step reveal">Le profil complet à coller dans vos instructions personnalisées</span>
<p>Utilisez l'IA pour fabriquer un profil propre. Collez ce prompt, répondez à ses questions, puis copiez le résultat dans <strong>Réglages → Instructions personnalisées</strong> :</p>
<div class="pr"><pre>Aide-moi à rédiger mon profil pour tes instructions personnalisées.
Pose-moi d'abord 6 questions, une par une, pour cerner : mon métier, mon audience, mes projets en cours, mon niveau en IA, le ton que je préfère, et ce que tu dois TOUJOURS ou JAMAIS faire quand tu me réponds.
Quand j'ai répondu, rédige un profil clair à la première personne, en moins de 150 mots, prêt à coller dans les réglages.</pre><button class="copy">Copier</button></div>
<div class="tip">💡 Une fois ce profil enregistré, chaque nouvelle conversation démarre déjà avec votre contexte. Vous venez de régler, en 5 minutes, un confort que vous garderez des années.</div>
`
};
