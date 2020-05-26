/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import styles from '../sass/pages/home.module.scss';

import { gallery, customers, plans, composition } from '../Data';

import VideoSourceMp4 from '../img/background-vid.mp4';
import VideoSourceWebm from '../img/background-vid.webm';

import { NavBar } from '../components/NavBar/NavBar';
import { Button } from '../components/Button/Button'
import { Features } from '../components/Features/Features';
import { Gallery } from '../components/Gallery/Gallery';
import { SideList } from '../components/SideList/SideList';
import { TestimonialBox } from '../components/TestimonialBox/TestimonialBox';
import { Video } from '../components/BgVideo/Video';
import { PlanBox } from '../components/PlanBox/PlanBox';
import { ImageComposition } from '../components/ImageComposition/ImageComposition';
import { CTASideBar } from '../components/CTASideBar/CTASideBar';
import { Form } from '../components/Form/Form';
import { Footer } from '../components/Footer/Footer';

const Home = () => {
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
  const [isPlansVisible, setIsPlansVisible] = useState(false);
  const [isFormVisible, setIsFormVisibble] = useState(false);
  return (
    <>
      <header id="header" className={styles.header}>
        <NavBar />
        <div className={`${styles.mainWrapper}`}>
          <h1 className={styles.headerText}>
            <span className={styles.headerText__main}>
              Your Very Own
            </span>
            <span className={styles.headerText__sub}>
              Personal Music Companion
            </span>
          </h1>
          <div className={styles.header__buttons}>
            <Button
              type="FREE">
              Get Melodify Free
          </Button>
            <Button
              type="PREMIUM">
              Get Melodify Premium
          </Button>
          </div>
        </div>
      </header>

      <section className={styles.sectionFeatures}>
        <Features />
      </section>

      <section className={styles.sectionNew}>
        <div className="row">
          <Gallery
            gallery={gallery}
          />
          <SideList />
        </div>
      </section>

      <section className={styles.sectionTestimonials}>
        <Video
          VideoSourceMp4={VideoSourceMp4}
          VideoSourceWebm={VideoSourceWebm}
        />
        <Waypoint onEnter={() => setIsTestimonialVisible(true)} />
        <h2 className={isTestimonialVisible ?
          `${styles.testimonial__heading} ${styles.testimonial__heading__animated}` :
          `${styles.testimonial__heading}`}>
          We Make People Genuinely Happy
        </h2>

        <TestimonialBox
          customers={customers}
        />
        <a href="#"
          className={isTestimonialVisible ?
            `${styles.testimonial__readMore} ${styles.testimonial__readMore__animated}` :
            `${styles.testimonial__readMore}`}>
          Read More Stories &rarr;
        </a>
      </section>

      <section className={styles.sectionPlans}>
        <Waypoint onEnter={() => setIsPlansVisible(true)} />
        <h2 className={isPlansVisible ?
          `${styles.plans__heading} ${styles.plans__heading__animated}` :
          `${styles.plans__heading}`}>
          Listen free or subscribe to Melodify Premium
        </h2>
        <div className={styles.plans__wrapper}>
          <PlanBox
            plans={plans}
          />
        </div>
      </section>

      <section className={styles.sectionCTA}>
        <div className={`${styles.divCTA} row`}>
          <CTASideBar />
          <ImageComposition
            composition={composition}
          />
        </div>
      </section>

      <section className={styles.sectionGetStarted}>
        <div className="row">
          <Waypoint onEnter={() => setIsFormVisibble(true)} />
          <h2 className={isFormVisible ?
            `${styles.formHeading} ${styles.formHeading__animated}` :
            `${styles.formHeading}`}>
            We're Glad To Hear From You
          </h2>
          <Form />
        </div>
      </section>

      <Footer />
    </>
  );
};

export { Home };