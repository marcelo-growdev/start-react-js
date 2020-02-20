import React, { Component } from 'react';

import { Card, Title, ItemName } from './styles';

class Main extends Component {
  state = {
    newGrowdev: '',
    growdevers: [],
  };

  componentDidMount() {
    const growdevers = localStorage.getItem('growdevers');

    if (growdevers) {
      this.setState({ growdevers: JSON.parse(growdevers) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.growdevers) {
      localStorage.setItem('growdevers', JSON.stringify(this.state.growdevers));
    }
  }

  handleInputChange = e => {
    this.setState({ newGrowdev: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      growdevers: [...this.state.growdevers, this.state.newGrowdev],
      newGrowdev: '',
    });
  };

  handleDelete = name => {
    this.setState({
      growdevers: this.state.growdevers.filter(item => item !== name),
    });
  };

  render() {
    return (
      <>
        <Card>
          <Title>Lista Growdevers - Programa Starter 1º Edição</Title>
          <form onSubmit={this.handleSubmit}>
            <ul>
              {this.state.growdevers.map(item => (
                <li>
                  <ItemName>{item}</ItemName>
                  <button onClick={() => this.handleDelete(item)} type="button">
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <input
              type="text"
              onChange={this.handleInputChange}
              value={this.state.newGrowdev}
            />
            <button type="submit">Enviar</button>
          </form>
        </Card>
      </>
    );
  }
}

export default Main;
