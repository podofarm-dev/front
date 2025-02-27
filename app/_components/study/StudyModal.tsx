import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { studySchema } from '@/app/_utils/studySchema';
import { useStudyCreateMutation } from '@/app/_hooks/api/useStudyCreateMutation';
import { useStudyEnterMutation } from '@/app/_hooks/api/useStudyEnterMutation';
import { PATH } from '@/app/_constants/path';

interface StudyModalProps {
  title: string;
  studyLabel: string;
  buttonLabel: string;
  onClose: () => void;
}

interface FormValues {
  studyTitle?: string;
  studyCode?: string;
  password: string;
}

export function StudyModal({ title, studyLabel, buttonLabel, onClose }: StudyModalProps) {
  const router = useRouter();
  const studyCreateMutation = useStudyCreateMutation();
  const studyEnterMutation = useStudyEnterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(studySchema),
    context: { studyLabel },
    shouldUnregister: true,
    mode: 'all',
  });

  const onSubmit = (data: FormValues) => {
    if (studyLabel === '스터디명' && !data.studyTitle) {
      return;
    }
    if (studyLabel === '스터디 코드' && !data.studyCode) {
      return;
    }
    if (!data.password) {
      return;
    }

    if (studyLabel === '스터디명' && data.studyTitle && data.password) {
      studyCreateMutation.mutate(
        {
          studyData: {
            name: data.studyTitle,
            password: data.password,
          },
        },
        {
          onSuccess: (response) => {
            const studyCode = response.code;
            router.replace(PATH.STUDY_DASHBOARD(studyCode));
            onClose();
          },
        },
      );
    }

    if (studyLabel === '스터디 코드' && data.studyCode && data.password) {
      studyEnterMutation.mutate(
        {
          studyData: {
            code: data.studyCode,
            password: data.password,
          },
        },
        {
          onSuccess: () => {
            router.replace(PATH.STUDY_DASHBOARD(String(data.studyCode)));
            onClose();
          },
        },
      );
    }

    console.log(data);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="rounded-lg border-0 sm:max-w-[425px]">
        <DialogHeader className="relative before:absolute before:-bottom-4 before:-left-6 before:w-[calc(100%+3rem)] before:border-b before:border-bolder">
          <DialogTitle className="text-left text-xl">{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-12">
            <div className="flex flex-col items-start gap-4">
              {studyLabel === '스터디명' && (
                <>
                  <Label htmlFor="studyTitle" className="text-right text-lg">
                    {studyLabel}
                  </Label>
                  <Input
                    id="studyTitle"
                    placeholder={`${studyLabel}을 입력해 주세요`}
                    className="col-span-3 border-bolder py-5"
                    {...register('studyTitle')}
                  />
                  {errors.studyTitle && (
                    <p className="text-sm text-red-500">{errors.studyTitle.message}</p>
                  )}
                </>
              )}
              {studyLabel === '스터디 코드' && (
                <>
                  <Label htmlFor="studyCode" className="text-right text-lg">
                    {studyLabel}
                  </Label>
                  <Input
                    id="studyCode"
                    placeholder={`${studyLabel}를 입력해 주세요`}
                    className="col-span-3 border-bolder py-5"
                    {...register('studyCode')}
                  />
                  {errors.studyCode && (
                    <p className="text-sm text-red-500">{errors.studyCode.message}</p>
                  )}
                </>
              )}
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="password" className="text-right text-lg">
                참여 비밀번호
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="참여 비밀번호를 입력해 주세요."
                className="col-span-3 border-bolder py-5"
                {...register('password')}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
          </div>
          <DialogFooter className="flex flex-row justify-center sm:flex sm:flex-row sm:justify-center">
            <Button type="submit" className="bg-accent-foreground" disabled={!isValid}>
              {buttonLabel}하기
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
