class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "" };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return React.createElement(
      "div",
      { className: "MarkdownEditor" },
      React.createElement(
        "p",
        null,
        "Input:"
      ),
      React.createElement(
        "label",
        { htmlFor: "markdown-content" },
        "Enter some markdown"
      ),
      React.createElement("textarea", {
        id: "markdown-content",
        onChange: this.handleChange,
        defaultValue: this.state.value
      }),
      React.createElement(
        "p",
        null,
        "Output:"
      ),
      React.createElement("div", {
        className: "content",
        dangerouslySetInnerHTML: this.getRawMarkup()
      })
    );
  }
}

ReactDOM.render(React.createElement(MarkdownEditor, null), 
document.getElementById("markdownEditor"));