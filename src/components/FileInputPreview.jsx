import toast from '../config/toast-message';
import { forwardRef, useState } from 'react';
import '../style/file-input-preview.scss';
import Label from './Label';

const FileInputPreview = forwardRef(({ onChange, ...props }, ref) => {
  const [preview, setPreview] = useState([]);

  const handleChange = (e) => {
    const currentFiles = e.target.files;
    if (onChange) onChange(e);
    if (currentFiles.length > 10) {
      toast.error('Number of files cannot be greater then 10!');
      return;
    }
    const imageUrlList = [];
    if (currentFiles.length !== 0) {
      for (const file of currentFiles) {
        imageUrlList.push(window.URL.createObjectURL(file));
      }
    }
    setPreview(imageUrlList);
  };
  return (
    <>
      <div>
        <label className="image-uploads-label" htmlFor="image-uploads">
          Choose images to upload (PNG, JPG)
        </label>
        <input
          ref={ref}
          onChange={handleChange}
          type="file"
          className="image-uploads"
          name="image-uploads"
          accept=".jpg, .jpeg, .png"
          multiple
          {...props}
        />
      </div>
      <div className="image-preview">
        {preview.length > 0 ? (
          <>
            <Label>Image preview:</Label>
            <div className="image-preview-list">
              {preview.map((src, index) => (
                <img
                  key={index}
                  className="image-preview__image"
                  alt="test"
                  src={src}
                />
              ))}
            </div>
          </>
        ) : (
          <p style={{ color: 'white' }}>
            No files currently selected for upload
          </p>
        )}
      </div>
    </>
  );
});

export default FileInputPreview;
