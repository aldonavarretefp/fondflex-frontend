import React, { DragEventHandler, useEffect, useState } from 'react'
import { IFile } from '../../models';
import FileUploadService from '../../services/UploadService';

export const IdentityUploadForm = () => {
    // State to store uploaded files of type FileList
    const [files, setFiles] = useState<FileList | []>([]);
    const [currentFile, setCurrentFile] = useState<File>();
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [fileInfos, setFileInfos] = useState<Array<IFile>>([]);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let selectedFiles: FileList | undefined | null = undefined;

    if (event instanceof DragEvent) {
        selectedFiles = event.dataTransfer?.files;
    } else {
        selectedFiles = event.target.files;
    }

    console.log(selectedFiles);
};

const handleDraggedFiles = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    let selectedFiles = event.dataTransfer.files;
    setFiles(selectedFiles);
    console.log(selectedFiles);
}

const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { files } = event.target;
  const selectedFiles = files as FileList;
  setCurrentFile(selectedFiles?.[0]);
  setProgress(0);
};
useEffect(() => {
  // FileUploadService.getFiles().then((response) => {
  //   setFileInfos(response.data);
  // });
}, []);

const upload = () => {
  setProgress(0);
  
  if (!currentFile) return;

  FileUploadService.upload(currentFile, (event: any) => {
    setProgress(Math.round((100 * event.loaded) / event.total));
  })
    .then((response) => {
      setMessage(response.data.message);
      return FileUploadService.getFiles();
    })
    .then((files) => {
      setFileInfos(files.data);
    })
    .catch((err) => {
      setProgress(0);

      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Could not upload the File!");
      }

      setCurrentFile(undefined);
    });
};

  // Optional: Display file names in the UI
  const fileItems = files.length > 0 && (
    <ul>
      {Array.from(files).map((file, index) => (
        <li key={index}>Hello</li>
      ))}
    </ul>
  );

  // Handle drag over
  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
};

  return (
    <div>
    <label
        onDrop={handleDraggedFiles}
        onDragOver={handleDragOver}
        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="font-medium text-gray-600">
                Drop files to Attach, or <span className="text-blue-600 underline">browse</span>
            </span>
        </span>
        <input type="file" name="file_upload" className="hidden" onChange={selectFile} multiple />
    </label>
    {currentFile && (
        <div className="progress my-3">
          <div
            className="progress-bar progress-bar-info"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}
      <div className="card mt-3">
        <div className="card-header">List of Files</div>
        <ul className="list-group list-group-flush">
          {fileInfos &&
            fileInfos.map((file, index) => (
              <li className="list-group-item" key={index}>
                <a href={file.url}>{file.name}</a>
              </li>
            ))}
        </ul>
      </div>
</div>
  )
}
