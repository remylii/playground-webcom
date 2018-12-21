import { LitElement, html } from '@polymer/lit-element';

export default class MyTodo extends LitElement {
    constructor() {
        super();

        this.list = [
            { text: 'my initial todo item', checked: false },
            { text: 'Web Components でできてる', checked: true },
            { text: 'IE, edgeではpolyfillしてないから動かないよ', checked: false }
        ];

        this.addItem = this.addItem.bind(this);
        this.toggleItem = this.toggleItem.bind(this);
        this.removeItem = this.removeItem.bind(this);

        // let div = document.createElement('div');
        // div.textContent = "initialize!!";
        // this.attachShadow({mode: "open"});
        // this.shadowRoot.appendChild(div);
    }

    addItem(e, text) {
        this.list = [...this.list, { text, checked: false }];
        this.requestUpdate('list');
    }

    toggleItem(e, index) {
        console.log('Called MyTodo.toggleItem');
        const list = [...this.list];
        const item = list[index];
        list[index] = Object.assign({}, item, { checked: !item.checked });
        this.list = list;
        this.requestUpdate('list');
    }

    removeItem(e, index) {
        console.log('Called MyTodo.removeItem');
        this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
        this.requestUpdate('list');
    }

    render() {
        return html`
            <style>
                h1 {
                    font-size: 140%;
                    text-align: center;
                    color: rgba(175, 47, 47, 0.85);
                }

                .container {
                    margin: 0 20%;
                }
            </style>
            <div class="container">
                <h1>Todo List by Lit-element</h1>
                <secction>
                    <todo-input @submit="${e => this.addItem(e, e.detail)}"></todo-input>
                    ${this.list.map((item, index) => html`
                        <todo-item
                            .text="${item.text}"
                            .checked="${item.checked}"
                            .index="${index}"
                            @toggle="${e => this.toggleItem(e, e.detail)}"
                            @remove="${e => this.removeItem(e, e.detail)}"
                        ></todo-item>`)}
                </secction>
            </div>`;
    }
}
