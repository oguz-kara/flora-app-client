/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary-color': '#3f51b5',
      'primary-color-muted': '#3f51b550',
      'primary-light-color': '#757de8',
      'primary-dark-color': '#002984',
      'danger-color': '#df4759',
      'success-color': '#42ba96',
      'warning-color': '#eed202',
      'success-dark-color': '#005500',
      'success-light-color': '#88ff99',
      'secondary-color': '#f48fb1',
      'secondary-dark-color': '#bf5f82',
      'secondary-light-color': '#ffc1e3',
      'primary-background': '#1e1e2d',
      'primary-background-light': '#3c3e49',
      'primary-background-dark': '#151521',
      'secondary-background': '#fffafa',
      'secondary-text': '#000000',
      'primary-text': '#ffffff',
      'muted': '#565674',
      'border-color': '#3f51b5',
    },
  },
  plugins: [],
};
