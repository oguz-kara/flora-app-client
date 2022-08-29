import { name, description, amount } from './global-fields';
import * as Yup from 'yup';

const categorySchema = Yup.object().shape({
  name: Yup.string()
    .min(...name.min)
    .max(...name.max)
    .required(...name.required),
  value: Yup.number(...amount.number)
    .min(...amount.min)
    .max(...amount.max)
    .positive(...amount.positive)
    .required(...amount.required),
});

export default categorySchema;
