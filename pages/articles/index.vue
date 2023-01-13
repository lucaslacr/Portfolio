<template>
  <div>
    <section class="fond-sombre">
      <Menu />
      <div class="margium-l">
        <div class="espacium">
          <div class="colonnes inter">
            <div class="colonne">
              <h1> <span class="sousligne">Articles</span></h1>
            </div>
            <div class="colonne">
              <p>Articles, notes et retours d'expérience sur le design d'interface, d'expérience utilisateur </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="margium-l marge-haute-l marge-basse-l">
      <div class="espacium">
      <!--  <Nuxt-link to="articles/audit-ux" class="article">
          <div class="article-image"><img src="~assets/miniature-article-audit-ux.png" alt=""></div>
          <div class="article-contenu">
            <h2>L'audit UX</h2>
            <p>Comment évaluer la conception d'une interface, quelles sont les critères à prendre en compte pour mener cette évaluation</p>
            <p class="info">20 novembre 2022 · Méthode, Audit, utilisabilité</p>
          </div>
        </Nuxt-link> -->
        <Nuxt-link to="articles/la-recherche-ux" class="article">
          <div class="article-image"><img src="~assets/miniature-article-recherche-ux.png" alt=""></div>
          <div class="article-contenu">
            <h2>La recherche UX</h2>
            <p>Sans recherche UX, les prises de décision seraient faites arbitrairement et auraient de grands risques de manquer leurs cibles et objectifs</p>
            <p class="info">20 octobre 2022 · Recherche UX, Méthode, données</p>
          </div>
        </Nuxt-link>
        <Nuxt-link to="articles/le-processus-ui" class="article">
          <div class="article-image"><img src="~assets/miniature-article-design-ui-process.png" alt=""></div>
          <div class="article-contenu">
            <h2>Le processus UI</h2>
            <p>Comment passer du CDC ou de la recherche UX aux maquettes prête à être intégré par les développeurs</p>
            <p class="info">20 septembre 2022 · Recherche UX, Méthode, données </p>
          </div>
        </Nuxt-link>
        <Nuxt-link to="articles/le-design-thinking" class="article" alt="">
          <div class="article-image"><img src="~assets/miniature-article-design-thinking.png" alt=""></div>
          <div class="article-contenu">
            <h2>Le design thinking</h2>
            <p>Le design thinking est une méthodologie centré utilisateur pour créer des dispositifs innovants </p>
            <p class="info">20 août 2022 · Méthode, UX, Product</p>
          </div>
        </Nuxt-link>
        <Nuxt-link to="articles/le-design-emotionnel" class="article">
          <div class="article-image"><img src="~assets/miniature-article-design-emotionnel.png" alt=""></div>
          <div class="article-contenu">
            <h2>Le design émotionnel</h2>
            <p>Que ce que le design émotionnel, comment fonctionne-t-il, quel sont ces bénéfices et comment l'appliquer
              à nos produits et services </p>
            <p class="info">20 juillet 2022 · UI, UX </p>
          </div>
        </Nuxt-link>

        <div class="vide-120"></div>
      </div>

    </div>
  </div>
</template>
<script setup>
const title = ref('Articles - Lucas Lacroix')
const description = ref("Articles, notes et retours d'expérience sur le design UX UI")

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>
