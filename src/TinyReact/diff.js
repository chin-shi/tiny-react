import mountElement from "./mountElement";
import updateTextNode from "./updateTextNode";
import updateNodeElement from "./updateNodeElement";
import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function diff(virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
  // 判断 oldDOM 是否存在
  if (!oldDOM) {
    mountElement(virtualDOM, container);
  } else if (
    oldVirtualDOM.type !== virtualDOM.type &&
    typeof virtualDOM.type !== "function"
  ) {
    const newElement = createDOMElement(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {
    if (virtualDOM.type === "text") {
      // 更新内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
    } else {
      // 更新元素节点属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
    }
    // 对比子节点
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i]);
    });
    // 删除节点
    // 获取旧节点
    let oldChildNodes = oldDOM.childNodes;
    // 判断旧节点数量
    if (oldChildNodes.length > virtualDOM.children.length) {
      // 元素节点
      for (
        let i = oldChildNodes.length - 1;
        i > virtualDOM.children.length - 1;
        i--
      ) {
        unmountNode(oldChildNodes[i]);
      }
    }
  }
}
