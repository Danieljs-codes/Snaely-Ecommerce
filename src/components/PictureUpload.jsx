import { useRef, useState } from 'react';
import InputUpload from './InputUpload';

function PictureUpload() {
  const [file, setFile] = useState('');
  const [previewUrl, setPreviewUrl] = useState([]);
  const [size, setSize] = useState([]);
  // Step 1 Create a state for dragging
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  // Step 1 handle Drag events
  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
      console.log(dragActive);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }

  // Step 2 handle Dropping the file
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      console.log(file);
      const { name } = file;
      const { size } = file;
      setFile(name);
      setSize(p => [...p, size]);
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(p => [...p, imageUrl]);
      setFile(e.dataTransfer.files);
      console.log(file);

      // Create an Image preview
    }
  }

  function handleChange(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // setFile(e.target.files[0]);
      const file = e.target.files[0];
      console.log(e.target.files);
      const { name } = file;
      const { size } = file;
      setFile(name);
      setSize(p => [...p, size]);
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(p => [...p, imageUrl]);
    }
  }

  return (
    <div>
      <form
        onDragEnter={handleDrag}
        className="relative mx-auto flex w-full max-w-[31.25rem] items-center justify-center overflow-hidden"
      >
        <label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            ref={inputRef}
            accept="image/jpeg, image/jpg, image/png"
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple={true}
            onChange={e => handleChange(e)}
          />
        </label>
        {dragActive ? (
          <div
            className="absolute inset-0 z-30 h-full w-full bg-black/10"
            onDragEnter={e => handleDrag(e)}
            onDragLeave={e => handleDrag(e)}
            onDragOver={e => handleDrag(e)}
            onDrop={e => handleDrop(e)}
          ></div>
        ) : null}
      </form>
      <div>
        {previewUrl &&
          previewUrl.map((url, index) => (
            <img key={index} src={url} alt="preview" />
          ))}
      </div>
    </div>
  );
}

export default PictureUpload;
