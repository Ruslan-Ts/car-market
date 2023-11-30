import { createPortal } from 'react-dom';
import { RotatingLines } from 'react-loader-spinner';

const loader = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <div className="LoaderWr">
      <div className="LoaderWrCon">
        <RotatingLines
          strokeColor="#3470FF"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </div>,
    loader
  );
};
export default Loader;
