<template>
    <section class="expertise">
        <h2>Savoir-faire</h2>
        <div class="colonnes">
            <div class="lotexpert">
                <div class="listexpert">
                    <img src="~assets/uiv.png" alt="" />
                    <div>
                        <h3>Design d'interface</h3>

                        <p>Concevoir des interfaces, c'est avant tout penser aux utilisateurs, l’architecture de
                            l’information, les structures pages, les choix graphiques et la sémiologie des icônes.
                        </p>
                    </div>
                </div>
            </div>
            <div class="lotexpert">
                <div class="listexpert">
                    <img src="~assets/uxv.png" alt="" />
                    <div>
                        <h3>UX Design</h3>
                        <p>En UX, on aime résoudre des problèmes, trouver des solutions, tester les applications et les
                            prototypes, comprendre les besoins utilisateurs, leurs parcours, les scénarios d'usages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="colonnes">
            <div class="lotexpert">
                <div class="listexpert">
                    <img src="~assets/dgv.png" alt="" />
                    <div>
                        <h3>Design Graphique</h3>
                        <p>Création d'identité visuelle qui capte l’attention et touchera le public. Illustrer un
                            document print ou web, le mettre en page pour lui donner davantage de valeur. Comme chaque
                            brief est différent, le sur-mesure est la règle !
                        </p>
                    </div>
                </div>
            </div>
            <div class="lotexpert">
                <div class="listexpert">
                    <img src="~assets/product.png" alt="" />
                    <div>
                        <h3>Product design</h3>

                        <p>En product, on met en place une Roadmap, une vision macro, le Design thinking, des sprints, de la méthode et on s'assure de l'adéquation des enjeux utilisateurs et de l'entreprise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.expertise {
    margin: 96px 0px;
}

.listexpert {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 40px;
}

.expertise img {
    max-width: 130px;
    margin-right: 8px;
}

.expertise h2 {
    margin-bottom: 36px;
}

.lotexpert {
    flex: 1;
    width: 100%;
    margin-bottom: 48px;
}

/* Adaptabilité */
@media (max-width: 820px) {

    .listexpert {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 0px;
    }

    .expertise img {
        max-width: 160px;
        margin-right: auto;
    }
}
</style>
