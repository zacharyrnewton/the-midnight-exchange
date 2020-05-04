import React, { Component } from "react"
import PropTypes from "prop-types"
import RichTextEditor from "react-rte"

if (typeof document !== "undefined") {
}
class MyStatefulEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }
  state = {
    value: RichTextEditor.createEmptyValue(),
  }
  onChange = value => {
    this.setState({ value })
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      var val = this.props.onChange(value.toString("html"))
      console.log(val)
    }
  }
  render() {
    const toolbarConfig = {
      display: [
        "INLINE_STYLE_BUTTONS",
        "BLOCK_TYPE_BUTTONS",
        "LINK_BUTTONS",
        "HISTORY_BUTTONS",
      ],
      INLINE_STYLE_BUTTONS: [
        { label: "Bold", style: "BOLD", className: "custom-css-class" },
        { label: "Italic", style: "ITALIC" },
      ],
      BLOCK_TYPE_DROPDOWN: [{ label: "Normal", style: "unstyled" }],
      BLOCK_TYPE_BUTTONS: [
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
      ],
    }
    return (
      <>
        <RichTextEditor
          toolbarConfig={toolbarConfig}
          value={this.state.value}
          onChange={this.onChange}
          placeholder={this.props.placeholder}
          className={this.props.className}
          editorClassName={this.props.editorClass}
          toolbarClassName={this.props.toolbarClassName}
          id={this.props.id}
          name={this.props.name}
        />
        <textarea className="source" placeholder="Editor Source" />
      </>
    )
  }
}

export default MyStatefulEditor
