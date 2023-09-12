import { LitElement, html } from "lit-element";
 
import "./my.element"


export class Casa extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html `
        <my-element></my-element>
        <my-dash></my-dash>
        <my-actas></my-actas>
        <my-pendients></my-pendients>
        <my-solicitud></my-solicitud>
        `
    }
}

customElements.define ('my-casa', Casa);