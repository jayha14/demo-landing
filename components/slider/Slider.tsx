import { useRef, useState } from "react";
import { Card, renderCard } from "../../pages/home-banner";

interface ISlider {
  ItemCard: Card[];
}

export const CustomSlider = ({ ItemCard }: ISlider) => {
  const [index, setIndex] = useState(0);
  const refAvatar = useRef<HTMLDivElement>(null);

  const getTranslate = () => {
    if (refAvatar?.current?.offsetWidth) {
      return -index * refAvatar.current.offsetWidth;
    }
    return 0;
  };

  return (
    <div
      className="hide-scrollbar"
      style={{
        width: "100%",
        overflowX: "scroll",
        position: "relative",
      }}
    >
      <div
        onClick={() => {
          if (index > 0) {
            setIndex((prev) => prev - 2);
          }
        }}
        style={{
          position: "absolute",
          left: 0,
          bottom: "50%",
          transform: "translateY(50%)",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          zIndex: 101,
          cursor: index > 0 ? "pointer" : "default",
          opacity: index > 0 ? 1 : 0.5,
          color: "white",
        }}
      >
        {"<"}
      </div>

      <div
        style={{
          transform: `translateX(${getTranslate()}px)`,
          display: "flex",
          gap: 20,
          marginBottom: 10,
          height: "100%",
        }}
      >
        {ItemCard.map((item) => {
          return (
            <div
              ref={refAvatar}
              key={item.uuid}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              {renderCard(item)}
            </div>
          );
        })}
      </div>

      <div
        onClick={() => {
          if (index < ItemCard.length - 2) {
            setIndex((prev) => prev + 2);
          }
        }}
        style={{
          position: "absolute",
          right: 0,
          bottom: "50%",
          transform: "translateY(50%)",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          zIndex: 101,
          cursor: index < ItemCard.length - 2 ? "pointer" : "default",
          opacity: index < ItemCard.length - 2 ? 1 : 0.5,
          color: "white",
        }}
      >
        {">"}
      </div>
    </div>
  );
};
