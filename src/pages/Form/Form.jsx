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
      <h2 className="text-xl font-semibold leading-7 text-primary-600">
        Form Design
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        All off our form components
      </p>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
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
        <div className="space-x-4">
          <ButtonFill title="Submit" />
          <ButtonOutline title="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default Form;
