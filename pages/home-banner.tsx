import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { CustomSlider } from '../components/slider/Slider';

export type Card = {
  uuid: string;
  index: number;
  type: 'Slider' | 'List' | 'Image' | 'Title' | 'Components';
  numberOfDisplay?: number;
  css: CSSProperties;
  title: string;
  link: string;
  children: Card[];
};

export const renderCard = (cardInit: Card) => {
  return (
    <Link
      href={cardInit.link}
      style={{
        pointerEvents:
          cardInit.type !== 'Image' && cardInit.link ? 'auto' : 'none',
      }}
      passHref={true}
      target="_blank"
    >
      <div style={cardInit.css}>{renderOneItem(cardInit)}</div>
    </Link>
  );
};

export const renderOneItem = (cardInit: Card) => {
  switch (cardInit.type) {
    case 'Image':
      return <Image src={cardInit.link} alt="" layout="fill" />;
    case 'Title':
      return cardInit.title;
    case 'Slider':
      return (
        <CustomSlider
          ItemCard={cardInit.children}
          numberDisplay={cardInit?.numberOfDisplay ?? 1}
        />
      );
    case 'Components':
      return cardInit.children.map((item) => {
        return <div key={item.uuid}>{renderCard(item)}</div>;
      });
  }
};

export default function HomeBanner() {
  const value: Card = {
    uuid: '0',
    index: 0,
    type: 'Components',
    css: {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: 'black',
    },
    title: '',
    link: '',
    children: [
      {
        uuid: '1',
        index: 0,
        type: 'Slider',
        numberOfDisplay: 1,
        css: {},
        title: '',
        link: '',
        children: [
          {
            uuid: '2',
            index: 0,
            type: 'Components',
            css: {
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                uuid: '3',
                index: 0,
                type: 'Image',
                css: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                },
                title: '',
                link: '/FQjXZj5XsAIqKmY.jpeg',
                children: [],
              },
              {
                uuid: '4',
                index: 0,
                type: 'Components',
                css: {
                  display: 'flex',
                  gap: 2,
                  fontSize: '24px',
                  fontWeight: 500,
                },
                title: 'Terraço',
                link: '',
                children: [
                  {
                    uuid: '5',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                    },
                    title: 'Terraço',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '6',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                    },
                    title: 'Sky Bar',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                uuid: '7',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'white',
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [],
              },
              {
                uuid: '8',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  textAlign: 'center',
                  color: 'white',
                  padding: '12px 18px',
                  border: '1px solid white',
                },
                title: 'See more information',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [],
              },
            ],
          },
          {
            uuid: '2',
            index: 0,
            type: 'Components',
            css: {
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                uuid: '3',
                index: 0,
                type: 'Image',
                css: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                },
                title: '',
                link: '/Maj FC wins Sanktan 2021.jpeg',
                children: [],
              },
              {
                uuid: '4',
                index: 0,
                type: 'Components',
                css: {
                  display: 'flex',
                  gap: 2,
                  fontSize: '24px',
                  fontWeight: 500,
                },
                title: 'Terraço',
                link: '',
                children: [
                  {
                    uuid: '5',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                    },
                    title: 'Terraço',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '6',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                    },
                    title: 'Sky Bar',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                uuid: '7',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'white',
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [],
              },
              {
                uuid: '8',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  textAlign: 'center',
                  color: 'white',
                  padding: '12px 18px',
                  border: '1px solid white',
                },
                title: 'See more information',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [],
              },
            ],
          },
          {
            uuid: '2',
            index: 0,
            type: 'Components',
            css: {
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                uuid: '3',
                index: 0,
                type: 'Image',
                css: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                },
                title: '',
                link: '/mason.jpeg',
                children: [],
              },
              {
                uuid: '4',
                index: 0,
                type: 'Components',
                css: {
                  display: 'flex',
                  gap: 2,
                  fontSize: '24px',
                  fontWeight: 500,
                },
                title: 'Terraço',
                link: '',
                children: [
                  {
                    uuid: '5',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                    },
                    title: 'Terraço',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '6',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                    },
                    title: 'Sky Bar',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                uuid: '7',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'white',
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [],
              },
              {
                uuid: '8',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  textAlign: 'center',
                  color: 'white',
                  padding: '12px 18px',
                  border: '1px solid white',
                },
                title: 'See more information',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [],
              },
            ],
          },
          {
            uuid: '2',
            index: 0,
            type: 'Components',
            css: {
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                uuid: '3',
                index: 0,
                type: 'Image',
                css: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                },
                title: '',
                link: '/mu1.jpeg',
                children: [],
              },
              {
                uuid: '4',
                index: 0,
                type: 'Components',
                css: {
                  display: 'flex',
                  gap: 2,
                  fontSize: '24px',
                  fontWeight: 500,
                },
                title: 'Terraço',
                link: '',
                children: [
                  {
                    uuid: '5',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                    },
                    title: 'Terraço',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '6',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                    },
                    title: 'Sky Bar',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                uuid: '7',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'white',
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [],
              },
              {
                uuid: '8',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  textAlign: 'center',
                  color: 'white',
                  padding: '12px 18px',
                  border: '1px solid white',
                },
                title: 'See more information',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [],
              },
            ],
          },
          {
            uuid: '2',
            index: 0,
            type: 'Components',
            css: {
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                uuid: '3',
                index: 0,
                type: 'Image',
                css: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                },
                title: '',
                link: '/room.jpeg',
                children: [],
              },
              {
                uuid: '4',
                index: 0,
                type: 'Components',
                css: {
                  display: 'flex',
                  gap: 2,
                  fontSize: '24px',
                  fontWeight: 500,
                },
                title: 'Terraço',
                link: '',
                children: [
                  {
                    uuid: '5',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                    },
                    title: 'Terraço',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '6',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                    },
                    title: 'Sky Bar',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                uuid: '7',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'white',
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [],
              },
              {
                uuid: '8',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  textAlign: 'center',
                  color: 'white',
                  padding: '12px 18px',
                  border: '1px solid white',
                },
                title: 'See more information',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [],
              },
            ],
          },
          {
            uuid: '9',
            index: 0,
            type: 'Components',
            css: {
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                uuid: '10',
                index: 0,
                type: 'Image',
                css: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                },
                title: '',
                link: '/room.jpeg',
                children: [],
              },
              {
                uuid: '11',
                index: 0,
                type: 'Components',
                css: {
                  display: 'flex',
                  gap: 2,
                  fontSize: '24px',
                  fontWeight: 500,
                },
                title: 'Terraço',
                link: '',
                children: [
                  {
                    uuid: '12',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                    },
                    title: 'Terraço',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '13',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                    },
                    title: 'Sky Bar',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                uuid: '14',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'white',
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [],
              },
              {
                uuid: '15',
                index: 0,
                type: 'Title',
                css: {
                  fontSize: '24px',
                  fontWeight: 400,
                  textAlign: 'center',
                  color: 'white',
                  padding: '12px 18px',
                  border: '1px solid white',
                },
                title: 'See more information',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [],
              },
            ],
          },
        ],
      },
      {
        uuid: '16',
        index: 0,
        type: 'Components',
        css: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0 100px 50px',
          display: 'flex',
          justifyContent: 'space-between',
        },
        title: '',
        link: '',
        children: [
          {
            uuid: '17',
            index: 0,
            type: 'Components',
            css: {},
            title: '',
            link: '',
            children: [
              {
                uuid: '18',
                index: 0,
                type: 'Title',
                css: { color: 'white' },
                title: 'Arrival',
                link: '',
                children: [],
              },
              {
                uuid: '19',
                index: 0,
                type: 'Components',
                css: {
                  display: 'flex',
                  gap: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                title: '',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [
                  {
                    uuid: '20',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white', fontSize: '30px' },
                    title: '5',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '21',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white' },
                    title: 'Dec',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '22',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white', paddingLeft: 20, fontSize: '30px' },
                    title: '->',
                    link: '',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            uuid: '23',
            index: 0,
            type: 'Components',
            css: {},
            title: '',
            link: '',
            children: [
              {
                uuid: '24',
                index: 0,
                type: 'Title',
                css: { color: 'white' },
                title: 'Departure',
                link: '',
                children: [],
              },
              {
                uuid: '25',
                index: 0,
                type: 'Components',
                css: {
                  display: 'flex',
                  gap: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                title: '',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [
                  {
                    uuid: '26',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white', fontSize: '30px' },
                    title: '6',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '27',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white' },
                    title: 'Dec',
                    link: '',
                    children: [],
                  },
                  {
                    uuid: '28',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white', paddingLeft: 20, fontSize: '30px' },
                    title: '->',
                    link: '',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            uuid: '29',
            index: 0,
            type: 'Components',
            css: {},
            title: '',
            link: '',
            children: [
              {
                uuid: '30',
                index: 0,
                type: 'Title',
                css: { color: 'white' },
                title: 'Guest',
                link: '',
                children: [],
              },
              {
                uuid: '31',
                index: 0,
                type: 'Title',
                css: {
                  color: 'white',
                  fontSize: '30px',
                },
                title: '2',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [],
              },
            ],
          },
          {
            uuid: '32',
            index: 0,
            type: 'Components',
            css: {
              padding: '20px 40px',
              border: '1px solid white',
              color: 'white',
              fontSize: '24px',
              textAlign: 'center',
            },
            title: '',
            link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
            children: [
              {
                uuid: '33',
                index: 0,
                type: 'Title',
                css: {},
                title: 'Book now',
                link: '',
                children: [],
              },
              {
                uuid: '34',
                index: 0,
                type: 'Title',
                css: { fontSize: '16px' },
                title: 'Best Price Guaranteed',
                link: '',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };

  return renderCard(value);
}
