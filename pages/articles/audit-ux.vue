<template>
    <div>
        <div class="banniere">
            <Menu />
            <div class="margium-l marge-haute-l">
                <div class="espacium">
                    <div class="colonnes">
                        <div class="colonne">
                            <h1>L'audit UX</h1>
                            <div class="projettitre"> </div>
                            20 novembre 2022 · 2 min
                        </div>
                        <div class="colonne">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <article class="margium-l marge-haute-l marge-basse-l">
            <div class="espacium">
                <div class="coldroite">
                    <p>
                        *Pourquoi, quand faire un audit*<br>

                        *qu’es-ce qu'un audit dans les grandes lignes
                    </p>
                    <h2>Les différente approches Heuristique</h2>
                    <p>Pour évaluer une interface ou un dispositif il existe une dizaine d'approches d’heuristiques différente, ici nous allons voir les plus communes et les plus représentative de leurs poitionement</p>
                    <ul>
                        <li><b>Amélie Boucher</b> Avec des outils comme Matomo ou Google Analytics, il est
                            possible de comprendre les parcours, la démographie, faire ressortir les recherches faites
                            sur le site et suivre les conversions.</li>
                        <li><b>Bastien et scapin</b> pour débusquer visuellement les affordances et les fausses
                            affordances des éléments d'une page, les zones les plus cliquées sont celles où
                            l'utilisateur s'arrête.</li>
                        <li><b>Colombo & Pasch's</b> EFFICIENCY  <abbr
                                title="Question à choix multiple">QCM</abbr>, d'échelles d'évaluations (noter de 1 à 7
                            le service..) dans l'idéal ces questionnaires doivent être courts pour enregistrer le plus
                            de
                            retours possible.</li>
                        <li><b>NIELSEN’S</b> les échelles Attrakdiff, UEQ sont conçues et reconnues
                            pour fiabilité. Elles sont souvent mises placer pour évaluer l'évolution de la perception du
                            dispositif avant et après modification.</li>
                        <li><b>Arhippainen's</b> Vise a évaluer les </li>
                            
                    </ul>
                    <h2>Les Heuristique de Bastien et Scapin</h2>
                    <ul>
                        <li><b>Guidage</b></li>
                        <li><b>Charge de travail</b></li>  
                        <li><b>Contrôle explicite</b></li>
                        <li><b>Adaptabilité</b></li>
                        <li><b>Gestion des erreurs</b></li>
                        <li><b>Homogénéité & Cohérence</b></li>
                        <li><b>Signifiance des codes et dénominations</b></li> 
                        <li><b>Compatibilité</b></li>
                    </ul>
                    <h2>Restitution et forme de l'audit</h2>
                    <img src="~assets/article-recherche-ux-cartographie-des-moyens-de-recherche.png" loading="lazy"
                alt="Cartographie des méthodes sur les axes besoin/usage et quantitative/qualitative" />
                </div>
            </div>
        </article>
    </div>
</template>
<script setup>
const title = ref("L'audit UX - Lucas Lacroix")
const description = ref("Parce que nous ne savons pas, nous avons des aprioris, sur les besoins, les enjeux, les problèmes auxquels doit répondre la conception. Sans elle, la probabilité de développer produit qui manquerait sa cible et sa pertinence serait élevée")

// This will be reactive even you change title/description above
useHead({
    title,
    meta: [{
        name: 'description',
        content: description
    }]
})
</script>