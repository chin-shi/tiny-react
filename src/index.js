import TinyReact from "./TinyReact";

const root = document.getElementById("root");

const virtualDOM = (
  <div class="container">
    <h1>你好！Tiny React</h1>
    <h2 data-test="test">(编程必杀技)</h2>
    <div>
      嵌套1<div>嵌套1.1</div>
    </div>
    <h3>(观察：这个会被改变)</h3>
    {2 === 1 && <div>如果2==1，渲染这个</div>}
    {2 === 2 && <div>2</div>}
    <span>这是一个文本</span>
    <button onClick={() => alert("你好")}>点击按钮</button>
    <h3>这个会被删除</h3>
    2,3
    <input type="text" value="13" />
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
);

const modifyDOM = (
  <div class="container">
    <h1>你好！Tiny React</h1>
    <h2 data-test="tes123">(编程必杀技)</h2>
    <div>
      嵌套1<div>嵌套1.1</div>
    </div>
    <h3>(观察：这个会被改变)</h3>
    {2 === 1 && <div>如果2==1，渲染这个</div>}
    {2 === 2 && <div>2</div>}
    <span>这是一段被修改的内容</span>
    <button onClick={() => alert("你好！！！")}>点击按钮</button>
    {/* <h6>这个会被删除</h6> */}
    {/* 2,3,4 */}
    <input type="text" value="13" />
    <ul>
      <li>1</li>
      <li>3</li>
    </ul>
  </div>
);

// TinyReact.render(virtualDOM, root);

// setTimeout(() => {
//   TinyReact.render(modifyDOM, root);
// }, 2000);

const Demo = () => <div>Hello</div>;

const Heart = (props) => (
  <div>
    {props.title}
    &hearts;
    <Demo />
  </div>
);

// TinyReact.render(<Heart title="Hello React" />, root);

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Default Title",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ title: "Changed Title" });
  }
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age}
        <div>{this.state.title}</div>
        <button onClick={this.handleClick}>改变Title</button>
      </div>
    );
  }
}

TinyReact.render(<Alert name="张三" age={20} />, root);
