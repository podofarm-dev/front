'use client';

import { useEffect, useRef, useState } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface FormValues {
  file?: File;
}

interface ImageUploadProps {
  imageUrl?: string;
  setValue: UseFormSetValue<FormValues>;
  watch: UseFormWatch<FormValues>;
}

const ImageUpload = ({ imageUrl, setValue, watch }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const preview = watch('file') ? URL.createObjectURL(watch('file') as File) : imageUrl;

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('file', file);
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center gap-4">
      {preview && (
        <Avatar className="h-full w-full">
          <AvatarImage src={preview} />
          <AvatarFallback>프로필 사진</AvatarFallback>
        </Avatar>
      )}
      <Button
        type="button"
        className="absolute bottom-0 right-0 bg-accent hover:bg-accent"
        onClick={handleButtonClick}
      >
        사진 바꾸기
      </Button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  );
};

export default ImageUpload;
