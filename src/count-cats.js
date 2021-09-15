import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(catsBox) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let count = 0;
  catsBox.forEach(row => {
    row.forEach(box => {
      if (box === '^^') count += 1;     
    });    
  });

  return count
}
// 