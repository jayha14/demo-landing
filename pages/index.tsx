import { url } from 'inspector';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  type card = {
    uuid: string;
    css: CSSProperties;
    img?: {
      css: CSSProperties;
      link: string;
    };
    title?: {
      css: CSSProperties;
      content: string;
    };
    des?: {
      css: CSSProperties;
      content: string;
    };
    type?: string;
    button?: {
      css: CSSProperties;
      content: string;
      link: string;
    };
    index?: number;
    children?: {
      css: CSSProperties;
      content: card[];
    };
  };

  const value: card = {
    uuid: '',
    css: {
      marginTop: 20,
      width: 300,
      margin: 'auto',
      border: '1px solid white',
    },
    children: {
      css: {
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
      },
      content: [
        {
          uuid: '',
          index: 0,
          css: { backgroundImage: "url('/room.jpeg')", aspectRatio: '4/3' },
        },
        {
          uuid: '',
          index: 0,
          css: {},
          title: {
            css: {},
            content: 'Delux Room',
          },
        },
        {
          uuid: '',
          index: 0,
          css: {},

          des: {
            css: {},
            content:
              'A tender touch blended with glamorous décor is such a room choice for ones who love to have good rests in the middle of vibrant Hanoi.',
          },
        },
        {
          uuid: '',
          index: 0,
          css: {},
          children: {
            css: {
              display: 'flex',
              flexDirection: 'column',
              padding: 4,
              gap: 4,
            },
            content: [
              {
                uuid: '',
                index: 0,
                img: {
                  css: {
                    backgroundImage: "url('/room.jpeg')",
                    aspectRatio: '4/3',
                    width: 20,
                    height: 20,
                  },
                  link: '/room.jpeg',
                },
                css: {
                  display: 'flex',
                  gap: 4,
                  width: '100%',
                },
                title: {
                  css: {},
                  content: 'Delux Room',
                },
              },
              {
                uuid: '',
                index: 0,
                img: {
                  css: {
                    backgroundImage: "url('/room.jpeg')",
                    aspectRatio: '4/3',
                    width: 20,
                    height: 20,
                  },
                  link: '/room.jpeg',
                },
                css: {
                  display: 'flex',
                  gap: 4,
                  width: '100%',
                },
                title: {
                  css: {},
                  content: 'Delux Room',
                },
              },
              {
                uuid: '',
                index: 0,
                img: {
                  css: {
                    backgroundImage: "url('/room.jpeg')",
                    aspectRatio: '4/3',
                    width: 20,
                    height: 20,
                  },
                  link: '/room.jpeg',
                },
                css: {
                  display: 'flex',
                  gap: 4,
                  width: '100%',
                },
                title: {
                  css: {},
                  content: 'Delux Room',
                },
              },
              {
                uuid: '',
                index: 0,
                css: {},
                children: {
                  css: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: 4,
                  },
                  content: [
                    {
                      uuid: '',
                      index: 0,
                      css: {},
                      button: {
                        css: {
                          backgroundColor: 'red',
                          padding: 10,
                          borderRadius: 10,
                        },
                        content: 'Room details',
                        link: '#',
                      },
                    },
                    {
                      uuid: '',
                      index: 0,
                      css: {},
                      button: {
                        css: {
                          backgroundColor: 'red',
                          padding: 10,
                          borderRadius: 10,
                        },
                        content: 'Book now',
                        link: '#',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
  const renderCard = (cardInit: card) => {
    return (
      <div style={cardInit.css}>
        {cardInit?.img && (
          <img src={cardInit.img.link} style={cardInit.img.css} alt="" />
        )}
        {cardInit?.title && (
          <div style={cardInit.title.css}>{cardInit.title.content}</div>
        )}
        {cardInit?.des && (
          <div style={cardInit.des.css}>{cardInit.des.content}</div>
        )}

        {cardInit?.button?.link && (
          <Link href={cardInit.button.link}>
            <div style={cardInit.button.css}>{cardInit.button.content}</div>
          </Link>
        )}

        {cardInit?.children?.content?.length && (
          <div style={cardInit?.children?.css}>
            {cardInit?.children?.content.map((item, index) => {
              return <div key={item.index}>{renderCard(item)}</div>;
            })}
          </div>
        )}
      </div>
    );
  };
  return renderCard(value);
}
