import React, { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <InputField name="firstName" label="Name" type="text" />
        <InputField name="lastName" label="Name" type="text" />
        <InputField name="email" label="Email" type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
