class AppHeader extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({mode : 'open'});
        this._style = document.createElement('style')
    }

    _updateStyle() {
        this._style.textContent = `
            div {

                display: flex;
                width: 100vw;
            }

            .footer {
                background-color: red;
            }
        `
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <div class = "footer">
                This is header
            </div>
        `
    }

}

customElements.define('app-header', AppHeader);