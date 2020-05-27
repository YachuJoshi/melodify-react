import ImageOne from './img/gallery/image-1.jpg';
import ImageTwo from './img/gallery/image-2.jpg';
import ImageThree from './img/gallery/image-3.jpg';
import ImageFour from './img/gallery/image-4.jpg';

import CustomerOne from './img/testimonial/yeji.jpg';
import CustomerTwo from './img/testimonial/irene.jpg';

import JB from './img/composition/jb.jpg';
import ARI from './img/composition/ari.jpg';
import SEL from './img/composition/sel.jpg';
import CAMI from './img/composition/cami.jpg';
import BRUNO from './img/composition/bruno.jpg';

import IRENE from './img/topartist/irene.jpg';
import IU from './img/topartist/iu.jpg';
import JENNIE from './img/topartist/jennie.jpg';
import JISOO from './img/topartist/jisoo.jpg';
import LILI from './img/topartist/lili.jpg';
import YEJI from './img/topartist/yeji.jpg';
import LIA from './img/topartist/lia.png';

export const gallery = [ImageOne, ImageTwo, ImageThree, ImageFour];
export const TOP_ARTISTS = [
  {
    name: 'Irene',
    url: IRENE
  },
  {
    name: 'IU',
    url: IU
  },
  {
    name: 'Jennie',
    url: JENNIE
  },
  {
    name: 'Jisoo',
    url: JISOO
  },
  {
    name: 'Lili',
    url: LILI
  },
  {
    name: 'Yeji',
    url: YEJI
  },
  {
    name: 'Lia',
    url: LIA
  }
];
export const customers = [
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
export const plans = [
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
];

export const composition = [JB, CAMI, BRUNO, SEL, ARI];