import { createPortal } from 'react-dom';
import { ThreeDots } from 'react-loader-spinner';

const loader = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <div className="LoaderWrapper">
      <div className="LoaderWrCon">
        <ThreeDots
          height="120"
          width="120"
          radius="11"
          color="#3470FF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </div>,
    loader
  );
};
export default Loader;
