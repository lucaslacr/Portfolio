<template>
    <div>
        <div class="banniere">
            <Menu />
            <div class="margium-l marge-haute-l">
                <div class="espacium">
                    <h1>Virtual Museum of <br>Romanian Revolution</h1>
                    <div class="colonnes">
                        <div class="colonne">
                            <div class="projettitre">Contexte</div>
                            Projet d'étude<br> Juin 2019
                        </div>

                        <div class="colonne">
                            <div class="projettitre">Technologie Utilisé</div>
                            Adobe XD, Html, Css, Js
                        </div>
                        <div class="colonne">
                            <div class="projettitre">Année</div>
                            Juin 2019
                        </div>
                        <div class="colonne">
                            <a href="https://vmrr.lucaslacroix.com" class="lienapp" target="_blank">Voir le musée
                                numérique</a>
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
                   

                    <p>«Virtual Museum of Romanian Revolution» est un musée numérique qui porte sur la Révolution
                        Roumaine. Le projet a été réalisé dans le cadre d'un projet d'étude à Timisoara. C'est dans
                        cette ville de l'ouest de la Roumaine qu'a commencé ce qui est devenue la Révolution Roumaine de
                        1989. Le musée numérique à un angle histoire, factuel et vulgarisateur.
                    </p>

                    <img src="~assets/vmrr-app.jpg" loading="lazy" alt="Capture d'écran du musée numérique"/>
                  

                </div>
            </div>
        </article>
    </div>
</template>
<script setup>
const title = ref('Virtual Museum of Romanian Revolution - Lucas Lacroix')
const description = ref("")

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>