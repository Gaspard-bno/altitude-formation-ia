window.CONTENT = window.CONTENT || {fr:{}, pt:{}};
CONTENT.fr.m4 = {
  title:"Créer : image, vidéo, voix, slides & sites",
  level:"Intermédiaire",
  summary:"Les bons outils pour fabriquer des images nettes, des vidéos crédibles, des voix, des présentations et même des sites — et la méthode qui change tout : faire écrire le prompt par l'IA.",
  html:`
<p>Vous savez parler à l'IA. On passe maintenant à la fabrication : images, vidéos, voix, slides, sites. Chaque famille a ses outils de référence (état au 20/10/2026) et surtout une méthode. La plus importante tient en une phrase : <strong>plus le média est complexe, plus c'est à l'IA d'écrire le prompt, pas à vous</strong>.</p>
<div class="obj"><b>Objectif.</b> À la fin, vous savez quel outil ouvrir pour quel besoin, vous rédigez (ou faites rédiger) un prompt qui tient la route, et vous évitez le fameux « effet IA » qui trahit un contenu bâclé.</div>

<h2>Image : 4 outils, 4 usages</h2>
<p>Il n'y a pas un « meilleur » générateur, il y a l'outil adapté à votre besoin. Les quatre qui comptent aujourd'hui :</p>
<div class="card"><p><strong>Nano Banana Pro</strong> (Google, dans l'app Gemini) — LA référence quand il faut du <strong>texte lisible dans l'image</strong> (affiche, post, visuel avec slogan) et un rendu pro. Gratuit avec filigrane dans Gemini.<br>
<strong>Midjourney</strong> — l'esthétique la plus léchée, pour des visuels « beaux » et artistiques. Abonnement 10 à 120 $, texte dans l'image faible.<br>
<strong>Ideogram</strong> — spécialiste de la <strong>typographie</strong> et des logos textuels.<br>
<strong>FLUX.2</strong> — bon rapport qualité/prix, et sa version « klein » est <strong>open-weight</strong> : installable sur votre machine, rien ne part dans le cloud.</p></div>
<div class="tip">💡 Gratuit vs payant : le gratuit suffit pour tester et apprendre (souvent avec filigrane ou quota quotidien). Le payant sert quand vous produisez pour un client : plus de résolution, pas de filigrane, et surtout un cadre de droits plus clair.</div>

<span class="step">À vous · 4 min</span>
<h3>Générez une image précise</h3>
<p>Ouvrez un générateur d'images et demandez-lui, en une phrase simple et spontanée, « une photo d'un café le matin ». Regardez le résultat. Puis essayez d'obtenir <em>exactement</em> l'image que vous aviez en tête. Vous allez tâtonner — c'est voulu.</p>

<span class="step reveal">Le bon prompt</span>
<p>Un prompt image solide répond à 5 questions : <strong>sujet, style, cadrage, lumière, et ce qu'il NE faut PAS</strong>. Comparez votre essai à celui-ci :</p>
<div class="pr"><pre>Une tasse de café fumant posée sur une table en bois clair, près d'une fenêtre.
Style : photographie, objectif 50mm, faible profondeur de champ (arrière-plan flou).
Cadrage : gros plan légèrement en plongée.
Lumière : douce, matinale, qui entre par la fenêtre à gauche.
Ambiance : calme, chaleureuse.
À éviter : personne dans le cadre, texte, logo, couleurs saturées, aspect 3D ou cartoon.</pre><button class="copy">Copier</button></div>
<p>La différence n'est pas le talent : c'est la <strong>précision</strong>. « Ce qu'il ne faut pas » est souvent ce qui sauve l'image (le fameux rendu « plastique » vient presque toujours d'un prompt trop vague).</p>

<h2>Vidéo : laissez l'IA écrire le prompt</h2>
<p>La vidéo est le média le plus difficile : il faut décrire un mouvement, une caméra, un rythme, parfois un son. Un prompt vidéo réussi est long, technique et précis — exactement le genre de texte qu'on rate quand on débute. D'où le principe central de ce module :</p>
<div class="card hi"><p style="font-size:1.15rem;color:#fff"><strong>Ne rédigez pas le prompt vidéo vous-même. Faites-le écrire par une IA de texte.</strong></p>
<p>Vous décrivez votre idée en français simple à ChatGPT, Claude ou Gemini ; <em>lui</em> la transforme en prompt structuré pour l'outil vidéo. C'est plus rapide, plus complet, et le résultat est nettement meilleur.</p></div>

<p>Les outils de référence aujourd'hui :</p>
<ul>
<li><strong>Google Veo 3.1 / Flow</strong> — souvent considéré comme le meilleur global, avec <strong>audio natif</strong> (il génère le son avec l'image).</li>
<li><strong>Kling 3.0</strong> — le meilleur rapport prix/seconde, clips de 10-15 s.</li>
<li><strong>Seedance</strong> — audio et vidéo joints, lip-sync multilingue.</li>
<li><strong>Higgsfield</strong> — un <strong>agrégateur</strong> : un seul abonnement (pool de crédits) pour accéder à 50+ modèles et comparer.</li>
</ul>
<div class="tip">⚠️ <strong>Sora 2 d'OpenAI</strong> est signalé comme arrêté par plusieurs sources (non confirmé officiellement) : ne comptez pas dessus pour l'instant, vérifiez avant de vous y abonner.</div>

<span class="step">À vous · 3 min</span>
<h3>Faites rédiger votre prompt vidéo</h3>
<p>Ouvrez ChatGPT (ou Claude, Gemini) et collez ceci — en remplaçant seulement l'idée entre crochets :</p>
<div class="pr"><pre>Tu es expert en génération de vidéo IA. Je veux créer un clip court avec Veo.
Mon idée : [un drone qui survole une côte bretonne au lever du soleil].
Rédige-moi un prompt vidéo complet et prêt à coller, en précisant :
- le sujet et l'action principale,
- le mouvement de caméra (travelling, plan fixe, drone…),
- la lumière et l'ambiance,
- le style visuel (cinématographique, documentaire…),
- la durée visée (clip court, 5 à 8 secondes),
- ce qu'il faut éviter (texte à l'écran, déformations, transitions brusques).
Donne-moi UNIQUEMENT le prompt final, en anglais, prêt à copier.</pre><button class="copy">Copier</button></div>

<span class="step reveal">Pourquoi ça marche</span>
<p>Vous venez de déléguer la partie technique à une IA qui la maîtrise, en gardant la main sur l'idée. C'est la bonne division du travail : <strong>vous = l'intention, l'IA = la formulation experte</strong>. Vous n'avez plus à connaître le jargon « travelling » ou « profondeur de champ » : vous le demandez.</p>
<div class="card"><p><strong>L'« effet IA » en vidéo</strong> — trois réflexes pour l'éviter :</p>
<ul>
<li>Visez des <strong>clips courts</strong> (5-8 s). Plus c'est long, plus les défauts apparaissent (mains, visages, objets qui se déforment).</li>
<li>Soignez le prompt (vous venez de le faire) : un prompt riche = moins de ratés.</li>
<li>Acceptez de <strong>relancer plusieurs fois</strong>. Comptez 3 à 5 essais pour 1 clip exploitable — c'est normal, budgétez-le.</li>
</ul></div>

<h2>Voix & audio</h2>
<div class="card"><p><strong>ElevenLabs</strong> — la référence pour la voix de synthèse (narration, voix off). Gratuit ~10 000 crédits/mois, puis payant dès 6 $.<br>
<strong>Suno / Udio</strong> — pour générer de la musique à partir d'une description.</p></div>
<div class="tip">⚠️ <strong>Droits commerciaux.</strong> Le gratuit est souvent <strong>sans droits d'usage commercial</strong> : parfait pour tester, interdit pour une vidéo client ou une pub. Sur Suno par exemple, les droits ne viennent qu'avec l'offre payante. Vérifiez toujours avant de publier.</div>

<h2>Slides, docs & sites — sans coder</h2>
<p>L'IA ne sert pas qu'à l'image : elle fabrique aussi vos supports professionnels.</p>
<div class="card"><p><strong>Gamma</strong> — vous écrivez un sujet, il génère une présentation complète (deck). Gratuit en version limitée (avec filigrane).<br>
<strong>Canva IA</strong> — le meilleur usage gratuit au quotidien pour visuels, posts et docs.<br>
<strong>Lovable / v0</strong> — vous décrivez un site ou une petite application, l'IA l'écrit et le met en ligne, <strong>sans que vous codiez</strong>. Comptez ~25-30 $/mois en payant.</p></div>

<span class="step">À vous · 2 min</span>
<h3>Un deck en une phrase</h3>
<p>Ouvrez Gamma et collez :</p>
<div class="pr"><pre>Crée une présentation de 6 diapositives pour présenter mon activité à un nouveau client.
Sujet : [décris ton activité en une phrase].
Ton : professionnel et chaleureux. Public : dirigeant non technique.
Structure : qui je suis, le problème que je résous, ma méthode, 2 exemples, l'offre, comment me contacter.
Langue : français.</pre><button class="copy">Copier</button></div>
<span class="step reveal">Ce qu'il faut retenir</span>
<p>Vous obtenez un brouillon en 30 secondes. Comme toujours : <strong>l'IA fait le brouillon, vous gardez le jugement</strong> — on relit, on corrige les faits, on ajuste le ton. Jamais de livraison brute.</p>

<h2>Le cadre légal, en une ligne</h2>
<div class="card hi"><p style="color:#fff">Depuis le 2 août 2026, l'<strong>AI Act</strong> (Art. 50) impose de <strong>signaler un contenu généré par IA</strong> dans certains cas (notamment les deepfakes). Ce n'est pas une obligation d'étiqueter tout ce que vous créez, mais une règle à connaître dès que vous publiez.</p>
<p>Le détail (droit d'auteur, mentions, usage commercial) est traité dans le <strong>module business</strong>. Ici, retenez juste le réflexe : contenu trompeur ou deepfake = on le signale.</p></div>

<div class="tip">💡 À retenir du module : un outil par besoin (texte dans l'image → Nano Banana Pro ; esthétique → Midjourney ; vidéo → Veo/Kling + prompt écrit par l'IA ; voix → ElevenLabs ; deck → Gamma). Et la règle qui vaut pour tout : testez en gratuit, vérifiez les droits avant de publier, acceptez plusieurs essais.</div>
`
};
