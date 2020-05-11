/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styles from '../sass/layout/home.module.scss';

import ImageOne from '../img/gallery/image-1.jpg';
import ImageTwo from '../img/gallery/image-2.jpg';
import ImageThree from '../img/gallery/image-3.jpg';
import ImageFour from '../img/gallery/image-4.jpg';

import CustomerOne from '../img/yeji.jpg';
import CustomerTwo from '../img/irene.jpg';
import VideoSource from '../img/background-vid.mp4';

import { NavBar } from '../components/NavBar/NavBar';
import { Button } from '../components/Button/Button'
import { Features } from '../components/Features/Features';
import { Gallery } from '../components/Gallery/Gallery';
import { SideList } from '../components/SideList/SideList';
import { TestimonialBox } from '../components/TestimonialBox/TestimonialBox';
import { Video } from '../components/BgVideo/Video';
import { PlanBox } from '../components/PlanBox/PlanBox';

const Home = () => {
  const gallery = [ImageOne, ImageTwo, ImageThree, ImageFour];
  const customers = [
    {
      name: 'Yeji',
      image: CustomerOne,
      heading: `One of the best music apps I've found.`,
      description: `
        Kindness own whatever betrayed her moreover procured replying for and. 
        Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. 
        Age she way earnestly the fulfilled extremely. In alteration insipidity impression by 
        travelling..`
    },
    {
      name: 'Irene',
      image: CustomerTwo,
      heading: `I absolutely love this thing.`,
      description: `
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the 
        Semantics, a large language ocean. Covered ten nor comfort offices carried. `
    }
  ];
  const plans = [
    {
      title: 'Free',
      price: '$0.00',
      features: [
        {
          name: 'Shuffle',
          granted: true,
        },
        {
          name: 'Ad free',
          granted: false,
        },
        {
          name: 'Unlimited skips',
          granted: false,
        },
        {
          name: 'Listen offline',
          granted: false,
        },
        {
          name: 'Play any track',
          granted: false,
        },
        {
          name: 'High quality audio',
          granted: false,
        }
      ]
    },
    {
      title: 'Premium',
      price: '$9.99',
      features: [
        {
          name: 'Shuffle',
          granted: true,
        },
        {
          name: 'Ad free',
          granted: true,
        },
        {
          name: 'Unlimited skips',
          granted: true,
        },
        {
          name: 'Listen offline',
          granted: true,
        },
        {
          name: 'Play any track',
          granted: true,
        },
        {
          name: 'High quality audio',
          granted: true,
        }
      ]
    }
  ]

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
    </>
  );
};

export { Home };