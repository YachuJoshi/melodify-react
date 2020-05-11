/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styles from '../sass/layout/home.module.scss';

import { gallery, customers, plans, composition } from '../Data';

import VideoSource from '../img/background-vid.mp4';

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

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
        <div className={`${styles.mainWrapper}`}>
          <h1 className={styles.headerText}>
            Your Very Own <br />
            Personal Music Companion
          </h1>
          <Button
            type="FREE">
            Get Melodify Free
        </Button>
          <Button
            type="PREMIUM">
            Get Melodify Premium
        </Button>
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
          VideoSource={VideoSource}
        />

        <h2 className={styles.testimonial__heading}>
          We Make People Genuinely Happy
        </h2>

        <TestimonialBox
          customers={customers}
        />
        <a href="#" className={styles.testimonial__readMore}>Read More Stories &rarr;</a>
      </section>

      <section className={styles.sectionPlans}>
        <h2 className={styles.plans__heading}>
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
          <h2 className={styles.formHeading}>
            We're Glad To Hear From You
          </h2>
          <Form />
        </div>
      </section>
    </>
  );
};

export { Home };