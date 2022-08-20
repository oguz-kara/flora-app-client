import * as Yup from 'yup';
import {
  amount,
  barcode,
  description,
  idNumber,
  money,
  name,
  percentage,
  sku,
} from './global-fields';

const productSchema = Yup.object().shape({
  barcode: Yup.string(...barcode.string)
    .min(...barcode.min)
    .max(...barcode.max),
  categoryId: Yup.object().shape({
    value: Yup.number(...idNumber.number)
      .integer(...idNumber.integer)
      .positive(...idNumber.positive),
    label: Yup.string(...name.string).required(...name.required),
  }),
  supplierId: Yup.object().shape({
    value: Yup.number(...idNumber.number)
      .integer(...idNumber.integer)
      .positive(...idNumber.positive),
    label: Yup.string(...name.string).required(...name.required),
  }),
  brandId: Yup.object().shape({
    value: Yup.number(...idNumber.number)
      .integer(...idNumber.integer)
      .positive(...idNumber.positive),
    label: Yup.string(...name.string).required(...name.required),
  }),
  supplierPrice: Yup.number(...amount.number)
    .min(...money.min)
    .max(...money.max)
    .positive(...money.positive)
    .required(...money.required),
  amount: Yup.number(...amount.number)
    .min(...amount.min)
    .max(...amount.max)
    .positive(...amount.positive)
    .required(...amount.required),
  name: Yup.string(...name.string)
    .min(...name.min)
    .max(...name.max)
    .required(...name.required),
  mainUnit: Yup.object().shape({
    value: Yup.number(...idNumber.number),
    label: Yup.string(...name.string).required(...name.required),
  }),
  description: Yup.string(...description.string)
    .min(...description.min)
    .max(...description.max),
  subUnitList: Yup.array().of(
    Yup.object({
      value: Yup.number(...idNumber.number)
        .min(...idNumber.min)
        .max(...idNumber.max)
        .positive(...idNumber.positive)
        .integer(...idNumber.integer),
      label: Yup.string(...name.string)
        .min(...name.min)
        .max(...name.max),
    })
  ),
  subUnitPriceList: Yup.array().of(
    Yup.object({
      id: Yup.number(...idNumber.number)
        .min(...idNumber.min)
        .max(...idNumber.max)
        .positive(...idNumber.positive)
        .integer(...idNumber.integer),
      label: Yup.string(...name.string)
        .min(...name.min)
        .max(...name.max),
      price: Yup.number(...money.number)
        .min(...money.min)
        .max(...money.max),
    })
  ),
  sku: Yup.string(...sku.string)
    .min(...sku.min)
    .max(...sku.max)
    .required(...sku.required),
  taxPercentage: Yup.number(...percentage.number)
    .min(...percentage.min)
    .max(...percentage.max),
});

export default productSchema;
