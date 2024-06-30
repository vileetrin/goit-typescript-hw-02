import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <Audio
        height="80"
        width="80"
        color="violet"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
