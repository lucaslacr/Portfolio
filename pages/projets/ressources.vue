<template>
    <div>
      <div class="banniere">
        <Menu />
        <div class="margium-l marge-haute-l">
          <div class="espacium">
            <h1>Ressources DGI</h1>
            <div class="colonnes">
              <div class="colonne">
                <div class="projettitre">Contexte</div>
                Projet libre et contributif<br>
              </div>
              <div class="colonne">
                <div class="projettitre">Année</div>
                2021
              </div>
              <div class="colonne">
                <div class="projettitre">État</div>
                Maintenu
              </div>
              <div class="colonne">
                <a href="https://ressources.lucaslacroix.com" class="lienapp" target="_blank">Voir les le site des ressources</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <article class="margium-l marge-haute-l marge-basse-l">
        <div class="espacium">
          <div class="coldroite">
  
            <p>Le site Ressources en design graphique et d’interaction et un site contributif de documentation, d'outil dans le domaine de Ce projet avait pour objectif de promouvoir le groupe de musique Noiseless à l'occasion de la sortie de
              leur premier album "Beautiful Ghost". Lors de ce projet, nous avons produit un clip, un site web, un logo,
              des photos issues d'un shooting et un dossier de presse. </p>
            <h2>Identité Visuelle</h2>
            <img src="~assets/noiseless-planche.jpg" />  
          </div>
        </div>
      </article>
    </div>
  </template>
<script setup>
const title = ref('Ressources - Lucas Lacroix')
const description = ref("")
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>
