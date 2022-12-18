<template>
  <div>
    <div class="banniere">
      <Menu />
      <div class="margium-l">
        <div class="espacium">
          <h1>KoGame</h1>
          <div class="colonnes">
            <div class="colonne">
              <div class="projettitre">Contexte</div>
              Projet D'étude à l'étranger - DUT MMI
            </div>
            <div class="colonne">
              <div class="projettitre">Distinction</div>
              Premier prix développement web de l’IDMSC de l’Université Politehnica Timișoara
            </div>
            <div class="colonne">
              <div class="projettitre">Période</div>
              Mai 2019 - 1 semaine
            </div>
            <div class="colonne">
              <a href="https://kogame.lucaslacroix.com" class="lienapp" target="_blank">Jouer à KoGame</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <article class="margium-l marge-haute-l marge-basse-l">
      <div class="espacium">
        <div class="coldroite">

          <p>Projet de jeu javascript conçu, testé et développé en une semaine pour le concours <i>Interactive Digital
              Media Student Contest 2019</i> de l'Université Politehnica Timișoara.</p>
         

          <h2>Le concept du jeu</h2>
          <p>
            Notre joueur se déplace sur une grille, il doit éviter les 2 robots qui le poursuive. Pour gagner (Dans le
            mode normal) il doit collecter 10 points et attraper le robot jaune.
          </p>
          <h2>Le retours des tests utilisateur</h2>
          <p>
            Les test utilisateurs on relevé plusieurs difficultés :
          <ul>
            <li>
              Le jeu n'était pas toujours adapté au niveau des utilisateur, pour certains, cela était trop facile et
              d'autre trop compliquer pour gagner. <br>→ J'ai ajouté un choix de niveau de difficulté avant d’accéder
              au jeux, le choix ser répercute sur le nombre de point a accumuler pour gagner et la rapidité des robots.
            </li>
            <li>
              Le moyen de gagner et le concept de jeux n'est pas toujours compris <br>→Ajout d'une bannière explicative
              à l'entré du jeu.
            </li>
            <li>
              Certains utilisateur on souhaiter l'utiliser sur mobile. La version testé fonctionnais exclusivement au clavier.<br>
              → création de touche pour l'utilisation mobile du jeu.
            </li>
            <li>
              Bogues techniques<br>
              → Corrections des bogues survenu sur certain navigateur ou certain cas de figure du jeu.
            </li>
          </ul>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
const title = ref('KoGame - Lucas Lacroix')
const description = ref("Projet de jeu javascript conçu, testé et développé en une semaine pour le concours <i>Interactive Digital Media Student Contest 2019</i> de l'Université Politehnica Timișoara.")

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>