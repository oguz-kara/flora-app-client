import { name, phoneNumber, money } from './global-fields';
import * as Yup from 'yup';

const supplierSchema = Yup.object().shape({
  name: Yup.string()
    .min(...name.min)
    .max(...name.max)
    .required(...name.required),
  companyName: Yup.string()
    .min(...name.min)
    .max(...name.max)
    .required(...name.required),
  phoneNumber: Yup.string()
    .min(...phoneNumber.min)
    .max(...phoneNumber.max)
    .required(...phoneNumber.required),
  credit: Yup.number()
    .max(...money.max)
    .positive(...money.positive)
    .required(...money.required),
});

export default supplierSchema;
