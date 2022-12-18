<template>
  <div>
    <div class="banniere">
      <div class="margium-l">
        <Menu />
        <div class="espacium">
          <div class="margium-l">
        
            <h1 class="marge-haute-l marge-basse-m">Mentions légales</h1>
<br>
          </div>
        </div>
      </div>
    </div>
    <div class="espacium">
      <div class="margium-s">
        <h2>Éditeur</h2>
        <p>
          Responsable de la publication : M Lucas Lacroix<br />
          Courriel : <img class="cryptee" src="~assets/cryptee.svg" alt="crytee" /><br />
          Siret : 89015780300010
        </p>
        <h2>Hébergement</h2>
        <p>
          O2switch<br />
          222-224 Boulevard Gustave Flaubert<br>
          63000 Clermont-Ferrand<br>
          Courriel : support@o2switch.fr<br />
          Siteweb : o2switch.fr
        </p>
        <h2>Objectif et qualité des contenus</h2>
        <p>
          Ce site a pour objectif d’informer le grand public et les
          professionnels. Le site s’efforce de fournir une information de
          qualité et vérifiée, toutefois si une information semble inexacte ou
          contient une erreur typographique, vous pouvez le signaler à
          l’administrateur du site.
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>
          Lucas Lacroix est propriétaire exclusif de tous les droits de
          propriété intellectuelle ou détient les droits d’usage sur tous les
          éléments accessibles sur le site, tant sur la structure que sur les
          textes, images, graphismes, sons, code... (sauf mention contraire)
          <br />Toute reproduction totale ou partielle du site, représentation,
          modification, publication, adaptation totale ou partielle de ces
          éléments, est soumise à une autorisation écrite du propriétaire.
        </p>

        <h2>Crédits</h2>
        <p>
          Photo de la page «À propos» prise par @saraah_photos_
        </p>


        <h2>Déclaration d’accessibilité</h2>
        <p>Lucas Lacroix s’engage à rendre ses sites web et dispositifs accessibles conformément à l’article 47 de la
          loi n°2005-102 du 11
          février 2005. </p>
          <br><br>
        <h3>État de conformité</h3>
        <p><strong>lucaslacroix.com</strong> est <strong>partiellement</strong> conforme avec le référentiel général
          d’amélioration de l’accessibilité (RGAA), version 4 en raison des non-conformités et des dérogations énumérées
          ci-dessous. </p>
        <ul>
          <li>Vidéo non sous-titré</li>
          <li>Schéma partiellement décrit</li>
          <li>informations de contacts partiellement accessible </li>
        </ul><br><br>
        <p> Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le responsable pour être
          orienté vers une alternative accessible ou obtenir le contenu sous une autre forme. </p>


        <h2 id="usage-cookies">Politique de confidentialité</h2>
        <p>
          Ce site ne prélève aucune donnée à caractère personnel.<br><br>

          L’outil de mesure d’audience que nous utilisons, Matomo, est paramétré de façon à ce que les informations
          recueillies soient anonymisées, les cookies sont désactivés.
          Nous sommes ainsi en conformité avec la réglementation de la RGPD, de la CNIL et exemptés d’autorisation
          préalable. Ces données ne sont pas partagées avec des tierces parties.<br>
          <a href="https://matomo.org/faq/general/faq_18254/" target="_blank" rel="nofollow">En savoir plus sur les
            données collectées par Matomo</a>
        </p>
      </div>
    </div>

  </div>
</template>

<script setup>
const title = ref('Mention légales - Lucas Lacroix')
const description = ref("Éditeur, déclaration d’accessibilité, propriété intellectuelle, politique de confidentialité")

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>
<style>
.margium-s h2 {
  margin-top: 65px;
  margin-bottom: 12px;
}

.margium-s p a {
  line-height: 220%;
  border-bottom: rgb(236, 236, 236) 3px solid;
}

img.cryptee {
  height: 20px;
  width: auto;
  margin-bottom: -5px;
  filter: contrast(600%);
}
</style>
