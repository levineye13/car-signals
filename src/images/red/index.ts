import { createDataImagesList, importAllImage } from '../../utils/utils';
import { descriptions } from './data';

const images = importAllImage(require.context('./', false, /\.(png|jpg|svg)$/));
const redList = createDataImagesList(images, descriptions);

export { redList };
