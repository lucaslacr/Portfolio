<template>

    <div class="margium-l">
      <Menu />
      <div class="espacium">
  
        <h2 class="headline">Je suis designer, toujours ouvert pour de nouveaux challenges, projets et découvertes.</h2>
        <div class="colonnes">
          <div class="colonne">
            <img src="~assets/Lucas-photo-2021-par-Sarah-c.jpg" alt="Photo de Lucas" />
  
          </div>
  
          <div class="colonne malef">
            <p>
              Enchantée, moi c'est Lucas !<br>
              Curieux, je me suis rapidement intéressé à la création de site web, j'ai lancé en 2015 un site de recette de
              cuisine avec un ami cette aventure m'a poussé vers des études dans ce domaine. Mes champs de compétence
              s'étendent du développement web au design d'interface et d'expérience en passant par le design graphique. À
              la suite de nombreux projets réalisés, je me suis davantage spécialisé dans le monde de l'UI UX.
              <br><br>
              J'aime dessiner, apprendre, expérimenter, me tromper (souvent), explorer de nouvelles choses.
              <br><br>
              Actuellement Designer UX UI à Inouit, j'élabore des parcours
              utilisateur et des interfaces pour résoudre des problèmes et simplifier la vie des utilisateurs.
            </p><br><br><br>
            <div class="colonnes">
              <div class="colonne">
                <h4>Localisation</h4>
                <p>Lille, France</p>
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
  
  // This will be reactive even you change title/description above
  useHead({
    title,
    meta: [{
      name: 'description',
      content: description
    }]
  })
  </script>