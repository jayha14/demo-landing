import Image from 'next/image';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { CSSProperties } from 'react';
import { CustomSlider } from '../components/slider/Slider';

export type inventory = {
  targetId: string;
  index: number;
  type: 'Slider' | 'List' | 'Image' | 'Title' | 'Components';
  spectial?: {
    [key: string]: any;
  };
  css: CSSProperties;
  title: string;
  link: string;
  typeList?: inventory;
  children: inventory[];
};

export const RenderCard = (cardInit: inventory) => {
  const handleClick = () => {
    if (cardInit.type !== 'Image' && cardInit.link) {
      window.open(cardInit.link);
    }
  };
  return (
    // <Link
    //   href={cardInit.link}
    //   style={{
    //     pointerEvents:
    //       cardInit.type !== 'Image' && cardInit.link ? 'auto' : 'none',
    //   }}
    //   passHref={true}
    //   target="_blank"
    // >
    <div style={cardInit.css} onClick={handleClick}>
      {renderOneItem(cardInit)}{' '}
    </div>
    // </Link>
  );
};

export const renderOneItem = (cardInit: inventory) => {
  switch (cardInit.type) {
    case 'Image':
      return (
        <div style={cardInit.css}>
          <Image src={cardInit.link} alt="" layout="fill" />;
        </div>
      );
    case 'Title':
      return cardInit.title;
    case 'Slider':
      return (
        <CustomSlider
          ItemCard={cardInit.children}
          numberDisplay={cardInit?.spectial?.numberOfDisplay ?? 1}
        />
      );
    case 'Components':
      return cardInit.children.map((item) => {
        return (
          <React.Fragment key={item.targetId}>
            {RenderCard(item)}
          </React.Fragment>
        );
      });
  }
};

