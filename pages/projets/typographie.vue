<template>
  <div>
    <div class="banniere">
      <Menu />
      <div class="margium-l marge-haute-l">
        <div class="espacium">
          <h1>Typographie</h1>
          <div class="colonnes">
            <div class="colonne">
              <div class="projettitre">Contexte</div>
              Projet libre
            </div>
            <div class="colonne">
              <div class="projettitre">Années</div>
              Janvier 2020 à Novembre 2021
            </div>
            <div class="colonne"></div>
            <div class="colonne"></div>
          </div>
        </div>
      </div>
    </div>
    <article class="margium-l marge-haute-l marge-basse-l">
      <div class="espacium">
        <div class="coldroite">

          <p class="marge-basse-m">Attaché au design graphique, je me suis vite intéressé à la typographie. Elle permet
            de transmettre des
            émotions et créer des identités remarquables, j'ai souhaité apprendre à les concevoir pour dans un futur
            proche créer une identité visuelle complète : du logo en passant par couleurs à la typographie.</p>

          <h2>Chatertone</h2>
          <img src="~assets/p-ty-1.png" alt="" />
          <p>Chatertone est la première police que j'ai conçue, elle est exclusivement en majuscules ce qui permet
            d'avoir beaucoup moins de glyphes à réaliser. Sur cette police, j'ai fait beaucoup d'erreurs typographiques,
            elle m'a aussi poussée à faire de nombreuses recherches. Elle m'a aussi permis de sélectionner les logiciels
            et le processus que j'allais utiliser pour concevoir les suivantes. J'utilise le logiciel libre FontForge
            ainsi qu'un logiciel classique de vectorisation comme Affinity designer pour dessiner chacun des
            glyphes qui seront assemblés après.</p>

          <h2>Étrange</h2>
          <img src="~assets/p-ty-2.png" alt="" />
          <p>
            Pour cette 2nde typographie, j'ai souhaité réaliser une police fantaisiste qui soit un peu plus singulière.
            J'ai choisi le thème "Dia de los Muertos" qui est la fête des morts au Mexique pour créer une typographie un
            peu étrange, mais néanmoins festive, ce n'est pas une typographie pour des affiches horreur ou de métal,
            c'est un peu plus enfantin, c'est le sens que je voulais donner à cette typographie-là. Encore une fois,
            c'est une typographie uniquement en capital.
          </p>

          <h2>Cursivium</h2>
          <img src="~assets/p-ty-3.png" alt="" />
          <p>
            Cette typographie cursive a été l'objet d'un processus particulier, j'ai scanné ma propre écriture et
            nettoyé chacun des caractères pour dessiner cette police. C'est la première police que je crée avec des
            caractères en minuscules et majuscules.
          </p>

          <h2>Vacances Romaines</h2>
          <img src="~assets/p-ty-4.png" alt="" />
          <p>
            Le nom de la typographie provient du film Vacances Romaines avec Audrey Hepburn. J'ai eu la volonté de créer
            une police rétro et à la fois assez fine et romantique avec des accents très fins. C'est une police créée
            pour des titres et non un corps de texte.
          </p>


          <h2>Cookies Sans</h2>
          <img src="~assets/p-ty-6.png" alt="" />
          <p>
            Une police sans empattement, avec des formes très géométriques. Initialement prévu pour réaliser des
            logotypes, sa graisse est volontairement plus élevée.</p>

          <h2>Coeur Sérif</h2>
          <img src="~assets/p-ty-5.png" alt="" />
          <p>
            Cœur Sérif est une police fine avec empattement. Il est fortement recommandé de l'utiliser sur des supports
            print avec une taille minimum de 48pt.
          </p>
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
const title = ref('Typographie - Lucas Lacroix')
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