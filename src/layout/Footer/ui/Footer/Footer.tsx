import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Arrow from '@/assets/icons/arrow.svg?react';
import { AnimateLine } from '@/components/AnimateLine/AnimateLine.tsx';
import { LinksList } from '@/components/LinksList/LinksList.tsx';
import { AppButton } from '@/components/UI/AppButton/AppButton';
import { Title } from '@/components/UI/Title/Title';
import { getRouteContact } from '@/config/route/routeConfig';
import { EMAIL, PHONE } from '@/content/contacts.ts';
import { socials } from '@/content/socials.ts';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import cls from './Footer.module.scss';

interface FooterProps {
   className?: string;
}

const Footer = memo((props: FooterProps) => {
   const { className } = props;
   const ref = useRef<HTMLDivElement | null>(null);
   const { t } = useTranslation();

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end end'],
   });
   const valueHeight = useTransform(scrollYProgress, [0, 1], [1, 0]);
   const valueMove = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

   return (
      <div ref={ref} className={classNames(cls.Footer, {}, [className])}>
         <motion.div className={cls.roundWrapper} style={{ scaleY: valueHeight }}>
            <div className={cls.round}></div>
         </motion.div>
         <motion.div style={{ y: valueMove }}>
            <div className={cls.quickContact}>
               <Title className={cls.title}>{t('Footer title')}</Title>
               <FramerMagnetic className={cls.wrapperLink}>
                  <Link to={getRouteContact()} className={cls.linkAbout}>
                     {t('Footer link')} <Arrow className={cls.arrow} />
                  </Link>
               </FramerMagnetic>
            </div>
            <AnimateLine />

            <div className={cls.information}>
               <Title>{t('Footer inform title')} </Title>
               <p className={cls.description}>{t('Footer description')}</p>
            </div>
            <div className={cls.buttons}>
               <AppButton className={cls.button} oppositeColor variant={'link'}>
                  <a href={`tel:${PHONE}`}>{PHONE}</a>
               </AppButton>
               <AppButton className={cls.button} oppositeColor variant={'link'}>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
               </AppButton>
            </div>

            <div className={cls.wrapper}>
               <div>
                  <Title>{t('Version')}</Title>
                  <p>{t('2024 © Edition')}</p>
               </div>
               <div>
                  <LinksList items={socials} title={t('Socials')} />
               </div>
            </div>
         </motion.div>
      </div>
   );
});

Footer.displayName = 'Footer';
export { Footer };
