import Box from './Box';
import Button from './Button';
import toast from '../config/toast-message';
import { forwardRef, useEffect, useState } from 'react';
import '../style/file-input-preview.scss';
import Label from './Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const FileInputPreview = forwardRef(
  ({ onChange, initialImages = '', ...props }, ref) => {
    const [preview, setPreview] = useState('');
    const [files, setFiles] = useState('');

    useEffect(() => {
      setFiles(initialImages);
      console.log('initialimages');
    }, [initialImages]);

    const handleChange = (e) => {
      setFiles([...e.target.files]);
    };

    useEffect(() => {
      if (files.length > 10) {
        toast.error('Number of files cannot be greater then 10!');
        return;
      }
      if (onChange) onChange(files);
      const imageUrlList = [];
      if (files.length !== 0) {
        for (const file of files) {
          imageUrlList.push({
            name: file.name,
            src: window.URL.createObjectURL(file),
          });
        }
      }
      setPreview(imageUrlList);
      console.log('files.length not greater then zero!');
    }, [files]);

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
                {preview.map(({ name, src }, index) => (
                  <Box key={index} className="inline-block relative">
                    <Button
                      variant="small"
                      className="image-preview__button-close absolute top-3 right-3 z-10"
                      onClick={(e) => {
                        setFiles((files) =>
                          files.filter((file) => file.name !== name)
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faClose} size="md" />
                    </Button>
                    <img
                      className="image-preview__image relative"
                      alt="test"
                      src={src}
                    />
                  </Box>
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
);

export default FileInputPreview;

function getImageList(initialImages, preview) {
  console.log({ initialImages, preview });
  if (Array.isArray(initialImages) && initialImages.length > 0) {
    return initialImages;
  } else {
    return preview;
  }
}
