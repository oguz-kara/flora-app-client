import Async from 'react-select/async';

const getCustomStyles = (overrideStyles = {}) => ({
  container: (base, state) => ({
    ...base,
    flexGrow: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    color: '#ffffff',
    padding: 0,
  }),
  input: (base, state) => ({
    ...base,
    color: '#ffffff',
    padding: 0,
    margin: 0,
  }),
  control: (base, state) => ({
    ...base,
    background: '#1e1e2d',
    borderRadius: state.isFocused ? 3 : 3,
    border: state.isFocused ? 'none' : 'none',
    outline: state.isFocused ? '1px solid #388e3c' : 'none',
    minHeight: 0,
    padding: '0.650rem',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
    padding: 0,
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
  valueContainer: (base, state) => ({
    padding: 0,
    margin: 0,
  }),
  singleValue: (base, state) => ({
    ...base,
    color: '#ffffff',
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
    padding: 0,
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
    padding: 0,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    '&:hover': {
      backgroundColor: '#df4759',
    },
  }),
  ...overrideStyles,
});

export default function ASelect({
  options,
  onChange = () => {},
  value = '',
  customStyles = '',
  loadOptions,
  ...props
}) {
  return (
    <Async
      cacheOptions
      defaultOptions
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      placeholder=""
      loadOptions={loadOptions}
      getOptionLabel={(e) => e.name}
      getOptionValue={(e) => e.id}
      onChange={(value) => {
        onChange(value);
      }}
      styles={getCustomStyles(customStyles ? customStyles : {})}
      {...props}
    />
  );
}
