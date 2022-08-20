import { name, description } from './global-fields';
import * as Yup from 'yup';

const categorySchema = Yup.object().shape({
  name: Yup.string()
    .min(...name.min)
    .max(...name.max)
    .required(...name.required),
  description: Yup.string()
    .min(...description.min)
    .max(...description.max)
    .required(...description.required),
});

export default categorySchema;
