const InitialState = {
  products: [
    {
      id: 1,
      title: "Champagne",
      image:
        "https://products1.imgix.drizly.com/ci-nicolas-feuillatte-champagne-brut-cafb46a2c7c2ffaa.png?auto=format%2Ccompress&dpr=2&fm=jpg&h=240&q=20",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: "100.00",
      alt: "Product1",
    },
    {
      id: 2,
      title: "Wine",
      image:
        "https://products0.imgix.drizly.com/ci-meiomi-pinot-noir-5e9f6b426bbef182.jpeg?auto=format%2Ccompress&dpr=2&fm=jpg&h=240&q=20",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: "100.00",
      alt: "Product2",
    },
    {
      id: 3,
      title: "Vodka",
      image:
        "https://products0.imgix.drizly.com/ci-ketel-one-botanical-peach-and-orange-blossom-bd9c0f2b11cbaab0.jpeg?auto=format%2Ccompress&dpr=2&fm=jpg&h=240&q=20",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: "100.00",
      alt: "Product3",
    },
    {
      id: 4,
      title: "Whisky",
      image:
        "https://products3.imgix.drizly.com/ci-jack-daniels-old-no-7-92707d5e737cf4ac.jpeg?auto=format%2Ccompress&dpr=2&fm=jpg&h=240&q=20",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: "100.00",
      alt: "Product4",
    },
    {
      id: 5,
      title: "Beer",
      image:
        "https://products0.imgix.drizly.com/ci-corona-extra-2501fe5ca490cb1d.jpeg?auto=format%2Ccompress&dpr=2&fm=jpg&h=240&q=20",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: "100.00",
      alt: "Product5",
    },
    {
      id: 6,
      title: "Rum",
      image:
        "https://products0.imgix.drizly.com/ci-the-kraken-black-spiced-rum-23ade6e27dc6acba.jpeg?auto=format%2Ccompress&dpr=2&fm=jpg&h=240&q=20",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: "100.00",
      alt: "Product6",
    },
  ],
};

export const ProductReducers = (state = InitialState, action) => {
  return state;
};
