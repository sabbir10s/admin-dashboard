import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar: 'https://randomuser.me/api/portraits/men/94.jpg',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const SelectWithImg = () => {
  const [selected, setSelected] = useState(people[3]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 ">
              Assigned to
            </Listbox.Label>
            <div className="relative mt-2 w-64">
              <Listbox.Button className="appearance-none block w-64 rounded-md border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300">
                <span className="flex items-center">
                  <img
                    src={selected.avatar}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-64 overflow-auto rounded-md bg-white dark:bg-[#24262d]  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? 'bg-primary-600 text-white'
                            : 'text-gray-900 dark:text-white',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img
                              src={person.avatar}
                              alt=""
                              className="h-5 w-5 flex-shrink-0 rounded-full"
                            />
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate'
                              )}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-primary-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default SelectWithImg;
