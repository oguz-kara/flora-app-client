import { useEffect } from 'react';
import Box from '../components/Box';
import Typography from '../components/Typography';

export default function ValidationErrorText({ formik, name }) {
  return (
    <Box>
      {formik.errors[name] && formik.touched[name] ? (
        <Typography className="pt-1 text-danger-color" variant="small">
          {typeof formik.errors[name] === 'string'
            ? formik.errors[name]
            : Object.keys(formik.errors[name]).map((key, index) => (
                <Box key={index} className="text-danger-color">
                  {formik.errors[name][key]}
                  {/* {console.log({ formikErr: formik.errors[name][key] })} */}
                </Box>
              ))}
        </Typography>
      ) : null}
    </Box>
  );
  //   return(
  //     {
  //     formik.errors.barcode && formik.touched.barcode ? (
  //
  //     ) : null
  //   }
  //   )
}
