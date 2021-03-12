import './UsersComponent.css';
import React from 'react';
import { Button, Card } from 'antd';

export default class UsersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => this.setState({ users: result }))
      .then(() => {
        console.log(this.state.users);
      });
  }

  render() {
    return this.state.users.map((item, index) => (
      <div>
        <Card title={item.name}>
          <p>User name: {item.username}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
          <p>
            Website: <a href={item.website}>{item.website}</a>
          </p>
          <Button type="primary">Details</Button>
        </Card>
      </div>
    ));
  }
}
