<template>
    <div>
        <section class="fond-sombre">
            <Menu />
            <div class="margium-l">
                <div class="espacium">
                    <div class="colonnes inter">
                        <div class="colonne">
                            <h1> <span class="sousligne">Projet</span></h1>
                        </div>
                        <div class="colonne">
                            <p> Qu'il s'agisse d'un siteweb, d'une mise page ou d'une illustration, tout par d'un coup de crayon. On construit, déconstruit, pour créer, représenter, transmettre une idée, une information.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="margium-l">
            <div class="espacium">
                <div class="videprojet"></div>
                <section class="projets marge-haute-l marge-basse-l">
                    <Nuxt-link to="projets/happy-dreche">
                        <img src="~assets/projet-happydreche.svg" loading="lazy" alt="Logo du happy drêche" />
                        <div>
                            <h3>Happy Drêche</h3>
                            <p>
                                Maquette & site wordpress pour une association éco-responsable
                            </p>
                        </div>
                    </Nuxt-link>

                    <Nuxt-link to="projets/un-musee-a-soi">
                        <img src="~assets/projet-unmuseeasoi.svg" loading="lazy" alt="Logo du web-musée" />
                        <div>
                            <h3>Un Musée à Soi</h3>
                            <p>
                                Web-exposition sur le féminisme. Commandité par la ville de Tournai </p>
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
                    <Nuxt-link to="/projets/vmrr/">
                        <img src="~assets/projet-vmrr.svg" loading="lazy" alt="Logo du web-musée" />
                        <div>
                            <h3>Musée Virtuel de la Révolution</h3>
                            <p>
                                Site narratif qui retrace la Révolution Roumaine de 1989, 30 ans
                                après les événements.
                            </p>
                        </div>
                    </Nuxt-link>
                    <Nuxt-link to="projets/noiseless">
                        <img src="~assets/projet-noiseless.svg" loading="lazy" alt="Logo du groupe de rock" />
                        <div>
                            <h3>NoiseLess</h3>
                            <p>
                                Site promotionnel du groupe de rock NoiseLess crée pour la sortie
                                de leur premier album "Beautiful Ghost"
                            </p>
                        </div>
                    </Nuxt-link>
                    <a href="https://ressources.lucaslacroix.com/" target="_blank" rel="nofollow">
                        <img src="~assets/projet-ressources.svg" loading="lazy"
                            alt="favicon du site web de ressources" />
                        <div>
                            <h3>Ressources DGI</h3>
                            <p>Site des Ressources en design graphique et d'interaction regroupant des outils,
                                ressources et site
                                d'inspiration et de documentation</p>
                        </div>
                    </a>
                    <Nuxt-link to="/projets/typographie">
                        <img src="~assets/projet-fonts.svg" loading="lazy" alt="Logo du groupe de rock" />
                        <div>
                            <h3>Polices de caractère</h3>
                            <p>
                                La construction d'une typo est un long est minutieux processus.
                                Décider du style de la police, penser son usage, dessiner les
                                nombreux Glyphes
                            </p>
                        </div>
                    </Nuxt-link>
                    <Nuxt-link to="/projets/le-poireauteur">
                        <img src="~assets/projet-poireauteur.svg" loading="lazy"
                            alt="Logo du site de cuisine Bluecake" />
                        <div>
                            <h3>Le Poireauteur</h3>
                            <p>
                                Application de divertissement élaborée lors du Master DGI.
                            </p>
                        </div>
                    </Nuxt-link>
                    <Nuxt-link to="/projets/bluecake/">
                        <img src="~assets/bluecake.svg" loading="lazy" alt="Logo du site de cuisine Bluecake" />
                        <div>
                            <h3>BlueCake</h3>
                            <p>
                                Site de recette de cuisine, conçu pour vous aider à réaliser vos
                                plats préférés
                            </p>
                        </div>
                    </Nuxt-link>
                </section>
            </div>
        </div>
    </div>
</template>
<script setup>
const title = ref('Projet - Lucas Lacroix')
const description = ref(" Qu'il s'agisse d'un siteweb, d'une mise page ou d'une illustration, tout par d'un coup de crayon. On construit, déconstruit, pour créer, représenter, transmettre une idée, une information. ")

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

</style>
