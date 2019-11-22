import {
	LitElement,
	html,
	css
} from 'https://cdn.jsdelivr.net/gh/manaty/mv-dependencies@master/web_modules/lit-element.js';

export class MvTab extends LitElement {
	static get properties() {
		return {
			key: { type: String, attribute: true },
			group: { type: Boolean, attribute: true },
			tab: { type: Boolean, attribute: true },
			content: { type: Boolean, attribute: true },
			disabled: { type: Boolean, attribute: true },
			active: { type: Boolean, reflect: true },
			selected: { type: String, reflect: true }
		};
	}

	static get styles() {
		return css`
			:host {
				font-family: var(--font-family, Arial);
				font-size: var(--font-size-m, 10pt);
				line-height: var(--line-height-s, 1.625);
			}
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}
			li {
				cursor: pointer;
				display: inline;
				padding: 3px 3px 1px 3px;
				margin-left: 5px;
				margin-right: 5px;
				border-radius: 15% 15% 0 0;
				border: 1px solid var(--nd-color, rgb(71, 74, 75));
				border-bottom: none;
				background-color: var(--on-pdd-color, rgb(202, 213, 218));
			}
			li[active] {
				background-color: var(--b-color, rgb(255, 255, 255));
				padding-bottom: 1px;
				border-bottom: 1px solid var(--b-color, rgb(255, 255, 255));
			}
			li[disabled] {
				cursor: unset;
				color: var(--n-color, rgb(105, 109, 110));
				background-color: var(--on-pl-color, rgb(187, 187, 187));
				border-color: var(--nd-color, rgb(187, 187, 187));
			}
			section {
				border: 1px solid black;
				padding: 10px;
				background-color: var(--b-color, rgb(255, 255, 255));
			}
			p {
				display: none;
				margin-block-start: unset;
				margin-block-end: unset;
			}
		`;
	}

	selectTab = () => {
		if (!this.disabled) {
			this.parentNode.selected = this.key;
		}
	};

	render() {
		if (this.group) {
			return html`
        <div class="mv-tab-group">
          <nav class="mv-tab-menu">
            <ul>
              <slot name="tab-item"></slot>
            </ul>
          </nav>
          <section class="mv-tab-content">
            <slot name="tab-content"></slot>
          </section>
        </div>
        `;
		} else if (this.tab) {
			this.setAttribute('slot', 'tab-item');
			return html`
      <li .value="${this.key}" ?disabled="${this.disabled}" ?active="${this.active}" @click="${this.selectTab}">
        <slot></slot>
      </li>
      `;
		} else if (this.content && this.active) {
			this.setAttribute('slot', 'tab-content');
			return html`
			    <slot></slot>
			  `;
		}
		return html``;
	}

	connectedCallback() {
		//initialize
		if (this.group) {
			this.selected = this.children && this.children[0] && this.children[0].getAttribute('key');
		}
		if (this.tab || this.content) {
			this.active = this.key === this.parentNode.selected;
		}
		super.connectedCallback();
	}

	attributeChangedCallback(name, oldval, newval) {
		if (this.group && name === 'selected') {
			let oldTabFound = false;
			let oldContentFound = false;
			let newTabFound = false;
			let newContentFound = false;
			for (let child of this.children) {
				const isActive = child.active;
				const isSelected = child.key === this.selected;
				if (oldTabFound && newTabFound && oldContentFound && newContentFound) {
					break;
				}
				if (isActive && !isSelected) {
					oldTabFound = this.tab ? true : oldTabFound;
					oldContentFound = this.content ? true : oldContentFound;
					child.active = false;
				} else if (isSelected) {
					newTabFound = this.tab ? true : newTabFound;
					newContentFound = this.content ? true : newContentFound;
					child.active = true;
				}
			}
		}
		super.attributeChangedCallback(name, oldval, newval);
	}
}

customElements.define('mv-tab', MvTab);