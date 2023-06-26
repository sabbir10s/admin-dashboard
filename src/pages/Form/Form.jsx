import React, { useState } from 'react';

import { ButtonFill, ButtonOutline } from '../../components/ui/Button/Button';
import Checkbox from '../../components/ui/Form/Checkbox/Checkbox';
import FileUpload from '../../components/ui/Form/FileUpload/FileUpload';
import InputField from '../../components/ui/Form/InputField/InputField';
import Radio from '../../components/ui/Form/Radio/Radio';
import Select from '../../components/ui/Form/Select/Select';
import SelectWithImg from '../../components/ui/Form/SelectWithImg/SelectWithImg';
import TextArea from '../../components/ui/Form/TextArea/TextArea';
import Toggle from '../../components/ui/Form/Toggle/Toggle';
import Search from '../../components/ui/Search/Search';

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

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="space-y-10">
      {/* Search */}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold leading-7 text-primary-600">
          Search
        </h2>
        <Search />
      </div>
      {/* <div className="space-y-4">
        <h2 className="text-xl font-semibold leading-7 text-primary-600">
          Multiple select
        </h2>
        <MultipleSelect />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold leading-7 text-primary-600">
          Date Picker
        </h2>
        <MyDatePicker />
        <StartEndDate />
      </div> */}

      {/* Form */}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold leading-7 text-primary-600">
          Form
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
          {/* select options */}
          <Select
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
          />

          <SelectWithImg />

          <TextArea
            cols={10}
            rows={5}
            label="Message"
            placeholder="Write your message"
          />
          <div className=" space-y-2 ">
            <h2 className="text-sm font-medium leading-6 text-gray-700 dark:text-white">
              Checkbox
            </h2>
            <div className="space-y-1">
              <Checkbox label="Comments" />
              <Checkbox label="Candidates" />
              <Checkbox label="Offers" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-medium leading-6 text-gray-700 dark:text-white">
              Radio
            </h2>
            <Radio label="Everything" name="1" />
            <Radio label="Same as email" name="1" />
            <Radio label="No push notifications" name="1" />
          </div>

          <div>
            <h2 className="uppercase font-bold my-4 block text-gray-700 dark:text-white">
              Toggle switch
            </h2>
            <Toggle />
          </div>

          <FileUpload />
          <div className="space-x-4">
            <ButtonFill>Submit</ButtonFill>
            <ButtonOutline>Cancel</ButtonOutline>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
