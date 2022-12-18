<template>
    <div>
        <div class="banniere">
            <Menu />
            <div class="margium-l marge-haute-l">
                <div class="espacium">
                    <div class="colonnes">
                        <div class="colonne">
                            <h1>Le Design Thinking</h1>
                            <div class="projettitre"> </div>
                            20 août 2022 · 2 min
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
                    <p> S'il est une méthodologie qui traverse les décennies sans prendre une ride, c'est bien le design
                        thinking ! Adopté dans les années 1980, le design thinking est une méthode qui allie des phases
                        de divergence, de convergence, des ateliers d'alignement, mais surtout une démarche centrée
                        utilisateur. Son but, aller plus vite, plus loin, mais surtout dans la bonne direction !
                    </p>
                    <h2>Pourquoi utiliser cette méthode ?</h2>
                    Un des objectifs de cette méthode et de trouver des solutions innovantes tout en réduisant les
                    incertitudes. Un bon projet design est défini à la rencontre de ces 3 piliers : la viabilité
                    économique, la désirabilité du produit auprès du public cible et sa faisabilité technique.
                    <img src="~assets/schema-3-pilier.png" loading="lazy" alt="schéma des piliers du design thinking" />
                    <h2>Comment fonctionne un projet design Thinking ?</h2>
                    <p>Le design thinking est une méthode composée de 5 étapes :
                        <ul>
                            <li><b>L'immersion</b>, consiste à se
                        mettre à la place de l'utilisateur, comprendre ses besoins, ses problèmes</li>
                        <li><b>L'analyse de l'exploration</b>, consiste à trier et qualifier les insights de la phase d'exploration </li>
                        <li><b>l'idéation</b>, trouver des idées à partir de la synthèse de l'exploration</li>
                        <li><b>Prototypage</b>, reprendre les sketchs et idées pour les rendre plus tangibles et testable</li>
                        <li><b>L'implémentation</b>, tester le prototypage avec des utilisateurs,<br> prendre en compte leurs retours et améliorer le projet</li>
                        </ul>
                        </p>
                        <p>
                        Ces 5 étapes prennent souvent la forme de ce qu'on appelle le <b>double diamant</b> :
                        </p>
                        <img src="~assets/double-diamant.png" loading="lazy" alt="schéma du double diamant" />
                </div>
            </div>
        </article>
    </div>
</template>
<script setup>
const title = ref('Le Design Thinking - Lucas Lacroix')
const description = ref("S'il est une méthodologie qui traverse les décennies sans prendre une ride, c'est bien le design thinking ! Adopté dans les années 1980, le design thinking est une méthode qui allie des phases de divergence, de convergence, des ateliers d'alignement")

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>