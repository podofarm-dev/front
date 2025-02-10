'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface ImageUploadProps {
  imageUrl?: string;
  setImage: Dispatch<SetStateAction<File | null>>;
}

const ImageUpload = ({ imageUrl, setImage }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  console.log(imageUrl);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (imageUrl) {
      setPreview(imageUrl);
    }
  }, [imageUrl]);

  return (
    <div className="relative flex w-full flex-col items-center gap-4">
      {preview && (
        <Avatar className="h-full w-full">
          <AvatarImage src={preview} />
          <AvatarFallback>프로필 사진</AvatarFallback>
        </Avatar>
      )}
      <Button
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
