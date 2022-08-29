import { name, amount } from './global-fields';
import * as Yup from 'yup';

const verifyPasswordSchema = Yup.object().shape({
  password: Yup.string(...name.string)
    .min(...name.min)
    .max(...name.max)
    .required(...name.required),
});

export default verifyPasswordSchema;
