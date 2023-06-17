import React, { useState } from 'react';

import { ButtonFill, ButtonOutline } from '../../components/ui/Button/Button';
import { default as InputField } from '../../components/ui/Input/InputField';

const Form = () => {
  const [formData, setFormData] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    setFormData({ firstName: firstName, lastName: lastName, email: email });
  };
  // eslint-disable-next-line no-console
  console.log(formData);
  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <InputField
            name="firstName"
            label="First Name"
            type="text"
            placeholder="First Name"
          />
          <InputField name="lastName" label="Last Name" type="text" />
        </div>
        <InputField name="email" label="Email" type="email" />
        <div className="mt-4 space-x-4">
          <ButtonFill title="Submit" />
          <ButtonOutline title="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default Form;
