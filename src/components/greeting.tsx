import React, { FunctionComponent } from 'react';

interface GreetingProps {
  firstName: string,
  lastName: string
}

export const Greeting: FunctionComponent<GreetingProps> = ({
  firstName,
  lastName
}) => {
  return (
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-900 leading-tight">
          {firstName} {lastName}
        </h4>
        <p className="text-base text-gray-600 leading-normal">
          You have a new message!
        </p>
      </div>
    </div>
  );
}
