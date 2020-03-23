export const options = [
  {
    customValue: 'Option1',
    customLabel: 'First option some very long dropdown text',
  },
  {
    customValue: 'Option2',
    customLabel: 'Second option',
    isDisabled: true,
  },
  {
    customValue: 'Option3',
    customLabel: 'Third option',
  },
];

window.onmousedown = () => {
  // debugger;
};

export const singleReactSelect = {
  options,
  'data-react-id': 'data-react-id',
  'aria-customLabel': 'Aria customLabel',
  'aria-labelledby': 'Aria labelledby',
  isClearable: true,
};
