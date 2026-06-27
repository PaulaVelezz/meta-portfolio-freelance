import React, { useState } from "react";
import { Upload, File, X } from "lucide-react";

const FileUpload = ({ label, name, value, onChange, helperText }) => {
  const [fileName, setFileName] = useState(value || "");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      if (onChange) onChange(file.name);
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setFileName("");
    if (onChange) onChange("");
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs font-medium text-text-secondary tracking-wide uppercase">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="file"
          id={name}
          name={name}
          accept="image/*,.pdf,.ai,.svg,.eps"
          onChange={handleFileChange}
          className="hidden"
        />
        {fileName ? (
          <div className="flex items-center justify-between rounded-xl border border-primary/40 bg-primary-50/30 px-4 py-3 text-sm">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <File className="w-4 h-4 text-primary shrink-0" />
              <span className="text-foreground font-medium truncate">
                {fileName}
              </span>
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className="p-1 rounded-full hover:bg-muted text-text-secondary hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <label
            htmlFor={name}
            className="flex items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-surface px-4 py-4 text-sm text-text-secondary hover:border-primary/60 hover:bg-surface-elevated/40 cursor-pointer transition-all duration-300"
          >
            <Upload className="w-4 h-4 text-text-muted" />
            <span>Subir archivo o arrastrar acá</span>
          </label>
        )}
      </div>
      {helperText && <span className="text-xs text-text-muted">{helperText}</span>}
    </div>
  );
};

export default FileUpload;
