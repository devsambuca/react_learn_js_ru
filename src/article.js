import React, { Component } from "react";

import CommentList from "./commentList";
export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>{isOpen ? "close" : "open"}</button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const { article, isOpen } = this.props;

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    );
  }

  toggleOpen = ev => {
    ev.preventDefault();
    console.log("----", ev.nativeEvent);
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}
// export default function Article(props) {
//   const { article } = props;

//   return (
//     <div>
//       <h3>{article.title}</h3>
//       <section>{article.text}</section>
//     </div>
//   );
// }
