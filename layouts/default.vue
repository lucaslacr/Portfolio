<template>
  <div>
    <slot />
    <Findepage />
  </div>
</template>
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

img {
  width: 100%;
  height: auto;
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

video {
  width: 100%;
  height: auto;
}

/* nouvelle norme */
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

.vide {
  height: 130px;
}

.videdemi {
  height: 35px;
}

* {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: #0B051E;
}

p {
  max-width: 490px;
  line-height: 155%;
  font-size: 14px;
  margin-top: 5px;
}

li {
  margin-top: 8px;
}
li::marker {
    color: #4832cf;
}

.cadre {
  min-height: 100vh;
}

.margium-l {
  max-width: 1200px;
  display: block;
  margin: 0 auto;
}

.margium-s {
  max-width: 560px;
  display: block;
  margin: 0 auto;
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

::selection {
  color: #ffffff;
  background-color: #4832cf;
}

h1, .ba h1 {
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

ul {
  margin-left: 16px;
}

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
    url(~assets/WorkSans-Regular.woff2) format("woff2");
}

@font-face {
  font-family: "WorkSans Bold";
  src: local("WorkSans Bold"),
    url(~assets/WorkSans-SemiBold.woff2) format("woff2");
}
</style>