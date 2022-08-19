import { Colors } from './constants';
import { RequireContext } from './interfaces';
import { TImageList } from './types';

export const importAllImage = (
  context: RequireContext
): { [key: string]: string } =>
  context.keys().reduce((acc, item) => {
    const imageName = item.match(/[a-z]+\_\d+/);

    if (imageName !== null) {
      return {
        ...acc,
        [imageName[0]]: context(item),
      };
    }

    return acc;
  }, {});

export const createDataImagesList = (
  images: {
    [key: string]: string;
  },
  descriptions: {
    [key: string]: string;
  }
): TImageList => {
  const list: TImageList = [];

  for (const key in images) {
    const description: string = descriptions[key];
    const color: string = key.split('_')[0];

    if (
      color === Colors.Green ||
      color === Colors.Red ||
      color === Colors.Yellow
    ) {
      list.push({
        type: color,
        src: images[key],
        description,
        group:
          color === Colors.Green
            ? 0
            : color === Colors.Red
            ? 1
            : color === Colors.Yellow
            ? 2
            : -1,
      });
    }
  }

  return list;
};
