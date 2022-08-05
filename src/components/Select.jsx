import ReactSelect from 'react-select';

const customStyles = {
  container: (base, state) => ({
    ...base,
    flexGrow: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    color: '#ffffff',
  }),
  input: (base, state) => ({
    ...base,
    color: '#ffffff',
  }),
  control: (base, state) => ({
    ...base,
    background: '#1e1e2d',
    borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
    border: state.isFocused ? '1px solid #3f51b5' : 'none',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
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
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    '&:hover': {
      backgroundColor: '#df4759',
    },
  }),
};

export default function Select({ options, ...props }) {
  return <ReactSelect styles={customStyles} options={options} {...props} />;
}
