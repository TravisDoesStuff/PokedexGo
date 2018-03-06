import React, { Component } from 'react';
import './Pokedex.css';
import pokemon from './pokemon.js';
import { Button, Icon, Header, Segment, Container, Input } from 'semantic-ui-react';

class Pokedex extends Component {

  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Pokedex Go</h1>
        </header>
        {this.renderPokedex(pokemon)}
      </div>
    );
  }

  renderPokedex(pokemon) {
    return (
        <Container>
          {this.renderSearch()}
          <Segment.Group>
            {this.renderPokemonRow()}
          </Segment.Group>
        </Container>
    )
  }

  renderSearch() {
    return (
      <div>
        <Input icon="search" size="large" placeholder="Search..." onChange={this.searchPokemon()} />
      </div>
    )
  }

  renderPokemonRow() {
    let pokemonList = pokemon.map(species => {
      return (
        <Segment size="massive">
          <span>{species._id}.&nbsp;</span>
          <span>{species.name}</span>
          {this.renderPokemonCheckboxes(species)}
        </Segment>
      )
    })
    return pokemonList;
  }

  renderPokemonCheckboxes(species) {
    return (
      <span>
        {this.renderCaughtButton(species)}
        {this.renderMaleButton(species)}
        {this.renderFemaleButton(species)}
        {this.renderShinyButton(species)}
      </span>
    )
  }

  renderCaughtButton(species) {
    if(species.caught === true){
      return (<Button color="teal" circular size="large" icon="checkmark" />);
    } else {
      return (<Button color="teal" basic circular size="large" icon="checkmark" />)
    }
  }

  renderMaleButton(species) {
    if(species.male === true){
      return (<Button color="blue" circular size="large" icon="man" />);
    } else {
      return (<Button color="blue" basic circular size="large" icon="man" />)
    }
  }

  renderFemaleButton(species) {
    if(species.female === true){
      return (<Button color="red" circular size="large" icon="woman" />);
    } else {
      return (<Button color="red" basic circular size="large" icon="woman" />)
    }
  }

  renderShinyButton(species) {
    if(species.hasOwnProperty('shiny')){
      if(species.shiny === true){
        return (<Button color="yellow" circular size="large" icon="star" />);
      } else {
        return (<Button color="yellow" basic circular size="large" icon="star" />)
      }
    }
  }

  searchPokemon() {
    console.log();
  }
}

export default Pokedex;
