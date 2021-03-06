import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

// components
import BookDetails from "./BookDetails";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayBooks() {
    let data = this.props.data;

    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map(b => (
        <li key={b.id} onClick={e => this.setState({ selected: b.id })}>
          {b.name}
        </li>
      ));
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
