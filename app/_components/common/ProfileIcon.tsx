'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ProfileIconProps {
  id?: string;
  name?: string;
  imgUrl?: string;
}

const ProfileIcon = ({ id, name, imgUrl }: ProfileIconProps) => {
  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar>
            <AvatarImage src={imgUrl} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProfileIcon;
