# [TUTORIAL] Sitio Web con HTML, CSS y Javascript (Flexbox, CSS Grid y ScrollReveal) | Technews

Este proyecto está porque seguí un tutorial para desarrollar un sitio web, ya
que tengo un proyecto en donde tengo que desarrollar otro sitio web, pero hace
tiempo que no utilizo HTML, CSS y JS, por lo que quiero hacerlo para tener una
mejor guía de inicio.

## FUENTES

- [[YT / Fazt] Sitio Web con HTML, CSS y Javascript (Flexbox, CSS Grid y ScrollReveal) | Technews [Duración: 01:25:59]](https://youtu.be/Q2imkhmhOFo
  "[YT / Fazt] Sitio Web con HTML, CSS y Javascript (Flexbox, CSS Grid y
  ScrollReveal) | Technews [Duración: 01:25:59]")
- [GitHub / FaztWeb | 💻 Código final del proyecto](https://github.com/FaztWeb/technews-html "GitHub / FaztWeb | 💻 Código final del proyecto")
- [https://www.w3schools.com/css/css3_variables.asp](https://www.w3schools.com/css/css3_variables.asp "https://www.w3schools.com/css/css3_variables.asp")
- [https://stackoverflow.com/questions/26950101/emmet-abbreviations-text-inside-an-element-tag](https://stackoverflow.com/questions/26950101/emmet-abbreviations-text-inside-an-element-tag "https://stackoverflow.com/questions/26950101/emmet-abbreviations-text-inside-an-element-tag")
- [Emmet Documentation / Abbreviations Syntax](https://stackoverflow.com/questions/26950101/emmet-abbreviations-text-inside-an-element-tag "Emmet Documentation / Abbreviations Syntax")

## FECHAS DE INICIO Y TERMINACIÓN

- Iniciado el: Lunes, 21 de JUNIO del 2021.
- Terminado el: -.

## LIVE SERVER

Liver Server es una extensión de Visual Studio Code que permite crear un
servidor local para ejecutar nuestro sitio web. Esto hace que al guardar los
cambios de nuestro trabajo, se reflejen automáticamente en el servidor.

## FONT AWSOME CDN

Se tuvo que hacer uso del CDN (Content Delivery Network) para poder utilizar
Font Awesome en CSS sin tener que descargar los íconos ni nada.

> **Enlace general**:
> [cdnjs | Home / Libraries / font-awesome](https://cdnjs.com/libraries/font-awesome "cdnjs | Home / Libraries / font-awesome")
>
> Enlace al CDN utilizado:
> [https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css "CDN de Font Awesome para CSS utilizado")

## HERO PATTERNS

Permite generar diversos diseños de patrones para fondos y cosas así.

> Enlace:
> [https://www.heropatterns.com/](https://www.heropatterns.com/ "https://www.heropatterns.com/")

## GOOGLE FONTS

Fuentes de un CDN.

> FUENTES UTILIZADAS:
>
> - [Oswald](https://fonts.google.com/specimen/Oswald?query=oswald "Oswald")
>   - Extra Light 200
>   - Light 300
>   - Regular 400

## IMÁGENES GRATUITAS

[pexels.com](pexels.com "pexels.com")

## ABREVIATURAS QUE UTILICÉ CON EMMET

Utilicé abreviaturas con Emment para optimizar el trabajo, pero sigo
aprendiendo.

```html
<!-- header.showcase>h2{Big News Today}+p{lorem30} -->
<!-- RESULTADO -->
<header class="showcase">
  <h2>Big News Today</h2>
  <!-- [lorem30]: Al dar Ctrl + Tab se agrega un lorem de 30 palabras. -->
  <p>lorem30</p>
</header>

<!-- a{Read More}>(i.fas.fa-angle-double-right) -->
<!-- RESULTADO -->
<a href="">Read More<i class="fas fa-angle-double-right"></i></a>

<!-- div.news-cards>div>img+h3{lorem3}+p{lorem20}+(a{Learn More}>(i.fas.fa-angle-double-right)) -->
<!-- RESULTADO -->
<div class="news-cards">
  <div>
    <img src="" alt="" />
    <h3>lorem3</h3>
    <p>lorem20</p>
    <a href="">Learn More<i class="fas fa-angle-double-right"></i></a>
  </div>
</div>
```
