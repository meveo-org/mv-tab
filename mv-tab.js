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
        --mv-tab-font-family: var(--font-family, Arial);
        --mv-tab-font-size: var(--font-size-m, 10pt);
        --padding-bottom: var(--mv-tab-padding-bottom, 0px);
        --width: var(--mv-tab-width, 100%);
        
        --header-font-size: var(--font-size-xl, 20px);
        --header-height: var(--mv-tab-header-height, 71px);
        --header-background-color: var(--mv-tab-header-background-color, #DFE7EE);
        --header-background-color-active: var(--mv-tab-header-background-color-active, radial-gradient(circle , #007adf 0%, #00ec76 180%));
        --header-first-background-color-active: var(--mv-tab-header-first-background-color-active, linear-gradient(to right, #007adf 0%, #00ec76 180%));
        --header-last-background-color-active: var(--mv-tab-header-last-background-color-active, linear-gradient(to left, #007adf 0%, #00ec76 180%));
        --header-color: var(--mv-tab-header-color, #67AFD3);
        --header-color-active: var(--mv-tab-header-color-active, #FFFFFF);
        --header-border-color: var(--mv-tab-header-border-color, #99D2E7);
        --header-border-radius: var(--mv-tab-header-border-radius, 5px);
 
        --rounded-font-size: var(--font-size-xl, 20px);
        --rounded-height: var(--mv-tab-rounded-height, 51px);
        --rounded-background-color: var(--mv-tab-rounded-background-color, #FFFFFF);
        --rounded-background-color-active: var(--mv-tab-rounded-background-color-active, #4E686D);
        --rounded-color: var(--mv-tab-rounded-color, #4E686D);
        --rounded-color-active: var(--mv-tab-rounded-color-active, #FFFFFF);
        --rounded-border-radius: var(--mv-tab-rounded-border-radius, 25px);
        
        --icon-font-size: var(--font-size-m, 16px);
        --icon-size: var(--mv-tab-icon-size, 29px);
        --icon-background-color: var(--mv-tab-icon-background-color, #FFFFFF);
        --icon-color: var(--mv-tab-icon-color, #4E686D);
        --icon-background-color-active: var(--mv-tab-icon-background-color-active, #4E686D);
        --icon-color-active: var(--mv-tab-icon-color-active, #FFFFFF);
        --icon-border-radius: var(--mv-tab-icon-border-radius, 5px);
        --icon-first-right: var(--mv-tab-icon-first-right, 39px);
        --icon-last-right: var(--mv-tab-icon-last-right, 0px);
	  }

      ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
        padding-bottom: var(--padding-bottom);
        position: relative;
        width: var(--width);
        font-family: var(--mv-tab-font-family);
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
		font-family: var(--mv-tab-font-family);
		font-size: var(--mv-tab-font-size);
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
		font-size: var(--header-font-size);
        font-weight: 400;
        height: var(--header-height);
        box-shadow: inset 0 0 9px 0 rgba(29, 155, 201, 0.3);
		background: var(--header-background-color);
		color: var(--header-color);
	    border: 1px solid var(--header-border-color);
	  }

	  li.header:hover {
	    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
	  }

	  li[active].header {
		font-weight: 700;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
        color: var(--header-color-active);
        cursor: default;
        background: var(--header-background-color-active);
	  }

	  li[first].header {
		border-top-left-radius: var(--header-border-radius);
        border-bottom-left-radius: var(--header-border-radius);
	  }

	  li[first][active].header {
		background: var(--header-first-background-color-active);
		border: none;
	  }

	  li[last].header {
		border-top-right-radius: var(--header-border-radius);
        border-bottom-right-radius: var(--header-border-radius);
	  }

	  li[last][active].header {
	    background: var(--header-last-background-color-active);
		border: none;
	  }

	  ul.rounded {
		position: relative;
	  }

	  li.rounded {
	    font-size: var(--rounded-font-size);
        font-weight: 400;
        height: var(--rounded-height);
        color: var(--rounded-color);
		border: solid 1px var(--rounded-background-color-active);
	    background: var(--rounded-background-color);
	  }

	  li.rounded:hover {
	    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
	  }

	  li[first].rounded {
		border-radius: var(--rounded-border-radius) 0 0 var(--rounded-border-radius);
	  }

	  li[last].rounded {
		border-radius: 0 var(--rounded-border-radius) var(--rounded-border-radius) 0;
	  }

	  li[active].rounded {
		background: var(--rounded-background-color-active);
		color: var(--rounded-color-active);
		box-shadow: none;
		cursor: default;
	  }

	  ul.icon {
		position: relative;
	  }

	  li.icon {
        border-radius: var(--icon-border-radius);
        width: var(--icon-size);
        height: var(--icon-size);
        background-color: var(--icon-background-color);
        color: var(--icon-color);
        border: 1px solid var(--icon-background-color-active);
        font-size: var(--icon-font-size);
	  }

	  li.icon:hover {
		box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.4);
	  }

	  li[active].icon {
	    background: var(--icon-background-color-active);
	    color: var(--icon-color-active);
		box-shadow: none;
		cursor: default;
	  }

	  li[first].icon {
		position: absolute;
		right: var(--icon-first-right);
	  }

	  li[last].icon {
		position: absolute;
	    right: var(--icon-last-right);
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
