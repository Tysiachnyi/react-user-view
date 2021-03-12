import React from "react";

export default class UsersComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { users: null };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => this.setState({ users: result }))
      .then(() => {
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <div>
        {this.state.users.map((item: any, index: number) => (
          <h1>{item.name}</h1>
        ))}
      </div>
    );
  }
}
