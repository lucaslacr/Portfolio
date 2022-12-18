<template>
  <div>
    <div class="banniere">
      <Menu />
      <div class="margium-l marge-haute-l">
        <div class="espacium">
          <h1>Noiseless</h1>
          <div class="colonnes">
            <div class="colonne">
              <div class="projettitre">Contexte</div>
              Projet de DUT 2 à l'IUT de Lens<br>
              Septembre 2018 à avril 2019
            </div>
            <div class="colonne">
              <div class="projettitre">Équipe</div>
              <a href="https://alexandrelecoustre.netlify.app/" target="_blank">Alexandre Lecoustre</a>,<br>
              <a href="https://fr.linkedin.com/in/lucie-septier" target="_blank">Lucie Septier</a>,<br>
              <a href="https://fr.linkedin.com/in/ang%C3%A9line-dutoit-446293157" target="_blank">Angéline Dutoit</a>

            </div>
            <div class="colonne">
              <div class="projettitre">Outils</div>
              Premiere pro, Ronin S, Figma, Affinity Designer
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
          <p>Ce projet avait pour objectif de promouvoir le groupe de musique Noiseless à l'occasion de la sortie de
            leur premier album "Beautiful Ghost". Lors de ce projet, nous avons produit un clip, un site web, un logo,
            des photos issues d'un shooting et un dossier de presse. </p>
          <h2>Identité Visuelle</h2>
          <img src="~assets/noiseless-planche.jpg" alt="Planche de 18 dessins de logos pour le groupe Noiseless" />
          <p>
            Pour élaborer l’identité du groupe, nous avons esquissé 18 logotypes, cette planche de dessin a été soumise
            au vote des membres du groupe de rock. Les quatre esquisses sélectionnées, ont été vectorisées,
            retravaillées, accompagné de proposition de direction artistique différente. Le logotype 6 et sa direction
            artistique a fait l'unanimité.
          </p>
          <img src="~assets/noiseless-iv.png" alt="identité visuelle du groupe de rock : jeux typographique, couleurs et formes"/>
          <h2>Le clip vidéo</h2>
          <div class="container">
            <iframe class="video" width="720" height="405" src="https://www.youtube-nocookie.com/embed/17Lo9sJkBks"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <p> Nous avons d’abord réalisé différents scénarios que nous avons détaillés au groupe de musique en exposant
            les contraintes techniques et logistiques que comprenait chacune d'entre elles. Après avoir fait plusieurs
            réunions et de nombreuses recherches, nous nous sommes positionnés sur un scénario. Le concept était de
            s’inspirer des paroles qui parlaient d’une rencontre amoureuse, et d’en réaliser la fin, la rupture. Comme
            si la chanson racontait comment l’histoire avait commencé.
          </p>
          <p>Nous avons planifié le tournage, organisé un casting, visité plusieurs lieux de tournage, nous nous sommes
            formés au stabilisateur de caméra (Ronin S). La décision du lieu de tournage principal, c'est porté sur le
            Bistroquet, à Annoeullin, ce bar présentait des conditions favorables à notre tournage : suffisamment
            d'espace pour accueillir un public, un parcours suffisamment long pour notre plan séquence.
          </p>
          <p>
            Nous nous sommes attelés dans la réalisation d’un story-board et d'un découpage techniques en écoutant la
            chanson pour repérer quelle scène correspondait le mieux à un moment de la musique. La difficulté était que
            nous ne pouvions pas prévoir à l’avance la durée des plans, nous avions prévu de réaliser plusieurs plans de
            coupe pour combler les possibles vides entre les différentes scènes clefs.
          </p>
          <h2>Le Site web</h2>
          <p>L’objectif du site était de donner de la visibilité, faire découvrir le groupe, d’être à l’image du groupe
            et d'appuyer leur participation aux festivals et aux bars à concert de la région.
            Nous avons effectué un benchmark UX sur différents sites de groupes de musique de rock afin de prendre les
            bonnes pratiques. Nous avons pris la décision de mettre une partie ‘‘espace pro’’ pour que les
            professionnels concernés puissent s’informer sur le groupe : dossiers de presse, fiches techniques pour
            préparer la scène, identité visuelle. Nous avons également pensé à la suite du projet. C'est-à-dire, former
            le groupe pour la gestion à venir du site.
          </p>
          <img src="~assets/page-accueil-noiseless-8.jpg" loading="lazy" alt="Page d'accueil du groupe de rock" />
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
const title = ref('Noiseless - Lucas Lacroix')
const description = ref("L’objectif du site était de donner de la visibilité, faire découvrir le groupe, d’être à l’image du groupe et d'appuyer leur participation aux festivals et aux bars à concert de la région.")
// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>