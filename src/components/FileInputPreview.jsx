import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import '../style/file-input-preview.scss';
import Label from './Label';

export default function FileInputPreview() {
  const [preview, setPreview] = useState([]);

  useEffect(() => {
    console.log({ preview });
  }, [preview]);

  const handleChange = (e) => {
    const currentFiles = e.target.files;
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
    console.log({ imageUrlList, preview });
  };
  return (
    <>
      <div>
        <label className="image-uploads-label" htmlFor="image-uploads">
          Choose images to upload (PNG, JPG)
        </label>
        <input
          onChange={handleChange}
          type="file"
          id="image-uploads"
          name="image-uploads"
          accept=".jpg, .jpeg, .png"
          multiple
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
}
