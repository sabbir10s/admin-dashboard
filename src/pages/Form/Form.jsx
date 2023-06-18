import React, { useState } from 'react';

import { ButtonFill, ButtonOutline } from '../../components/ui/Button/Button';
import Checkbox from '../../components/ui/Checkbox/Checkbox';
import FileUpload from '../../components/ui/FileUpload/InputPhoto';
import { default as InputField } from '../../components/ui/Input/InputField';
import Select from '../../components/ui/Select/Select';
import TextArea from '../../components/ui/TextArea/TextArea';

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
            required={true}
          />
          <InputField
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
          />
          <InputField
            name="mobile"
            label="Mobile"
            type="tel"
            placeholder="Phone"
          />
        </div>
        <Select />
        <TextArea
          cols={10}
          rows={5}
          label="Message"
          placeholder="Write your message"
        />
        <div className=" space-y-2 ">
          <h2 className="text-sm font-medium leading-6 text-gray-700 dark:text-white ">
            Checkbox
          </h2>
          <div className="space-y-1">
            <Checkbox label="Comments" />
            <Checkbox label="Candidates" />
            <Checkbox label="Offers" />
          </div>
        </div>
        <FileUpload label="File Upload" />
        <div className="space-x-4">
          <ButtonFill title="Submit" />
          <ButtonOutline title="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default Form;
