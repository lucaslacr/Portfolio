<template>
  <div>
    <NuxtPage />
    <Findepage />
  </div>
</template>
<script>
export default({
  scrollToTop: true,
})
</script>
<style>
/* rest css */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

html {
  font-family: "WorkSans Regular", Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #fafafa;
  color:#0B051E;
}

::selection {
  color: #ffffff;
  background-color: #4832cf;
}

* {
  box-sizing: border-box;
  margin: 0;
}

img {
  width: 100%;
  height: auto;
}

/* section projet */

.projets {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 36px;
}

.projets img {
    max-width: 750px;
    height: auto;
    border-radius: 4px;
}

.projets h3 {
    font-size: 20px;
    font-weight: 500;
    color: #0b051e;
    margin: 15px 0px 2px 0px;
}

.projets p {
    font-size: 14px;
    margin-bottom: 8px;
    color: #626262;
}

.projets a {
    max-width: 358px;
    margin: 11px 0;
    width: 100%;
}

.projets a div {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.projets a div {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.projets a.pro {
  margin: 15px auto;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 28px 5px 5px;
  width: auto;
  position: relative;
}

.projets a.pro:after {
  content: " ";
  background-image: url("assets/fleche.svg");
  position: absolute;
  height: 20px;
  width: 20px;
  right: 2px;
  top: 3px;
}

@media (max-width: 580px) {
    .projets a {
        flex-direction: column;
        padding: 0;
    }

    .projets a div {
        margin-left: 0px;
        margin-right: 0px;
    }
}

/* Section CMS */

h1, .fond-sombre h1 {
  font-size: 56px;
  font-family: "WorkSans Bold";
}

h2 {
  font-size: 40px;
  font-family: "WorkSans Bold";
}

h3 {
  font-size: 21px;
}

b {
  font-family: "WorkSans Bold";
}

p {
  max-width: 490px;
  line-height: 155%;
  font-size: 14px;
  margin-top: 5px;
}

a {
  text-decoration: none;
  color: #0B051E;
}

ul {
  margin-left: 16px;
}

li {
  margin-top: 16px;
  line-height: 155%;
  font-size: 14px;
}

li::marker {
    color: #4832cf;
}

.est-mauve {
    color: #4832cf;
}

.sousligne {
  position: relative;
  padding-bottom: 8px;
  overflow: clip;
}

.sousligne:after {
  content: "";
  background-image: url('assets/sousligne.svg');
  width: 331px;
  height: 28px;
  display: inline-block;
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0;
  bottom: 0px;
}

/* Mise en page */

.margium-l {
  max-width: 1200px;
  display: block;
  margin: 0 auto;
}

.margium-s {
  max-width: 560px;
  display: block;
  margin: 0 auto;
  padding: 0 25px;
}

.espacium {
  margin: 25px;
}

.colonnes {
  display: flex;
  flex-direction: row;
}

.colonne {
  flex: 1;
  width: 100%;
}

.coldroite {
  max-width: 800px;
  margin-right: auto;
}

.coldroite p {
  max-width: 800px;
  margin: 16px 0px 48px 0px;
}

.coldroite h2 {
  margin: 78px 0px 16px 0px;
}

.fond-sombre {
    background-color: #0B051E;
}

.ligne {
  flex-direction: row;
}

.loin {
  justify-content: space-between;
}

.centrer {
  align-items: center;
}

.marge-haute-m {
  margin-top: 48px;
}

.marge-haute-l {
  margin-top: 96px;
}

.marge-basse-l {
  margin-bottom: 96px;
}

.marge-basse-m {
  margin-bottom: 48px;
}

.marge-basse-s {
  margin-bottom: 28px;
}

/* section article */

.article {
  display: flex;
  flex-direction: row;
  margin-bottom: 48px;
}

.article-image {
  flex: 1;
}

.article-image img {
  border-radius: 4px;
}

.article-contenu {
  flex: 2;
  margin-left: 36px;
  padding-top: 36px;
}

.info {
  color: #68729a;
}

@media (max-width: 780px) {
  .article {
    flex-direction: column;
  }

  .article-contenu {
    flex: 2;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 16px;
  }
}

/* composant bannière */

.banniere {
  background-color: #0B051E;
  color: #ffffff;
}

.banniere a {
  border-bottom: #4832CF 2px solid;
  color: #ffffff;
}

.banniere .colonnes {
  gap: 28px;
  padding-bottom: 48px;
}

a.lienapp {
  border: 1px #fafafa solid;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 32px;
}

.inter h1 {
  max-width: 690px;
  font-size: 75px;
  margin-bottom: 16px;
  color: white;
  position: relative;
}

.inter p {
  color: #ffffffda;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  margin-top: 15px;
} 

.inter {
  padding-bottom: 94px;
  padding-top:94px;
}

/*video section*/
video {
  width: 100%;
  height: auto;
}

.container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* récupération home page */

.presentation {
  background-color: #0B051E;
}

.presentation h1 {
  margin-left: 35px;
  padding-right: 10px;
  max-width: 690px;
  font-size: 98px;
  margin-top: 64px;
  color: white;
  transform: rotate(-3deg);
  padding-bottom: 156px;
  position: relative;
}

.lmobile {
  display: none;
}

@media (max-width: 860px) {

  .lienbureau {
    display: none;
  }

  .lmobile {
    display: block;
  }
}

@media (max-width: 700px) {

  .presentation h1 {
    font-size: 62px;
    margin-bottom: 20px;
    margin-top: 65px;
    width: calc(100% - 53px);
  }
}

@media (max-width: 580px) {
  .projets a {
    flex-direction: column;
    padding: 0px
  }

  .projets a div {
    margin-left: 0px;
    margin-right: 0px;
  }
}

@media (max-width: 820px) {
  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 28px;
  }
}

/* */

@media (max-width: 860px) {
  .colonnes {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 36px;
  
  }

  h3 {
    font-size: 18px;
  }
  .inter {
  padding-bottom: 64px;
  padding-top:64px;
}
}

@font-face {
  font-family: "WorkSans Regular";
  src: local("WorkSans Regular"),
    url(assets/WorkSans-Regular.woff2) format("woff2");
}

@font-face {
  font-family: "WorkSans Bold";
  src: local("WorkSans Bold"),
    url(assets/WorkSans-SemiBold.woff2) format("woff2");
}
</style>