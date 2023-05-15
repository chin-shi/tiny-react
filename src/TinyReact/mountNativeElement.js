import createDOMElement from "./createDOMElement";

export default function mountNativeElement(virtualDOM, container) {
  let newElement = createDOMElement(virtualDOM);
  // 将转换之后的 DOM 对象放置在页面中
  container.appendChild(newElement);

  let component = virtualDOM.component;

  if (component) {
    component.setDOM(newElement);
  }
}
