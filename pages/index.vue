<template>
  <div>
    <section class="presentation">
      <div class="margium-l">
        <Menu />
        <h1 class="headline">Le <span class="sousligne">Design</span> sans Limites</h1>
      </div>
    </section>
    <div class="margium-l">
      <div class="espacium">
        <div class="colonnes ligne loin centrer marge-basse-s marge-haute-l">
          <h2 class="projet">Projets</h2>
          <Nuxt-link to="/projets" class="pro lienbureau">Voir tous les projets</Nuxt-link>
        </div>
        <section class="projets">
          <Nuxt-link to="projets/happy-dreche">
            <img src="~assets/projet-happydreche.svg" loading="lazy" alt="Logo du happy drêche" />
            <div>
              <h3>Happy Drêche</h3>
              <p>
                Maquette & site wordpress pour une association éco-responsable
              </p>
            </div>
          </Nuxt-link>
          <Nuxt-link to="/projets/le-fossile-magique/">
            <img src="~assets/projet-lefossilemagique.svg" loading="lazy" alt="Logo du serious game" />
            <div>
              <h3>Le Fossile Magique</h3>
              <p>
                Le serious game de la Galerie de Paléontologie de Paris
              </p>
            </div>
          </Nuxt-link>
          <a href="https://ressources.lucaslacroix.com/" target="_blank" rel="nofollow">
            <img src="~assets/projet-ressources.svg" loading="lazy" alt="favicon du site web de ressources" />
            <div>
              <h3>Ressources DGI</h3>
              <p>Site des Ressources en design graphique et d'interaction regroupant des outils, ressources et site
                d'inspiration et de documentation</p>
            </div>
          </a>
          <Nuxt-link to="/projets" class="pro lmobile">Voir tous les projets</Nuxt-link>
        </section>
        <Expertise />
      </div>
    </div>
  </div>

</template>
<script setup>
const title = ref('Lucas Lacroix, Designer UX UI')
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