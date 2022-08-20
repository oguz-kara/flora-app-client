import { name } from './global-fields';
import * as Yup from 'yup';

const brandSchema = Yup.object().shape({
  name: Yup.string()
    .min(...name.min)
    .max(...name.max)
    .required(...name.required),
});

export default brandSchema;
