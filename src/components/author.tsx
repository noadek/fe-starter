import React, { useState, useEffect, ReactNode } from 'react';

import user$ from '../services/user.service';

function Author(): ReactNode {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const customerSubscription = user$.subscribe(
      (data: any) => {
        setCustomer(data);
      },
    );

    return () => customerSubscription.unsubscribe();
  });

  return (
    <div>
      <div>Loan Data</div>
      <div>{customer !== null ? customer.data.msg : 'null'}</div>
    </div>
  );
}

export default Author;
