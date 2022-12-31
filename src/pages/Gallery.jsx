import React, { useState } from 'react';

function FileUploadForm() {
  const [files, setFiles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    // Send the POST request to the server here, using the `fetch` or `axios` library
  };

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };
  console.log(files);

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleFileChange} />
      <button type="submit">Upload</button>
      {files.map((file) => (
        <img src={URL.createObjectURL(file)} alt={file.name} />
      ))}
    </form>
  );
}

export default FileUploadForm;
