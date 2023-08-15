import { formatBytes } from '../utils/helpers';

function InputUpload({ img, size }) {
  return (
    <div className="space-between flex items-center">
      <img className="h-6 w-6" src={img} alt="Preview of what you uploaded" />
      <p>{formatBytes(size)}</p>
    </div>
  );
}

export default InputUpload;
