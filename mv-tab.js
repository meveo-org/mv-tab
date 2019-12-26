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
      index: { type: Number, attribute: true },
      tabType: { type: String, attribute: true }
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
				margin: 0 auto;
				display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-bottom: var(--mv-tab-padding-bottom, 12px);
        position: relative;
        width: var(--mv-tab-width, 100%);
			}
			
			li {
				display: flex;
				align-items: center;
        justify-content: center;
        white-space: nowrap;
        cursor: pointer; 
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
			
			ul.main-tab {
			  position: relative;
			}
			
			li.main-tab {
			  font-size: var(--mv-tab-font-size, 20px);
        font-weight: 400;
        height: var(--mv-tab-height, 71px);
        box-shadow: inset 0 0 9px 0 rgba(29, 155, 201, 0.3);
			  background: var(--mv-tab-background-color, #DFE7EE);
			  color: var(--mv-tab-color, #67AFD3);
			  border: 1px solid #99D2E7;
			  box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
			}
			
			li.main-tab:hover {
			  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
			}
			
			li[active].main-tab {
			  font-weight: 700;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
        color: var(--mv-tab-color-active, #FFFFFF);
			}
			
			li[index="0"].main-tab {
			  border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
			}
			
		  li[index="0"][active].main-tab {
		    background: var(--mv-tab-background-color-active, linear-gradient(to right, #007adf 0%, #00ec76 180%));
		    border: none;
			}
			
			li[index="1"].main-tab {
			  border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
			}
			
			li[index="1"][active].main-tab {
			  background: var(--mv-tab-background-color-active, linear-gradient(to left, #007adf 0%, #00ec76 180%));
			  border: none;
			}
			
			ul.panel-tab {
			  position: relative;
			}
			
			li.panel-tab {
			  font-size: var(--mv-tab-font-size, 20px);
        font-weight: 400;
        height: var(--mv-tab-height, 51px);
        color: var(--mv-tab-color, #4E686D);
			  border: solid 1px var(--mv-tab-background-color-active, #4E686D);
			  background: var(--mv-tab-background-color, #FFFFFF);
			  box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
			}
			
			li.panel-tab:hover {
			  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
			}
			
			li[index="0"].panel-tab {
			  border-radius: 25px 0 0 25px;
			}
			
			li[index="1"].panel-tab {
			  border-radius: 0 25px 25px 0;
			}
			
			li[active].panel-tab {
			  background: var(--mv-tab-background-color-active, #4E686D);
			  color: var(--mv-tab-color-active, #FFFFFF);
			  box-shadow: none;
			}
			
			ul.icon-tab {
			  position: relative;
			}
			
			li.icon-tab {
        border-radius: 5px;
        width: var(--mv-tab-icon-width, 29px);
        height: var(--mv-tab-icon-height, 29px);
        background-color: var(--mv-tab-background-color, #FFFFFF);
        color: var(--mv-tab-color, #4E686D);
        border: 1px solid var(--mv-tab-background-color-active, #4E686D);
        font-size: var(--mv-tab-font-size, 16px);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
			}
			
			li.icon-tab:hover {
			  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.4);
			}
			
			li[active].icon-tab {
			  background: var(--mv-tab-background-color-active, #4E686D);
			  color: var(--mv-tab-color-active, #FFFFFF);
			  box-shadow: none;
			}
			
			li[index="0"].icon-tab {
			  position: absolute;
			  right: 39px;
			}
			
			li[index="1"].icon-tab {
			  position: absolute;
			  right: 0px;
			}
		`;
  }

  constructor() {
    super();
    this.tabType = "main-tab";
  }

  render() {
    if (this.group) {
      return html`
        <div class="mv-tab-group">
          <nav class="mv-tab-menu">
            <ul class="${this.tabType}">
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
        class="${this.tabType}"
        .value="${this.key}"
        index="${this.index}"
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
    }
    if (this.tab || this.content) {
      this.active = this.key === this.parentNode.selected;
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
