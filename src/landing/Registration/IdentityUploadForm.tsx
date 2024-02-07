import React, { DragEventHandler, useState } from 'react'

export const IdentityUploadForm = () => {
    // State to store uploaded files of type FileList
    const [files, setFiles] = useState<FileList | []>([]);

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
        <input type="file" name="file_upload" className="hidden" onChange={handleFileChange} multiple />
    </label>
    {fileItems}
</div>
  )
}
