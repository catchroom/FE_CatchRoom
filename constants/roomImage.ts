type SrcType = {
  src: string;
};

type SrcArrayType = {
  data: SrcType[];
};

export const IMAGE_SRC: SrcArrayType = {
  data: [
    { src: '/sample/room4.png' },
    { src: '/sample/room5.png' },
    { src: '/sample/room1.jpg' },
  ],
};
