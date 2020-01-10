import { LitElement, html, css } from "lit-element";

export class MvTab extends LitElement {
  static get properties() {
    return {
      key: { type: String, attribute: true },
      group: { type: Boolean, attribute: true },
      tab: { type: Boolean, attribute: true },
      content: { type: Boolean, attribute: true },
      disabled: { type: Boolean, attribute: true },
      active: { type: Boolean, reflect: true },
      selected: { type: String, reflect: true },

      //  valid type values are: "rounded", "icon"
      //    default: "header"
      type: { type: String, attribute: true },
      first: { type: Boolean, attribute: true },
      last: { type: Boolean, attribute: true },
      total: { type: Number, attribute: true },
      lastItem: { type: String, attribute: true },
      parentType: { type: String, attribute: true }
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
				display: grid;
        padding-bottom: var(--mv-tab-padding-bottom, 0px);
        position: relative;
        width: var(--mv-tab-width, 100%);
			}

			li {
				display: flex;
				align-items: center;
        justify-content: center;
        white-space: nowrap;
        cursor: pointer;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
			}

			li[disabled] {
				cursor: unset;
				color: var(--n-color, rgb(105, 109, 110));
				background-color: var(--on-pl-color, rgb(187, 187, 187));
				border-color: var(--nd-color, rgb(187, 187, 187));
			}

			section {
				padding: 10px;
				background-color: var(--b-color, rgb(255, 255, 255));
			}

			p {
				display: none;
				margin-block-start: unset;
				margin-block-end: unset;
			}

			ul.header {
			  position: relative;
			}

			li.header {
			  font-size: var(--font-size-xl, 20px);
        font-weight: 400;
        height: var(--mv-tab-height, 71px);
        box-shadow: inset 0 0 9px 0 rgba(29, 155, 201, 0.3);
			  background: var(--mv-tab-background-color, #DFE7EE);
			  color: var(--mv-tab-color, #67AFD3);
			  border: 1px solid #99D2E7;
			}

			li.header:hover {
			  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
			}

			li[active].header {
			  font-weight: 700;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
        color: var(--mv-tab-color-active, #FFFFFF);
        cursor: default;
        background: var(--mv-tab-background-color-active, radial-gradient(circle , #007adf 0%, #00ec76 180%));
			}

			li[first].header {
			  border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
			}

		  li[first][active].header {
		    background: var(--mv-tab-background-color-active, linear-gradient(to right, #007adf 0%, #00ec76 180%));
		    border: none;
			}

			li[last].header {
			  border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
			}

			li[last][active].header {
			  background: var(--mv-tab-background-color-active, linear-gradient(to left, #007adf 0%, #00ec76 180%));
			  border: none;
			}

			ul.rounded {
			  position: relative;
			}

			li.rounded {
			  font-size: var(--font-size-xl, 20px);
        font-weight: 400;
        height: var(--mv-tab-height, 51px);
        color: var(--mv-tab-color, #4E686D);
			  border: solid 1px var(--mv-tab-background-color-active, #4E686D);
			  background: var(--mv-tab-background-color, #FFFFFF);
			}

			li.rounded:hover {
			  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
			}

			li[first].rounded {
			  border-radius: 25px 0 0 25px;
			}

			li[last].rounded {
			  border-radius: 0 25px 25px 0;
			}

			li[active].rounded {
			  background: var(--mv-tab-background-color-active, #4E686D);
			  color: var(--mv-tab-color-active, #FFFFFF);
			  box-shadow: none;
			  cursor: default;
			}

			ul.icon {
			  position: relative;
			}

			li.icon {
        border-radius: 5px;
        width: var(--mv-tab-icon-width, 29px);
        height: var(--mv-tab-icon-height, 29px);
        background-color: var(--mv-tab-background-color, #FFFFFF);
        color: var(--mv-tab-color, #4E686D);
        border: 1px solid var(--mv-tab-background-color-active, #4E686D);
        font-size: var(--font-size-m, 16px);
			}

			li.icon:hover {
			  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.4);
			}

			li[active].icon {
			  background: var(--mv-tab-background-color-active, #4E686D);
			  color: var(--mv-tab-color-active, #FFFFFF);
			  box-shadow: none;
			  cursor: default;
			}

			li[first].icon {
			  position: absolute;
			  right: 39px;
			}

			li[last].icon {
			  position: absolute;
			  right: 0px;
			}
		`;
  }

  constructor() {
    super();
    this.type = "header";
  }

  render() {
    if (this.group) {
      const total = this.children.length / 2;
      const gridStyle = `grid-template-columns: repeat(${total}, 1fr)`;
      return html`
        <div class="mv-tab-group">
          <nav class="mv-tab-menu">
            <ul class="${this.type}" style="${gridStyle}">
              <slot name="tab-item"></slot>
            </ul>
          </nav>
          <section class="mv-tab-content">
            <slot name="tab-content"></slot>
          </section>
        </div>
        `;
    } else if (this.tab) {
      this.setAttribute("slot", "tab-item");
      return html`
      <li
        class="${this.type}"
        .value="${this.key}"
        ?first="${this.first}"
        ?last="${this.last}"
        ?disabled="${this.disabled}"
        ?active="${this.active}"
        @click="${this.selectTab}"
      >
        <slot></slot>
      </li>
      `;
    } else if (this.content && this.active) {
      this.setAttribute("slot", "tab-content");
      return html`
			    <slot></slot>
			  `;
    }
    return html``;
  }

  connectedCallback() {
    //initialize
    if (this.group) {
      this.selected =
        this.children &&
        this.children[0] &&
        this.children[0].getAttribute("key");
      this.lastItem =
        this.children &&
        this.children[this.children.length - 1] &&
        this.children[this.children.length - 1].getAttribute("key");
      this.parentType = this.type;
    }
    if (this.tab || this.content) {
      this.active = this.key === this.parentNode.selected;
      this.last = this.key === this.parentNode.lastItem;
      this.first = this.key === this.parentNode.selected;
      if (this.parentNode.parentType) {
        this.type = this.parentNode.parentType;
      }
    }
    super.connectedCallback();
  }

  attributeChangedCallback(name, oldval, newval) {
    if (this.group && name === "selected") {
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

  selectTab = () => {
    if (!this.disabled) {
      this.parentNode.selected = this.key;
    }
  };
}

customElements.define("mv-tab", MvTab);
