"use client";

import { Spinner } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "actions/storageActions";
import { queryClient } from "config/ReactQueryClientProvider";
import { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";

export default function DragDropZone() {
  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    if (acceptedFiles.length > 0) {
      const formData = new FormData();
      acceptedFiles.forEach((file) => formData.append(file.name, file));
      const result = await uploadImageMutation.mutate(formData);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });
  return (
    <div
      {...getRootProps()}
      //   onSubmit={handleSubmit}
      className="w-full border-4 py-20 border-dotted border-indigo-700 flex flex-col items-center justify-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {uploadImageMutation.isPending ? (
        <Spinner />
      ) : isDragActive ? (
        <p>Drop your file here.</p>
      ) : (
        <p>Drag and drop your file here.</p>
      )}
    </div>
  );
}
