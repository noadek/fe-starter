import React, { FunctionComponent } from 'react';

interface IGreetingProps {
  firstName: string;
  lastName: string;
}

const Greeting: FunctionComponent<IGreetingProps> = ({
  firstName,
  lastName,
}: IGreetingProps) => (
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

export function AnotherGreeting({
  firstName,
  lastName,
}: IGreetingProps): JSX.Element {
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

export default Greeting;
