import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import 'semantic-ui-css/semantic.min.css';
import {Form, Label, Button, Header, Input } from 'semantic-ui-react';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  }

  async componentDidMount() {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);

      this.setState({ manager, players, balance });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message: 'You have been entered!' });
    window.location.reload(true)
  };

  onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ message: 'A winner has been picked' });
  };

  render() {
    return (
      <div className="container-fluid mt-7" align="center">
      <div className="row">
      <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '980px' }}>
      <div className="content mr-auto ml-auto">
      <Header as='h2' textAlign='center' block>
        Lottery Game
        </Header>
        <Header as='h3' textAlign='center' block>
          This contract is managed by { this.state.manager } <br/>
          There are currently { this.state.players.length } people entered
          competing to win { web3.utils.fromWei(this.state.balance, 'ether') }
         </Header>

        <Form onSubmit={this.onSubmit}>
        <Form.Field>
        <table>
        <tr align="center">  <Label as='a' color='olive' size="big">Try your luck</Label><br /><br /></tr>
        <tr>
        <th width="700px">
          <Input
          fluid
          placeholder="Enter the amount"
          size="large"
          label="My amount"
          labelPosition="left"
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
           />
           </th>
           <th>
           <Button primary size="large">Enter</Button>
           </th>
           </tr>
           </table>
        </Form.Field>
        </Form>
        <h1>{this.state.message}</h1>
        <Label as='a' size="massive">
        Ready to pick a winner
        </Label>
        <br/>
        <br />
        <Button primary size="big" onClick={this.onClick}>Pick a Winner!</Button>

      </div>
      </main>
      </div>
      </div>
    );
  }
}

export default App;