export default function HomeBanner() {
  const banner: inventory = {
    targetId: '0',
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
        targetId: '1',
        index: 0,
        type: 'Slider',
        spectial: {
          numberOfDisplay: 1,
        },
        css: {},
        title: '',
        link: '',
        children: [
          {
            targetId: '2',
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
                targetId: '3',
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
                link: '/banner02.jpeg',
                children: [],
              },
              {
                targetId: '4',
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
                    targetId: '5',
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
                    targetId: '6',
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
                targetId: '7',
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
                targetId: '8',
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
            targetId: '2',
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
                targetId: '3',
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
                link: '/banner03.jpeg',
                children: [],
              },
              {
                targetId: '4',
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
                    targetId: '5',
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
                    targetId: '6',
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
                targetId: '7',
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
                targetId: '8',
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
            targetId: '2',
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
                targetId: '3',
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
                link: '/banner4.jpeg',
                children: [],
              },
              {
                targetId: '4',
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
                    targetId: '5',
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
                    targetId: '6',
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
                targetId: '7',
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
                targetId: '8',
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
            targetId: '2',
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
                targetId: '3',
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
                link: '/banner5.jpeg',
                children: [],
              },
              {
                targetId: '4',
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
                    targetId: '5',
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
                    targetId: '6',
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
                targetId: '7',
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
                targetId: '8',
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
        targetId: '16',
        index: 0,
        type: 'Components',
        css: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0 100px 50px',
          display: 'flex',
          justifyContent: 'space-evenly',
        },
        title: '',
        link: '',
        children: [
          {
            targetId: '17',
            index: 0,
            type: 'Components',
            css: {},
            title: '',
            link: '',
            children: [
              {
                targetId: '18',
                index: 0,
                type: 'Title',
                css: { color: 'white' },
                title: 'Arrival',
                link: '',
                children: [],
              },
              {
                targetId: '19',
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
                    targetId: '20',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white', fontSize: '100px' },
                    title: '5',
                    link: '',
                    children: [],
                  },
                  {
                    targetId: '21',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white' },
                    title: 'Dec',
                    link: '',
                    children: [],
                  },
                  {
                    targetId: '22',
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
            targetId: '23',
            index: 0,
            type: 'Components',
            css: {},
            title: '',
            link: '',
            children: [
              {
                targetId: '24',
                index: 0,
                type: 'Title',
                css: { color: 'white' },
                title: 'Departure',
                link: '',
                children: [],
              },
              {
                targetId: '25',
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
                    targetId: '26',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white', fontSize: '100px' },
                    title: '6',
                    link: '',
                    children: [],
                  },
                  {
                    targetId: '27',
                    index: 0,
                    type: 'Title',
                    css: { color: 'white' },
                    title: 'Dec',
                    link: '',
                    children: [],
                  },
                  {
                    targetId: '28',
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
            targetId: '29',
            index: 0,
            type: 'Components',
            css: {},
            title: '',
            link: '',
            children: [
              {
                targetId: '30',
                index: 0,
                type: 'Title',
                css: { color: 'white' },
                title: 'Guest',
                link: '',
                children: [],
              },
              {
                targetId: '31',
                index: 0,
                type: 'Title',
                css: {
                  color: 'white',
                  fontSize: '100px',
                },
                title: '2',
                link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
                children: [],
              },
            ],
          },
          {
            targetId: '32',
            index: 0,
            type: 'Components',
            css: {
              padding: '20px 150px',
              border: '0.5px solid gray',
              color: 'white',
              fontSize: '24px',
              textAlign: 'center',
            },
            title: '',
            link: 'https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html',
            children: [
              {
                targetId: '33',
                index: 0,
                type: 'Title',
                css: {},
                title: 'Book now',
                link: '',
                children: [],
              },
              {
                targetId: '34',
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
  const roomAndService: inventory = {
    targetId: '1',
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
        targetId: '1',
        index: 0,
        type: 'Slider',
        spectial: {
          numberOfDisplay: 3,
        },
        css: {},
        title: '',
        link: '',
        children: [
          {
            targetId: '2',
            index: 0,
            type: 'Components',
            css: {
              // height: '100vh',
              width: '100%',
              // display: 'flex',
              // flexDirection: 'column',
              // alignItems: 'center',
              // justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                targetId: '3',
                index: 0,
                type: 'Image',
                css: {
                  position: 'relative',
                  // top: 0,
                  // left: 0,
                  // right: 0,
                  // bottom: 0,
                  // zIndex: -1,
                  width: '100%',
                  aspectRatio: 4 / 3,
                },
                title: '',
                link: '/room1.jpeg',
                children: [],
              },
              {
                targetId: '4',
                index: 0,
                type: 'Components',
                css: {
                  // display: 'flex',
                  // gap: 2,
                 
                },
                title: 'Deluxe Room',
                link: '',
                children: [
                  {
                    targetId: '5',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                      fontSize: '50px',
                      fontWeight: 500,
                    },
                    title: 'Deluxe Room',
                    link: '',
                    children: [],
                  },
                  {
                    targetId: '6',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 500,
                    },
                    title:
                      'Located on the quiet and well-ventilated basement floor, each room can accommodate 02 adults for the best comfort.',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                targetId: '7',
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
                targetId: '8',
                index: 0,
                type: 'Components',
                css: {
                 display:'flex',
                 alignItems: 'center',
                 gap:50
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [
                  {
                    targetId: '8',
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
                    children: [
    
                    ],
                  },
                  {
                    targetId: '8',
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
                    children: [
    
                    ],
                  },
                ],
              },
              
              
            ],
          },
          {
            targetId: '2',
            index: 0,
            type: 'Components',
            css: {
              // height: '100vh',
              width: '100%',
              // display: 'flex',
              // flexDirection: 'column',
              // alignItems: 'center',
              // justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                targetId: '3',
                index: 0,
                type: 'Image',
                css: {
                  position: 'relative',
                  // top: 0,
                  // left: 0,
                  // right: 0,
                  // bottom: 0,
                  // zIndex: -1,
                  width: '100%',
                  aspectRatio: 4 / 3,
                },
                title: '',
                link: '/room1.jpeg',
                children: [],
              },
              {
                targetId: '4',
                index: 0,
                type: 'Components',
                css: {
                  // display: 'flex',
                  // gap: 2,
                 
                },
                title: 'Deluxe Room',
                link: '',
                children: [
                  {
                    targetId: '5',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                      fontSize: '50px',
                      fontWeight: 500,
                    },
                    title: 'Deluxe Room',
                    link: '',
                    children: [],
                  },
                  {
                    targetId: '6',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 500,
                    },
                    title:
                      'Located on the quiet and well-ventilated basement floor, each room can accommodate 02 adults for the best comfort.',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                targetId: '7',
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
                targetId: '8',
                index: 0,
                type: 'Components',
                css: {
                 display:'flex',
                 alignItems: 'center',
                 gap:50
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [
                  {
                    targetId: '8',
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
                    children: [
    
                    ],
                  },
                  {
                    targetId: '8',
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
                    children: [
    
                    ],
                  },
                ],
              },
              
              
            ],
          },
          {
            targetId: '2',
            index: 0,
            type: 'Components',
            css: {
              // height: '100vh',
              width: '100%',
              // display: 'flex',
              // flexDirection: 'column',
              // alignItems: 'center',
              // justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                targetId: '3',
                index: 0,
                type: 'Image',
                css: {
                  position: 'relative',
                  // top: 0,
                  // left: 0,
                  // right: 0,
                  // bottom: 0,
                  // zIndex: -1,
                  width: '100%',
                  aspectRatio: 4 / 3,
                },
                title: '',
                link: '/room1.jpeg',
                children: [],
              },
              {
                targetId: '4',
                index: 0,
                type: 'Components',
                css: {
                  // display: 'flex',
                  // gap: 2,
                 
                },
                title: 'Deluxe Room',
                link: '',
                children: [
                  {
                    targetId: '5',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                      fontSize: '50px',
                      fontWeight: 500,
                    },
                    title: 'Deluxe Room',
                    link: '',
                    children: [],
                  },
                  {
                    targetId: '6',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 500,
                    },
                    title:
                      'Located on the quiet and well-ventilated basement floor, each room can accommodate 02 adults for the best comfort.',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                targetId: '7',
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
                targetId: '8',
                index: 0,
                type: 'Components',
                css: {
                 display:'flex',
                 alignItems: 'center',
                 gap:50
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [
                  {
                    targetId: '8',
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
                    children: [
    
                    ],
                  },
                  {
                    targetId: '8',
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
                    children: [
    
                    ],
                  },
                ],
              },
              
              
            ],
          },
          {
            targetId: '2',
            index: 0,
            type: 'Components',
            css: {
              // height: '100vh',
              width: '100%',
              // display: 'flex',
              // flexDirection: 'column',
              // alignItems: 'center',
              // justifyContent: 'center',
              gap: 16,
              position: 'relative',
            },

            title: 'Card of Slide',
            link: '',
            children: [
              {
                targetId: '3',
                index: 0,
                type: 'Image',
                css: {
                  position: 'relative',
                  // top: 0,
                  // left: 0,
                  // right: 0,
                  // bottom: 0,
                  // zIndex: -1,
                  width: '100%',
                  aspectRatio: 4 / 3,
                },
                title: '',
                link: '/room1.jpeg',
                children: [],
              },
              {
                targetId: '4',
                index: 0,
                type: 'Components',
                css: {
                  // display: 'flex',
                  // gap: 2,
                 
                },
                title: 'Deluxe Room',
                link: '',
                children: [
                  {
                    targetId: '5',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: '#ceb071',
                      fontSize: '50px',
                      fontWeight: 500,
                    },
                    title: 'Deluxe Room',
                    link: '',
                    children: [],
                  },
                  {
                    targetId: '6',
                    index: 0,
                    type: 'Title',
                    css: {
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 500,
                    },
                    title:
                      'Located on the quiet and well-ventilated basement floor, each room can accommodate 02 adults for the best comfort.',
                    link: '',
                    children: [],
                  },
                ],
              },
              {
                targetId: '7',
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
                targetId: '8',
                index: 0,
                type: 'Components',
                css: {
                 display:'flex',
                 alignItems: 'center',
                 gap:50
                },
                title:
                  'Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake',
                link: '',
                children: [
                  {
                    targetId: '8',
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
                    children: [
    
                    ],
                  },
                  {
                    targetId: '8',
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
                    children: [
    
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const mainTemplate: inventory = {
    targetId: '3',
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
    children: [banner, roomAndService],
  };
  return RenderCard(mainTemplate);
}
