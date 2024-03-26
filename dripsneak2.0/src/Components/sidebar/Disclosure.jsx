import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
//import { useState } from "react";
import { useProductContext } from "../../context/useMyContext";

export default function CustomDisclosure({ section, defaultOpen = open }) {
  const { checkedValues, handleCheckboxChange } = useProductContext();

  const handleCheckboxChangeLocal = (event) => {
    const { value, checked } = event.target;
    handleCheckboxChange(section.id, value, checked);
  };
  return (
    <Disclosure
      as="div"
      className="border-b border-scorpion-200 px-4 py-6"
      defaultOpen={defaultOpen}
    >
      {({ open }) => (
        <>
          <h3 className="-mx-2 -my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between bg-scorpion-50 px-2 py-3 text-scorpion-400 hover:text-scorpion-500">
              <span className="font-medium text-scorpion-900">
                {section.name}
              </span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-6">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={`filter-${section.id}-${optionIdx}`}
                    name={`${section.id}[]`}
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 rounded border-scorpion-300 text-rhino-600 focus:ring-rhino-500"
                    checked={checkedValues[section.id]?.[option.value]}
                    onChange={handleCheckboxChangeLocal}
                  />
                  <label
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="ml-3 min-w-0 flex-1 text-scorpion-500"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
CustomDisclosure.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
  defaultOpen: PropTypes.bool,
};
