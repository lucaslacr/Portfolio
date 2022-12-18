<template>
    <div>
        <div class="banniere">
            <Menu />
            <div class="margium-l marge-haute-l">
                <div class="espacium">
                    <h1>BlueCake</h1>
                    <div class="colonnes">
                        <div class="colonne">
                            <div class="projettitre">Contexte</div>
                            Projet libre,<br> 2015 à 2016 - 2020 à 2022
                        </div>

                        <div class="colonne">
                            <div class="projettitre">Savoir-faire</div>
                            Gestion de projet, UI design, tournage, montage vidéo
                        </div>
                        <div class="colonne">
                            <div class="projettitre">Équipe</div>
                            <a href="https://fr.linkedin.com/in/martin-lorgnier" target="_blank">Martin Lorgnier</a>
                        </div>
                        <div class="colonne">
                            <a href="https://bluecakecuisine.fr" class="lienapp" target="_blank">Voir le site web</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <article class="margium-l marge-haute-l marge-basse-l">
            <div class="espacium">
                <div class="coldroite">
                    <p>BlueCake ou BlueCake cuisine est une chaîne YouTube et un site web de recettes de cuisine. Créé
                        en 2015, elle a produit 40 vidéos entre 2015 et 2016. En 2021, le projet est relancé par une
                        nouvelle saison de vidéo avec un montage vidéo plus moderne et facilitant. L'année qui a suivi a
                        fait l'objet d'une nouvelle identité graphique, d'un nouveau site web. La chaîne a atteint les
                        10k abonnées avec plus de 1.9 Million de vues.</p>
                    <h2>Les vidéos</h2>
                    <div class="container">
                        <iframe class="video" width="720" height="405"
                            src="https://www.youtube-nocookie.com/embed/X7RQXlOEnRQ" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <p> Les vidéos de la chaîne sont montées de manière à être courtes pour être davantage choisies sur
                        la liste de résultats YouTube et d'aller à l'essentiel dans la présentation de la recette. Les
                        plans sont coupés en «jump cut», et accompagnés d'une voix et d'un bandeau sous-titré pour
                        s'adapter aux multiples conditions de lecture. Les images sont filmées au Canon EOS 200D et
                        montées sur Olive Editor 0.2.0.
                    </p>
                    <h2>Identité Visuelle</h2>
                    <img src="~assets/bluecake-iv.png" alt="identité visuelle de Bluecake : logo, couleurs, formes et jeux typographique" />
                    <p>
                        La précédente identité visuelle était trop corporate, avec une palette réduite et une police
                        script peu lisible. L'objectif de la refonte était de rendre les différents supports de BlueCake
                        plus amicaux et identifiables. Le logo a été conçu à la main pour un aspect plus enfantin et
                        singulier. Les couleurs sont très contrastées sont chaleureuses : le bleu myrtille et très
                        sombre et les couleurs rose et bleu sont très saillantes pour guider le regard des utilisateurs
                        dans l'interface. La police Poppins a remplacé la police Pacifico qui était plus complexe à
                        lire.
                    </p>
                    <h2>Site web</h2>
                    <p>Le site web a été entièrement refondu. Les maquettes, on était réalisé sur Figma en mobile first,
                        80% du trafic s'effectue sur un terminal mobile. Le développement s'est effectué sur un
                        WordPress pour faciliter les ajouts de recettes.</p>
                    <img src="~assets/charlotte-aux-fraises.jpg" loading="lazy"
                        alt="Capture d'écran de la page recette de charlotte aux fraises" />
                </div>
            </div>
        </article>
    </div>
</template>
<script setup>
const title = ref('BlueCake - Lucas Lacroix')
const description = ref("BlueCake cuisine est une chaîne YouTube et un site web de recettes de cuisine. Créé en 2015, elle a produit 40 vidéos entre 2015 et 2016. En 2021")

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>