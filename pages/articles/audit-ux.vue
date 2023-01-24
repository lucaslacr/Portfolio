<template>
    <div>
        <div class="banniere">
            <Menu />
            <div class="margium-l marge-haute-l">
                <div class="espacium">
                    <div class="colonnes">
                        <div class="colonne">
                            <h1>L'audit UX</h1>
                            <div class="projettitre"> </div>
                            20 janvier 2023 · 2 min
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
                    <p>
                        Pour évaluer l'utilisabilité d'un dispositif, il existe 2 méthodes : le test utilisateur et
                        l'audit UX.<br>
                        Cette dernière repose sur des critères scientifiques appelés Heuristiques. Elle permet de
                        débusquer
                        les problèmes que peuvent rencontrer les utilisateurs et de proposer des solutions. L'Audit UX
                        est souvent utilisé pour établir des "Quick Fix", des point d'améliorations faciles sur une
                        interface pour
                        obtenir de meilleurs taux de conversions. C'est également une manière de vérifier une conception
                        avant
                        sa production.
                    </p>
                    <h2>Les différente approches Heuristique</h2>
                    <p>Pour évaluer une interface ou un dispositif, il existe une dizaine d'approches d’heuristiques
                        différente, ici, nous allons voir les plus communes et les plus représentatives de leurs
                        positionnements</p>
                    <ul>
                        <li><b>Bastien et scapin</b>, sont sans aucun doute les Heuristiques plus utilisé, car elle
                            répondent au besoin générale d’évaluation de <b>l'utilisabilité</b>.</li>
                        <li><b>Colombo & Pasch's</b> Quand à elle, se focalise sur l'évaluations de <b>l’efficacité</b>
                            d'un dispositif, elle peut être utilisé dans les applications métier</li>
                        <li><b>Arhippainen's</b> Vise a évaluer davantage la <b>satisfaction</b> </li>
                    </ul>
                    <h2>Les Heuristique de Bastien et Scapin</h2>
                    <ul>
                        <li><b>Guidage</b>
                            <ul>
                                <li><b>Regroupement et séparation</b>
                                    Es ce que les éléments qui se ressemble sont regroupé et séparé des autres
                                    ? (Les éléments de navigation sont séparés du contenu de la page, les fraises sont dans la rubrique fruits, les VTT ne sont pas avec les vélo de
                                    ville
                                    etc)
                                </li>
                                <li>
                                    Es ce que l'interface fait des <b>retours utilisateur</b> immédiat (message
                                    d'erreur,
                                    annonce un temps de chargement etc.)
                                </li>
                                <li>
                                    <b>Lisibilité</b> (es ce que le fil d’Ariane et visible,
                                    es ce que les text son suffisamment grand et contrasté pour être lu etc.)
                                </li>
                                <li>
                                    Incitant (es
                                    ce que les intitulé sont claire sur ce qu'il regroupe, et ce que les nom des bouton
                                    et les
                                    icones sont explicite)
                                </li>
                            </ul>
                        </li>
                        <li><b>Charge de travail</b></li>
                        <li><b>Contrôle explicite</b></li>
                        <li><b>Adaptabilité</b></li>
                        <li><b>Gestion des erreurs</b></li>
                        <li><b>Homogénéité & Cohérence</b></li>
                        <li><b>Signifiance des codes et dénominations</b></li>
                        <li><b>Compatibilité</b></li>
                    </ul>
                    <h2>Restitution et forme de l'audit</h2>
                    <p>Un audit est un livrable, il est nécessaire qu'il soit clair, concis, complet, découpable et
                        orienté solutions pour pouvoir être traité facilement par les équipes de design et de
                        développement.</p>
                    <img src="~assets/article-audit-ux.jpg" loading="lazy" alt="Exemple de présentation d'audit UX" />
                </div>
            </div>
        </article>
    </div>
</template>
<script setup>
const title = ref("L'audit UX - Lucas Lacroix")
const description = ref("Pour évaluer l'utilisabilité d'un dispositif, il existe 2 méthodes : le test utilisateur et l'audit UX. Cette dernière repose sur des critères scientifiques appelés Heuristiques. Elle permet de débusquer les problèmes que peuvent rencontrer les utilisateurs")

useHead({
    title,
    meta: [{
        name: 'description',
        content: description
    }]
})
</script>