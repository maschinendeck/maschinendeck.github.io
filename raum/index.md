---
layout: page
title: Der Raum
permalink: /raum/
lang: de
ref: room
---

# Der Raum

Ein [Hackerspace][2] ist ein physischer Ort der

* Menschen die Umgebung zur Verfügung stellen soll, um eigenverantwortlich Projekte zu realisieren
* ein offener Raum sein soll, der grundsätzlich für alle zugänglich ist
* Dabei weitgehend selbstorganisiert ist und von einem Verein getragen wird

Das Maschinendeck soll ein Ort sein, an dem man sich mit Gleichgesinnten treffen und diskutieren kann. Dabei wird versucht eine inklusive Atmosphäre für alle zu 
schaffen, unabhängig von Geschlecht, sexueller Orientierung, Behinderung, physischer Erscheinung, Körpergröße, Religion, und technischem Hintergrund.
Rassismus oder sonstige Formen von menschenverachtendem Verhalten haben bei uns keinen Platz.

<br>
## Virtueller Rundgang
<section class="viewer">
</section>

<br>
## Ausstattung
Den Besucher*innen steht einiges an Infrastruktur zur Verfügung:

* Internet, Netzwerk und Strom
* Arbeitstische und Couches
* Werkzeuge: Lötkolben, Heissklebepistole, Labornetzteil *(vollständigere Liste in userem [Wiki][1])*
* Getränke: Club Mate, Kaffee, Wasser und Tee

Der Raum kann von den ordentlichen Mitglieder*innen über ein elektronisches 
Schließsystem betreten werden.

[1]: http://wiki.maschinendeck.org/wiki/Der_Raum
[2]: https://de.wikipedia.org/wiki/Hackerspace

<script type="text/javascript" src="/js/lib/three.min.js"></script>
<script type="text/javascript" src="/js/lib/panolens.min.js"></script>
<script type="module">
    import POI from "/js/modules/POI.js";

    const pois = [
        new POI(4251, -520, 2564, "Werkstatt", "werkstatt", 
"/images/raum/werkstatt.png"),
        new POI(-4947, -351, 590, "Toiletten und Lager", "ddd"),
        new POI(-4369, -813, -2273, "Retrospiele-Ecke", [
            `Hier befinden sich allerlei alte und neue Spielekonsolen.`,
            `Die recht gemütlichen Couches laden zum entspannten Daddeln ein
            und eine ausfahrbare Leinwand ermöglicht ein wenig Kinofeeling an
            Filmabenden.`
        ], 
"/images/raum/retroecke.png"),
        new POI(-4961, -95, -565, "Küche und Nertzwerkraum", "ddd", 
"/images/raum/serverraum.png"),
        new POI(-4766, -307, 1455, "Mitgliederfächer", "dddd", 
"/images/raum/faecher.png"),
        new POI(-4849, -971, -666, "Bar/Theke", "cwcwc", "/images/raum/bar.png"),
        new POI(4804, -549, 1230, "3D-Druck Werkstatt", "dwdwd", 
"/images/raum/3ddruck.png"),
        new POI(-250, 45, 4985, "Elektrowerkstatt", [
            "Werrrrrr",
            `Werrrrrr dqwk dqwd qwnd qwd lnwd qwlknd qwldkqnw dlk 
qwndlqkwdnqlkd nw dlknwdwd lknwqdnwlkdnqwldwqnd lkqwndl df 
niffn3qflinf3 wlfnfwelnfwef ewlknfewf ewf wefw wf AAA`
        ], "/images/raum/elektrowerkstatt.png"),
    ];



    document.addEventListener("DOMContentLoaded", () => {
        const container = document.querySelector(".viewer");
        const panorama  = new PANOLENS.ImagePanorama("/images/raum_panorama.jpg");
        const viewer    = new PANOLENS.Viewer({
            container : container,
            output    : "console"
        });

        for (const poi of pois) {
            const element = poi.markup();
            container.prepend(element);

            const obj = new PANOLENS.Infospot();
            obj.position.set(poi.x, poi.y, poi.z);
            obj.addHoverElement(element, -499);
            
            panorama.add(obj);
        }

        viewer.add(panorama); 
    });
</script>
