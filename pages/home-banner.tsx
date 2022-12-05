import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import { CustomSlider } from "../components/slider/Slider";

export type Card = {
  uuid: string;
  index: number;
  type: "Slider" | "Other" | "Image" | "Title";
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
          cardInit.type !== "Image" && cardInit.link ? "auto" : "none",
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
    case "Image":
      return <Image src={cardInit.link} alt="" fill />;
    case "Title":
      return cardInit.title;
    case "Slider":
      return <CustomSlider ItemCard={cardInit.children} />;
    case "Other":
      return cardInit.children.map((item) => {
        return <div key={item.index}>{renderCard(item)}</div>;
      });
  }
};

export default function HomeBanner() {
  const value: Card = {
    uuid: "11234",
    index: 0,
    type: "Other",
    css: {
      width: "100vw",
      height: "100vh",
      position: "relative",
      backgroundColor: "black",
    },
    title: "",
    link: "",
    children: [
      {
        uuid: "11234",
        index: 0,
        type: "Slider",
        css: {},
        title: "",
        link: "",
        children: [
          {
            uuid: "11234",
            index: 0,
            type: "Other",
            css: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              position: "relative",
              backgroundColor: "black",
              width: "100%",
              height: "100%",
            },
            title: "",
            link: "",
            children: [
              {
                uuid: "11234",
                index: 0,
                type: "Title",
                css: { color: "white", width: "100vw", height: "100vh" },
                title: "Slide1",
                link: "",
                children: [],
              },
              {
                uuid: "11234",
                index: 0,
                type: "Title",
                css: { color: "white", width: "100vw", height: "100vh" },
                title: "Slide1",
                link: "",
                children: [],
              },
              {
                uuid: "11234",
                index: 0,
                type: "Title",
                css: { color: "white", width: "100vw", height: "100vh" },
                title: "Slide1",
                link: "",
                children: [],
              },
            ],
          },
        ],
      },
      {
        uuid: "11234",
        index: 0,
        type: "Other",
        css: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0 100px 50px",
          display: "flex",
          justifyContent: "space-between",
        },
        title: "",
        link: "",
        children: [
          {
            uuid: "11234",
            index: 0,
            type: "Other",
            css: {},
            title: "",
            link: "",
            children: [
              {
                uuid: "11234",
                index: 0,
                type: "Title",
                css: { color: "white" },
                title: "Arrival",
                link: "",
                children: [],
              },
              {
                uuid: "11234",
                index: 0,
                type: "Other",
                css: {
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  justifyContent: "center",
                },
                title: "",
                link: "https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html",
                children: [
                  {
                    uuid: "11234",
                    index: 0,
                    type: "Title",
                    css: { color: "white", fontSize: "30px" },
                    title: "5",
                    link: "",
                    children: [],
                  },
                  {
                    uuid: "11234",
                    index: 0,
                    type: "Title",
                    css: { color: "white" },
                    title: "Dec",
                    link: "",
                    children: [],
                  },
                  {
                    uuid: "11234",
                    index: 0,
                    type: "Title",
                    css: { color: "white", paddingLeft: 20, fontSize: "30px" },
                    title: "->",
                    link: "",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            uuid: "11234",
            index: 0,
            type: "Other",
            css: {},
            title: "",
            link: "",
            children: [
              {
                uuid: "11234",
                index: 0,
                type: "Title",
                css: { color: "white" },
                title: "Departure",
                link: "",
                children: [],
              },
              {
                uuid: "11234",
                index: 0,
                type: "Other",
                css: {
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  justifyContent: "center",
                },
                title: "",
                link: "https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html",
                children: [
                  {
                    uuid: "11234",
                    index: 0,
                    type: "Title",
                    css: { color: "white", fontSize: "30px" },
                    title: "6",
                    link: "",
                    children: [],
                  },
                  {
                    uuid: "11234",
                    index: 0,
                    type: "Title",
                    css: { color: "white" },
                    title: "Dec",
                    link: "",
                    children: [],
                  },
                  {
                    uuid: "11234",
                    index: 0,
                    type: "Title",
                    css: { color: "white", paddingLeft: 20, fontSize: "30px" },
                    title: "->",
                    link: "",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            uuid: "11234",
            index: 0,
            type: "Other",
            css: {},
            title: "",
            link: "",
            children: [
              {
                uuid: "11234",
                index: 0,
                type: "Title",
                css: { color: "white" },
                title: "Guest",
                link: "",
                children: [],
              },
              {
                uuid: "11234",
                index: 0,
                type: "Title",
                css: {
                  color: "white",
                  fontSize: "30px",
                },
                title: "2",
                link: "https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html",
                children: [],
              },
            ],
          },
          {
            uuid: "11234",
            index: 0,
            type: "Other",
            css: {
              padding: "20px 40px",
              border: "1px solid white",
              color: "white",
              fontSize: "24px",
              textAlign: "center",
            },
            title: "",
            link: "https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html",
            children: [
              {
                uuid: "11234",
                index: 0,
                type: "Title",
                css: {},
                title: "Book now",
                link: "",
                children: [],
              },
              {
                uuid: "11234",
                index: 0,
                type: "Title",
                css: { fontSize: "16px" },
                title: "Best Price Guaranteed",
                link: "",
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

const saveData = [
  {
    uuid: "11234",
    index: 0,
    type: "Image",
    css: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
    },
    title: "",
    link: "/room.jpeg",
    children: [],
  },
  {
    uuid: "11234",
    index: 0,
    type: "Other",
    css: {
      display: "flex",
      gap: 2,
      fontSize: "24px",
      fontWeight: 500,
    },
    title: "Terraço",
    link: "",
    children: [
      {
        uuid: "11234",
        index: 0,
        type: "Title",
        css: {
          color: "white",
        },
        title: "Terraço",
        link: "",
        children: [],
      },
      {
        uuid: "11234",
        index: 0,
        type: "Title",
        css: {
          color: "#ceb071",
        },
        title: "Sky Bar",
        link: "",
        children: [],
      },
    ],
  },
  {
    uuid: "11234",
    index: 0,
    type: "Title",
    css: {
      fontSize: "24px",
      fontWeight: 400,
      color: "white",
    },
    title: "Offering a paranomic view over Hanoi’s legendary Hoan Kiem Lake",
    link: "",
    children: [],
  },
  {
    uuid: "11234",
    index: 0,
    type: "Title",
    css: {
      fontSize: "24px",
      fontWeight: 400,
      textAlign: "center",
      color: "white",
      padding: "12px 18px",
      border: "1px solid white",
    },
    title: "See more information",
    link: "https://www.lasinfoniadelreyhotel.com/facilities/detail/1/La_Sinfonia_del_Rey_Restaurant.html",
    children: [],
  },
];
