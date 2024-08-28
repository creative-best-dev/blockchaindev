import emailjs from '@emailjs/browser';
import { memo, useCallback } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import PostIcon from '@/assets/post.svg?react';
import { AppButton } from '@/components/UI/AppButton/AppButton.tsx';
import { AppInput } from '@/components/UI/AppInput/AppInput.tsx';
import { AppTextArea } from '@/components/UI/AppTextArea/AppTextArea.tsx';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './ContactForm.module.scss';

export interface IForm {
   name: string;
   email: string;
   message: string;
}

interface ContactFormProps {
   className?: string;
}

// ПРИДУМАЙ ВСПЛЫВАШКИ ПРИ ОТПРАВКЕ ИЛИ УСПЕШНОМ ЗАПРОСЕ!
const ContactForm = memo((props: ContactFormProps) => {
   const { className } = props;

   const { t } = useTranslation('contact');

   const { register, handleSubmit, formState, reset } = useForm<IForm>({
      mode: 'onSubmit',
   });

   const emailError = formState.errors.email?.message;
   const nameError = formState.errors.name?.message;
   const messageError = formState.errors.message?.message;

   const onSubmit: SubmitHandler<IForm> = useCallback(
      (data) => {
         emailjs
            .send(
               import.meta.env.VITE_EMAIL_SERVICE_KEY,
               import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
               {
                  user_name: data.name,
                  user_email: data.email,
                  message: data.message,
               },
               import.meta.env.VITE_EMAIL_USER_ID_KEY,
            )
            .then((result) => {
               console.log(result);
            })
            .catch((error) => {
               console.log(error);
            });
         reset();
      },
      [reset],
   );

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={classNames(cls.ContactForm, {}, [className])}>
         <div className={cls.wrapper}>
            <AppInput
               className={cls.input}
               type="text"
               label={t('Your name *')}
               {...register('name', {
                  required: t('required'),
               })}
               error={nameError}
            />
            <AppInput
               className={cls.input}
               type="email"
               label={t('Your email *')}
               {...register('email', {
                  required: t('required'),
                  pattern: {
                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                     message: t('valid email'),
                  },
               })}
               error={emailError}
            />
         </div>
         <AppTextArea
            className={cls.input}
            label={t('Your message')}
            maxLength={3000}
            error={messageError}
            {...register('message', {
               maxLength: {
                  value: 3000,
                  message: t('3000 characters'),
               },
            })}
         />
         <div className={cls.footer}>
            <AppButton type={'submit'}>
               <span className={cls.btn}>
                  <span>{t('Send')}</span>
                  <PostIcon />
               </span>
            </AppButton>
         </div>
      </form>
   );
});

ContactForm.displayName = 'ContactForm';
export { ContactForm };
