import React from "react";
import ReactQuill from "react-quill";
import { Controller } from "react-hook-form";
import "react-quill/dist/quill.snow.css";


function QuillEditor({ name, control, label, defaultValue = "" }) {

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactQuill
            value={value || defaultValue}
            onChange={onChange}
            modules={{
              toolbar: {
                container: [
                  [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{'align': []}, { 'color': [] }, { 'background': [] }],
                  ['link', 'image', 'video'],
                  ['clean']
                ],
              }
            }}
            formats={[
              'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'align', 'color', 'background', 'video'
            ]}
            theme="snow"
            style={{ height: 500 }}
          />
        )}
        />
    </div>
  );
}

export default QuillEditor