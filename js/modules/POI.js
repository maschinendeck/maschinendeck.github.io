"use strict";

class POI {
	constructor(x, y, z, title, text, image = null) {
		this.x     = x;
		this.y     = y;
		this.z     = z;
		this.title = title;
		this.text  = text;
		this.image = image;
		this.id    = `poi-${POI.Count}`;

		POI.Count++;
	}

	markup() {
		const template = document.createElement("template");
		template.innerHTML = `
                <article class="card" style="display: none;" id="${this.id}">
                    ${this.image ? `<img src="${this.image}" alt="${this.title}"/>` : ""}
                    <main>
                        <h4>${this.title}</h4>
                        ${Array.isArray(this.text) ? this.text.map(text => `<p>${text}</p>`).join(" ") : `<p>${this.text}</p>`}
                    </main>
                </article>
            `.trim();

		return template.content.firstChild;
	}
}
POI.Count = 0;

export default POI;
