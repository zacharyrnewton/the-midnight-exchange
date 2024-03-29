import React, { Component } from "react"
import PropTypes from "prop-types"
import RichTextEditor from "react-rte"
// import style from "../../../sass/components/rte.module.sass"
import style from "../../../sass/styles.css"

export default class MyStatefulEditor extends Component {
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
    let { value } = this.state
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
          value={value}
          onChange={this.onChange}
          placeholder={this.props.placeholder}
          className={style.rte}
          editorClassName={style.editor}
          toolbarClassName={style.toolbar}
          name={this.props.name}
        />
        <textarea
          id={this.props.id}
          placeholder="Editor Source"
          value={value.toString("html")}
          readOnly
          hidden
        />
      </>
    )
  }
}
