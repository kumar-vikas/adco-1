import q1 from '../images/qa/q1.png';
import q2 from '../images/qa/q2.png';
import q3 from '../images/qa/q3.png';
import q4 from '../images/qa/q4.png';
import q5 from '../images/qa/q5.png';
import q6 from '../images/qa/q6.png';
import q7 from '../images/qa/q7.png';
import q8 from '../images/qa/q8.png';

import a1 from '../images/qa/a1.png';
import a2 from '../images/qa/a2.png';
import a3 from '../images/qa/a3.png';
import a4 from '../images/qa/a4.png';
import a5 from '../images/qa/a5.png';
import a6 from '../images/qa/a6.png';
import a7 from '../images/qa/a7.png';
import a8 from '../images/qa/a8.png';

const images = {
  q1,q2,q3,q4,q5,q6,q7,q8,
  a1,a2,a3,a4,a5,a6,a7,a8,
};

function getImageByKey(key) {
  return images[key]
}

export default getImageByKey;