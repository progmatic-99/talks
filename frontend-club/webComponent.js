/*
 * hyphen necessary
 * Shadow DOM (need for it -> CSS)
 * style is encapsulated in the component
 */

const template = document.createElement("template");
template.innerHTML = `
  <style>
  h3 {
    color: green;
  }
  </style>
  <h3>
    <input type="checkbox" />
    <slot></slot>
  </h3>
`;

class SimpleComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>${this.innerText}</h1>`;
  }
}

class TodoItem extends HTMLElement {
  constructor() {
    super();

    // this.innerHTML = `<h3>${this.innerText}</h3>`;

    // Shadow DOM
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

const customTemplate = document.createElement("template");
customTemplate.innerHTML = `
  <style>
    label {
      color: blue;
      display: block;
    }
    .description {
      font-size: .65rem;
      font-weight: lighter;
      color: #777;
    }
  </style>
  <label>
    <input type="checkbox" />
    <slot></slot>
    <span class="description">
      <slot name="description"></slot>
    </span>
  </label>
`;

class CustomTodoItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(customTemplate.content.cloneNode(true));
  }
}

// attaching classed to html custom tags
customElements.define("todo-item", TodoItem);
customElements.define("custom-todo-item", CustomTodoItem);
customElements.define("simple-component", SimpleComponent);
