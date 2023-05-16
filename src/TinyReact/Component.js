import diff from "./diff";
export default class Component {
  constructor(props) {
    this.props = props;
  }
  setState(state) {
    this.state = Object.assign({}, this.state, state);
    // 获取最新的virtualDOM
    let virtualDOM = this.render();
    // 获取旧的 virtualDOM 对象进行比对
    let oldDOM = this.getDOM();
    // 获取容器
    let container = oldDOM.parentNode;
    // 实现 DOM diff 比对
    diff(virtualDOM, container, oldDOM);
  }
  setDOM(dom) {
    this._dom = dom;
  }
  getDOM() {
    return this._dom;
  }
}
