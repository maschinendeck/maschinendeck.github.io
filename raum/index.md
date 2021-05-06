---
layout: page
title: Der Raum
permalink: /raum/
lang: de
ref: room
---



Ein [Hackerspace][2].

* ist ein physischer Ort,
* der Menschen die Umgebung zur Verfügung stellen soll, um eigenverantwortlich Projekte zu realisieren.
* Es soll ein offener Raum sein, der grundsätzlich für alle zugänglich 
ist.
* Dabei ist der Raum weitgehend selbstorganisiert und wird von einem Verein getragen.

Den Besucher*innen steht einiges an Infrastruktur zur Verfügung:

* Internet, Netzwerk und Strom
* Arbeitstische und Couches
* Werkzeuge: Lötkolben, Heissklebepistole, Labornetzteil *(vollständigere Liste in userem [Wiki][1])*
* Getränke: Club Mate, Kaffee, Wasser und Tee

Der Raum kann von den Mitglieder*innen über ein elektronisches Schließsystem betreten werden.

Das Maschinendeck soll ein Ort sein, an dem man sich mit Gleichgesinnten treffen und diskutieren kann. Dabei wird versucht eine inklusive Atmosphäre für alle zu 
schaffen, unabhängig von Geschlecht, sexueller Orientierung, Behinderung, physischer Erscheinung, Körpergröße, Religion, und technischem Hintergrund.
Rassismus oder sonstige Formen von menschenverachtendem Verhalten haben bei uns keinen Platz.

<section class="viewer" style="min-height: 500px;">
<article class="card" style="display: none;" id="werkstatt">
    <img src="https://images.unsplash.com/photo-1562877773-a37120131ec4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80">
    <main>
        <h4>Werkstattbereich</h4>
        <p>
            Hier befindet sich eine Elektrowerkstatt
        </p>
    </main>
</article>
</section>

[1]: http://wiki.maschinendeck.org/wiki/Der_Raum
[2]: https://de.wikipedia.org/wiki/Hackerspace

<script type="text/javascript" src="/js/lib/three.min.js"></script>
<script type="text/javascript" src="/js/lib/panolens.min.js"></script>
<script type="module">
    document.addEventListener("DOMContentLoaded", () => {
        const panorama = new PANOLENS.ImagePanorama("/images/raum_panorama.jpg");
        const viewer   = new PANOLENS.Viewer({
            container : document.querySelector(".viewer"),
            output    : "console"
        });
        
        const werkstatt = new PANOLENS.Infospot();
        werkstatt.position.set(-250, 45, 4985);
        werkstatt.addHoverElement(document.querySelector("#werkstatt"), -499);


        panorama.add(werkstatt);

        viewer.add(panorama); 
    });
</script>
