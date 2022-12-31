import { css } from '@emotion/react';
import { FaSpinner } from 'react-icons/fa';

const SpinnerStyle = css`
  font-size: 20px;
  animation: spin 2s linear infinite;
  display: flex;
  align-self: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <FaSpinner css={SpinnerStyle} />;
};

export default Spinner;
