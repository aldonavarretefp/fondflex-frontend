import fondflexAPI from "../api/fondflexAPI";

const upload = (file: File, onUploadProgress: any): Promise<any> => {
  let formData = new FormData();

  formData.append("file", file);

  return fondflexAPI.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = (): Promise<any> => {
  return fondflexAPI.get("/files");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;
