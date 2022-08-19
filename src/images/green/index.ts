import { createDataImagesList, importAllImage } from '../../utils/utils';
import { descriptions } from './data';

const images = importAllImage(require.context('./', false, /\.(png|jpg|svg)$/));
const greenList = createDataImagesList(images, descriptions);

export { greenList };
