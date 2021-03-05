class MyButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", (e) => this.ripple(event));
  }

  get title() {
    return this.getAttribute("title");
  }

  doSomething(e) {
    console.log(e);
  }

  ripple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.offsetX - radius}px`;
    circle.style.top = `${event.offsetY - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  }

  connectedCallback() {
    this.innerHTML = this.title;
  }
}
window.customElements.define("my-button", MyButton);
