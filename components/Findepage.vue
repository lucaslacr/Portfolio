<template>
<div class="fond-footer">
    <footer id="findepage">
      <div class="colonnes">
        <div class="colonne"></div>
        <div class="colonne"></div>
        <div class="colonne">
          <h4>Contact</h4>
          <p>
            <img src="~assets/cryptee-tp.svg" alt="plus 33 6 95 dix onze onze"/><br>
            <img src="~assets/cryptee.svg" alt="hello Arobase lucas lacroix.com"/>
            <br>
            <a href="https://www.linkedin.com/in/lucas-lacroix/" target="_blank" rel="noreferrer nofollow">LinkedIn</a>
          </p>
        </div>
        <div class="colonne">
          <h4>Mentions légales</h4>
          <p>
            Tous droits réservés · Lucas Lacroix · 2022 ·
            <Nuxt-link to="/mentions-legales" rel="nofollow">Mentions légales</Nuxt-link>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
footer#findepage {
  max-width: 1200px;
  display: block;
  margin: 0 auto;
  padding: 25px 0px 20px 0px;
}
footer p {
  color: #fafafa;
  line-height: 220%;
  font-size: 13px;
}
footer p a {
   color: #fafafa;
  line-height: 220%;
  font-size: 13px;
  border-bottom: #4832CF 3px solid;
}
footer h4 {
  color: #fafafa;
  font-weight: 500;
  margin-bottom: 4px;
   font-family: "WorkSans Bold";
}
footer img {
  height: 16px;
  width: auto;
  margin-bottom: -5px;
}

.fond-footer {
  background-color: #0B051E;
  padding: 25px 20px 20px 20px;
  margin-top: 48px;
}
@media (max-width: 820px) {
  footer .colonnes .colonne a {
    margin-bottom: 32px;
    display: inline-block;
  }
}
</style>
