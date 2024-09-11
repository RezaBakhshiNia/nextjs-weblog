import { object, string} from 'yup';

const registerFormSchema = object({
  name: string().optional(),
  email: string()
    .email('فرمت ایمیل صحیح نیست!')
    .required('ایمیل الزامی می باشد!'),
  password: string()
    .min(8, 'رمز عبور حداقل ۸ کاراکتر باشد!')
    .required('رمز عبور الزامی است!'),
});

export default registerFormSchema;
