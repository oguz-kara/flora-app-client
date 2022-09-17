import React from 'react';
import ReactSelect from 'react-select';

const customStyles = (customStyles = {}, options) => ({
  container: (base, state) => ({
    ...base,
    flexGrow: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    color: '#ffffff',
    margin: 0,
    padding: 0,
  }),
  input: (base, state) => ({
    ...base,
    color: '#ffffff',
    margin: 0,
    padding: 0,
  }),
  control: (base, state) => ({
    ...base,
    background: options.disabled ? '#1e1e2d30' : '#1e1e2d',
    borderRadius: state.isFocused ? 3 : 3,
    border: state.isFocused ? 'none' : 'none',
    outline: state.isFocused ? '1px solid #388e3c' : 'none',
    padding: '0.650rem',
    margin: 0,
    minHeight: 0,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    margin: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: '#1e1e2d',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#3c3e49',
    },
  }),
  singleValue: (base, state) => ({
    ...base,
    color: '#ffffff',
    margin: 0,
    padding: 0,
  }),
  placeholder: (base, state) => ({
    ...base,
    fontWeight: '500',
    color: '#ffffff40',
    fontSize: 14,
  }),
  multiValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: '#3c3e49',
    margin: 0,
    padding: 0,
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
    margin: 0,
    padding: 0,
  }),
  valueContainer: (styles, state) => ({
    ...styles,
    margin: 0,
    padding: 0,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    '&:hover': {
      backgroundColor: '#df4759',
    },
  }),
  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: 0,
    margin: 0,
  }),
  indicatorSeparator: (styles, state) => ({
    ...styles,
    display: 'none',
  }),
  ...customStyles,
});

const Select = React.forwardRef(
  ({ options, onChange, value = '', disabled = false, ...props }, ref) => {
    return (
      <ReactSelect
        ref={ref}
        isDisabled={disabled}
        styles={customStyles({}, { disabled: disabled })}
        options={options}
        onChange={(value) => {
          onChange(value);
        }}
        value={value ? value : ''}
        {...props}
      />
    );
  }
);

export default Select;
