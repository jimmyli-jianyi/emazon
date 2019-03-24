import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { itemLookingFor: '' };

    this.handleChange = this.handleChange.bind(this);
    this.gatherInput = this.gatherInput.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  gatherInput(evt) {
    evt.preventDefault();
    this.setState({
      task: ''
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#FF0000' }}>
        <div>
          <h1>Emazon</h1>
        </div>
        <div>
          <form onSubmit={this.gatherInput}>
            <label htmlFor="task" />
            <input
              placeholder="Search an item"
              name="task"
              type="text"
              onChange={this.handleChange}
              value={this.state.task}
            />
            <button>Search a product</button>
          </form>
        </div>
        <div>
          <button>WishList</button>
        </div>
        <div>
          <button>Cart</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
