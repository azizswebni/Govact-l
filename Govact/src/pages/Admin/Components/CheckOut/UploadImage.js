import { Button } from "@material-ui/core";
import React from "react";
import ImageUploading from "react-images-uploading";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
function UploadImage() {
  const [images, setImages] = React.useState([]);
  
  const maxNumber = 69;
  const classes = useStyles();
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    const formData = new FormData();
    formData.append('file', imageList[0].file);
    console.log(imageList[0].file, addUpdateIndex);
    localStorage.setItem("name", imageList[0].file.name);
    localStorage.setItem("image", formData[0]);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,

          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload
            </Button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <Button variant="contained" color="primary" onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadImage;
