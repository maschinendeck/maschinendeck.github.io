---
layout: page
title: Der Raum
permalink: /raum/
lang: de
ref: room
---

# Der Raum

<section class="grid half-half">

<section markdown="1">
<br>
## Ausstattung
Den Besucher:innen steht einiges an Infrastruktur zur Verfügung:

* Internet, Netzwerk und Strom
* Arbeitstische und Couches
* Werkzeuge: Lötkolben, Heißklebepistole, Labornetzteil *(erweiterte Liste in 
  unserem [Wiki][1])*
* Auszug aus dem Getränkeangebot: Club Mate, Mio Mio Mate, Fritz!Kola, Fritz!Limo, 
  Apfelschorle, Kaffee, Wasser, Tee u.m.

<br>
**Schau dir die genaue Aufteilung doch gerne visuell im virtuellen Rundgang 
an!**

<br>
Der Raum kann von den ordentlichen Mitgliedern über ein elektronisches
Schließsystem betreten werden.
</section>
<section markdown="1" class="alert-info" style="padding: 2rem;">

## Hackerspace
Ein [Hackerspace][2] ist ein physischer Ort der

* Menschen die Umgebung zur Verfügung stellen soll, um eigenverantwortlich Projekte zu realisieren
* ein offener Raum sein soll, der grundsätzlich für alle zugänglich ist
* Dabei weitgehend selbstorganisiert ist und von einem Verein getragen wird

Das Maschinendeck soll ein Ort sein, an dem man sich mit Gleichgesinnten treffen und diskutieren kann. Dabei wird versucht eine inklusive Atmosphäre für alle zu
schaffen, unabhängig von Geschlecht, sexueller Orientierung, Behinderung, physischer Erscheinung, Körpergröße, Religion, und technischem Hintergrund.
Rassismus oder sonstige Formen von menschenverachtendem Verhalten haben bei uns keinen Platz.

</section>

</section>

<br>
## Virtueller Rundgang
<section class="viewer">
</section>

<br>

[1]: http://wiki.maschinendeck.org/wiki/Der_Raum
[2]: https://de.wikipedia.org/wiki/Hackerspace

<script type="text/javascript" src="/js/lib/three.min.js"></script>
<script type="text/javascript" src="/js/lib/panolens.min.js"></script>
<script type="module">
    import POI from "/js/modules/POI.js";

    const pois = [
        new POI(4251, -520, 2564, "Werkstatt", [
            `Der Ort fürs Grobe.`,
            `Hier kann gehämmert, gefeilt, gesägt oder auch mal mit einem
            Dremel gearbeitet werden. Eine stabile Werkbank Marke Eigenbau
            stellt hierfür den stabilen Untergrund zur Verfügung.`
        ], 
"/images/raum/werkstatt.png"),
        new POI(-4947, -351, 590, "Toiletten und Lager", [
            `Die Toilette im Maschinendeck ist Genderneutral. Das bedeutet, 
            alle Geschlechter benutzen die selbe Toilette.`,
            `Eine LED-Installation zeigt in roter oder grüner Farbe an, ob
            das Örtchen gerade besetzt ist.`
        ]),
        new POI(-4369, -813, -2273, "Retrospiele-Ecke", [
            `Hier befinden sich allerlei alte und neue Spielekonsolen.`,
            `Die recht gemütlichen Couches laden zum entspannten Daddeln ein
            und eine ausfahrbare Leinwand ermöglicht ein wenig Kinofeeling an
            Filmabenden.`
        ], 
"/images/raum/retroecke.png"),
        new POI(-4961, -95, -565, "Küche und Nertzwerkraum",
            `Dieser Raum dient hauptsächlich als <i>"Abstellraum"</i> und
            beherbergt die Infrastruktur für das interne Netzwerk sowie
            Freifunk und andere IT-Dienstleistungen`, 
"/images/raum/serverraum.png"),
        new POI(-4766, -307, 1455, "Mitgliederfächer", [
            `Jedes ordentliche Mitglied kann hier ein Fach zur Aufbewahrung
            persönlicher Gegenstände und Projekte erhalten`,
            `Das Fach beinhaltet entweder eine große oder zwei kleine
            Sichtboxen`
        ], 
"/images/raum/faecher.png"),
        new POI(-4849, -971, -666, "Bar/Theke", [
            `<i>"An der Theke ist der schönste Platz"</i>`,
            `Definitiv aber ein guter Platz um angeregte Gespräche zu führen
            und eine kühle Erfrischung zu genießen.`
        ], "/images/raum/bar.png"),
        new POI(4804, -549, 1230, "3D-Druck Werkstatt", [
            `Hier ist der vereinseigene 3D-Drucker <i>Prusa i3 MK2.5s</i> 
            zuhause.`,
            `Mitglieder können hier nach einer Einweisung alles drucken, was
            das Herz begehrt. Zur Abrechnung des Filaments zum 
            Selbstkostenpreis steht eine Grammwaage zur Verfügung.`
        ], 
"/images/raum/3ddruck.png"),
        new POI(-250, 45, 4985, "Elektrowerkstatt", [
            `Dieser Arbeitsplatz beherbergt alles, was das Elektronikerherz
            begehrt.`,
            `Ob Lötkolben, Labornetzteil, Oszilloskop oder Multimeter, alles 
            was zur Fertigstellung eines Elektronikprojektes nötig ist, ist
            vorhanden.`
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
