<template>

  <div class="margium-l">
    <Menu />
    <div class="espacium">

      <h2 class="headline">Je suis designer, attiré par la recherche, l’exportation et l'approfondissement de sujets.</h2>
      <div class="colonnes">
        <div class="colonne">
          <img src="~assets/Lucas-photo-2021-par-Sarah-c.jpg" alt="Photo de Lucas" />

        </div>

        <div class="colonne malef">
          <p>
            Enchantée, moi c'est Lucas !<br>
            Curieux, je me suis rapidement intéressé à la création de site web, j'ai lancé en 2015 un <Nuxt-link to="/projets/bluecake/">site de recette de
            cuisine</Nuxt-link> avec un ami cette aventure m'a poussé vers des études dans ce domaine. Mes champs de compétence
            s'étendent <Nuxt-link to="/articles/le-processus-ui">design d'interface</Nuxt-link> et d'expérience utilisateur en passant par <Nuxt-link to="/articles/la-recherche-ux">la recherche UX</Nuxt-link>. À
            la suite de nombreux projets réalisés, je me suis spécialisé sur les problématiques de l'écoconception de l'inclusivité, pour créer des produits et des services utiles et utilisables.
            <br><br>
            J'aime dessiner, apprendre, expérimenter, échanger, partager et explorer de nouvelles choses.
            <br><br>
            Designer UX UI à Maeva Vacances, j'élabore des parcours
            utilisateur et des interfaces pour résoudre des problèmes et simplifier la vie des utilisateurs.
          </p><br><br><br>
          <div class="colonnes">
            <div class="colonne">
              <h4>Localisation</h4>
              <p>Lille & Paris, France</p>
              <br><br><br>
            </div>
            <div class="colonne">
              <h4>Passion</h4>
              <p>
                Design graphique
                <br />Semi-marathon
                <br />Dessins
                <br />Pâtisserie
                <br />Cyclisme
                <br />Botanique
              </p>
              <br><br><br>
            </div>
          </div>
        </div>
      </div>

      <Expertise />
    </div>
  </div>
</template>

<script setup>
const title = ref('À propos - Lucas Lacroix')
const description = ref("Designer UX UI, j'élabore des parcours utilisateur et des interfaces pour résoudre des problèmes et simplifier la vie des utilisateurs.")

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>