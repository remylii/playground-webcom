import { LitElement, html } from "@polymer/lit-element";

export default class TodoInput extends LitElement {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        console.log('Called TodoInput.onSubmit');
        e.preventDefault();

        const input = this.shadowRoot.querySelector('input');
        if (!input.value) return;
        this.dispatchEvent(new CustomEvent('submit', { detail: input.value }));
        input.value = '';
    }

    render() {
        return html`
            <style>
                input {
                    width: 100%;
                    height: 3rem;
                    margin: 0 0 8px 0;
                    padding: 0;
                    border: none;
                    border-bottom: 1px solid #9e9e9e;
                    outline: none;
                }
            </style>
            <form @submit="${this.onSubmit}">
                <input type="text" />
            </form>`
    };
}
