import { LitElement, html } from "@polymer/lit-element";

export default class TodoItem extends LitElement {

    static get properties() {
        return {
            text: {
                type: String
            },
            checked: {
                type: Boolean,
                attrName: 'checked'
            },
            index: {
                type: Number
            }
        };
    }

    constructor() {
        super();
        this.onToggle = this.onToggle.bind(this);
        this.onClick  = this.onClick.bind(this);
    }

    onToggle() {
        console.log('Called TodoItem.onToggle');
        this.dispatchEvent(new CustomEvent('toggle', { detail: this.index }));
    }

    onClick() {
        console.log('Called TodoItem.onClick');
        this.dispatchEvent(new CustomEvent('remove', { detail: this.index }));
    }

    render() {
        return html`
            <div>
                <input type="checkbox" name="todo-item-${this.index}" .checked="${this.checked}" @click="${this.onToggle}">
                <label for="todo-item-${this.index}">${this.text}</label>
                <button @click="${this.onClick}">x</button>
            </div>
        `;
    }
}
