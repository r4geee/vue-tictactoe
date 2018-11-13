import _ from 'lodash';

function allEqual(array) {
  return array.every(v => v != null && v === array[0]);
}

function checkVert(matrix) {
  // eslint-disable-next-line no-plusplus,no-restricted-syntax
  for (const verticalLine of matrix) {
    console.log(verticalLine);
    if (allEqual(verticalLine)) {
      return verticalLine[0];
    }
  }
  return null;
}

function checkHorz(matrix) {
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < matrix[0].length; j++) {
    const horzLine = matrix.map((vl, i) => matrix[i][j]);
    console.log(horzLine);
    if (allEqual(horzLine)) {
      return horzLine[0];
    }
  }
  return null;
}

function checkDiag(matrix) {
  const leftTopToRightBot = _.range(matrix.length).map(i => matrix[i][i]);
  const rightTopToLeftBot = _.range(matrix.length).map(i => matrix[matrix.length - 1 - i][i]);
  return allEqual(leftTopToRightBot) || allEqual(rightTopToLeftBot) || null;
}

export default function (matrix) {
  return checkHorz(matrix) || checkVert(matrix) || checkDiag(matrix) || null;
}
