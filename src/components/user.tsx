import React, { Component } from 'react';

import user$, { UserService } from '../services/user.service';

class User extends Component {
  private customerSubscription: any;

  constructor(props: any) {
    super(props);
    this.state = {
      customer: null,
    };
  }

  componentDidMount(): void {
    this.customerSubscription = user$.subscribe(
      (data: any) => {
        this.setState({ customer: data });
      },
    );

    setTimeout(() => {
      UserService.getCustomer();
    }, 5000);
  }

  componentWillUnmount(): void {
    this.customerSubscription.unsubscribe();
  }

  render(): JSX.Element {
    const { customer } = this.state;

    return (
      <div>
        <div>Customer Data</div>
        <div>{customer ? customer.data.msg : 'null'}</div>
      </div>
    );
  }
}

export default User;
