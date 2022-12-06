import { ReactNode, useEffect, useRef, useState } from 'react';
import { Card, renderCard } from '../../pages/home-banner';

interface ISlider {
  ItemCard: Card[];
  numberDisplay: number;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  dot?: boolean;
  step?: number;
  timeOutPlay?: number;
}

export const CustomSlider = ({
  ItemCard,
  numberDisplay,
  iconLeft,
  iconRight,
  dot = true,
  step = 1,
  timeOutPlay = 3000,
}: ISlider) => {
  const [index, setIndex] = useState(0);
  const [widthCard, setWidthCard] = useState(0);
  const refAvatar = useRef<HTMLDivElement>(null);
  const refCard = useRef<HTMLDivElement>(null);

  const getTranslate = () => {
    if (refAvatar?.current?.offsetWidth) {
      if (
        (ItemCard.length - numberDisplay) * refAvatar.current.offsetWidth <
        index * refAvatar.current.offsetWidth
      ) {
        return (
          -(ItemCard.length - numberDisplay) * refAvatar.current.offsetWidth
        );
      }
      return -index * refAvatar.current.offsetWidth;
    }
    return 0;
  };

  useEffect(() => {
    setWidthCard((refCard?.current?.offsetWidth ?? 0) / numberDisplay);
  }, [refAvatar, refCard]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < ItemCard.length - numberDisplay) {
        setIndex((prev) => prev + step);
        clearTimeout(timeout);
      }
    }, timeOutPlay);
    return () => {
      clearTimeout(timeout);
    };
  }, [index]);
  return (
    <div
      className="hide-scrollbar"
      style={{
        width: '100vw',
        overflowX: 'hidden',
        position: 'relative',
      }}
      ref={refCard}
    >
      <div
        onClick={() => {
          if (index > step - 1) {
            setIndex((prev) => prev - step);
          }
        }}
        style={{
          position: 'absolute',
          left: 0,
          bottom: '50%',
          transform: 'translateY(50%)',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '100px',
          zIndex: 101,
          cursor: index > 0 ? 'pointer' : 'default',
          opacity: index > 0 ? 1 : 0.5,
          color: 'red',
        }}
      >
        {'<'}
      </div>

      <div
        style={{
          transform: `translateX(${getTranslate()}px)`,
          display: 'flex',
          // gap: 20,
          marginBottom: 10,
          height: '100%',
          width: 'min-content',
        }}
      >
        {ItemCard.map((item) => {
          return (
            <div
              ref={refAvatar}
              key={item.uuid}
              style={{
                width: `${widthCard}px`,
              }}
            >
              {renderCard(item)}
            </div>
          );
        })}
      </div>

      <div
        onClick={() => {
          if (index < ItemCard.length - numberDisplay) {
            setIndex((prev) => prev + step);
          }
        }}
        style={{
          position: 'absolute',
          right: 0,
          bottom: '50%',
          transform: 'translateY(50%)',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '100px',
          zIndex: 101,
          cursor:
            index < ItemCard.length - numberDisplay ? 'pointer' : 'default',
          opacity: index < ItemCard.length - numberDisplay ? 1 : 0.5,
          color: 'red',
        }}
      >
        {'>'}
      </div>

      {dot ? (
        <div
          style={{
            position: 'absolute',
            right: '50%',
            bottom: '100px',
            transform: 'translateX(50%)',
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            zIndex: 101,
            color: 'red',
            gap: 10,
          }}
        >
          {new Array(Math.ceil((ItemCard.length - numberDisplay) / step + 1))
            .fill(null)
            .map((item, index1) => {
              return (
                <div
                  key={index1}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '100%',
                    backgroundColor: 'red',
                    opacity: index1 * step === index ? '100%' : '50%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setIndex(index1 * step)}
                ></div>
              );
            })}
        </div>
      ) : null}
    </div>
  );
};
