import { createDataImagesList, importAllImage } from '../../utils/utils';
import { descriptions } from './data';

const images = importAllImage(require.context('./', false, /\.(png|jpg|svg)$/));
const yellowList = createDataImagesList(images, descriptions);

export { yellowList };
