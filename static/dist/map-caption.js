/*! @maps4html/web-map-custom-element 17-04-2023 */

class MapCaption extends HTMLElement{constructor(){super()}connectedCallback(){if("MAPML-VIEWER"===this.parentElement.nodeName||"MAP"===this.parentElement.nodeName){let t=this.parentElement.querySelector("map-caption").textContent;var e;this.observer=new MutationObserver(()=>{this.parentElement.querySelector("map-caption").textContent!==t&&this.parentElement.setAttribute("aria-label",this.parentElement.querySelector("map-caption").textContent)}),this.observer.observe(this,{characterData:!0,subtree:!0,attributes:!0,childList:!0}),this.parentElement.hasAttribute("aria-label")||(e=this.textContent,this.parentElement.setAttribute("aria-label",e))}}disconnectedCallback(){this.observer.disconnect()}}export{MapCaption};
//# sourceMappingURL=map-caption.js.map