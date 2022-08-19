export type TColors = 'green' | 'red' | 'yellow';
export type TImageName = `${TColors}_${number}`;
export type TImage = {
  type: TColors;
  src: string;
  description: string;
  group: number;
};
export type TImageList = TImage[];
