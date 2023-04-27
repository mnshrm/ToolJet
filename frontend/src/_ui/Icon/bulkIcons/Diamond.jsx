import React from 'react';

const Diamond = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.4"
      d="M18.5408 3.72267L21.4629 7.05149C22.141 7.82402 22.1814 8.9755 21.559 9.79476L13.6854 20.1597C12.8342 21.2801 11.1658 21.2801 10.3146 20.1597L2.44095 9.79476C1.81861 8.9755 1.85896 7.82402 2.53709 7.05149L5.45918 3.72267C5.86269 3.263 6.44106 3 7.04842 3H10.1099H14.1263H16.9516C17.5589 3 18.1373 3.263 18.5408 3.72267Z"
      fill={fill}
    />
    <path
      d="M21.25 7.63293C21.6642 7.63293 22 7.96872 22 8.38293C22 8.79715 21.6642 9.13293 21.25 9.13293L2.75 9.13281C2.33579 9.13281 2 8.79703 2 8.38281C2 7.9686 2.33579 7.63281 2.75 7.63281L21.25 7.63293Z"
      fill={fill}
    />
  </svg>
);

export default Diamond;