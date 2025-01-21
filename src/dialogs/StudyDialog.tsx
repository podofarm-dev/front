import FormTextField from "@/modules/HookForm/FormTextField";
import { dialogClose, dialogOpen } from "@/modules/MuiDialog";
import DialogHeader from "@/modules/MuiDialog/DialogHeader";
import { joinStudy, postNewStudy } from "@/services/study.service";
import userStore from "@/store/userStore";
import {
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export interface StudyDialogProps {
  dialogId: string;
  title: string;
  label: '스터디명' | '스터디 코드';
}

const StudyDialog = ({ dialogId, title, label }: StudyDialogProps) => {
  const form = useForm();
  const navigate = useNavigate()
  const userId = userStore.getState().userId || ''
  const { watch, handleSubmit } = form;
  async function onSubmit(data: any) {
    // if (label !== '스터디명') return;
    const { studyName = '', studyCode = '', studyPassword = '' } = data
    let payload = {}
    if (label === '스터디명') {
      // create
      payload = { studyName, studyPassword }
    } else {
      // join
      payload = { studyId: studyCode, studyPassword }
    }
    console.log(payload)
    try {
      let studyId = ''
      !!(label === '스터디명')
        ? await postNewStudy(userId, { ...payload } as any).then(r => {
          studyId = r?.studyId || ''
        })
        : await joinStudy(userId, { ...payload } as any).then(r => {
          studyId = r?.studyId || studyCode
        })
      if (!!studyId) {
        dialogClose(dialogId)
        navigate(`/study/${studyId}/dashboard`)
      } else {
        dialogOpen({
          title: !!(label === '스터디명') ? '스터디 생성 실패' : '스터디 참여 실패',
          message: !!(label === '스터디명') ? '스터디 생성 실패' : '스터디 참여 실패',
          id: 'study-fail-dialog',
        })
      }
    } catch (error) {
      dialogOpen({
        title: !!(label === '스터디명') ? '스터디 생성 실패' : '스터디 참여 실패',
        message: !!(label === '스터디명') ? '스터디 생성 실패' : '스터디 참여 실패',
        id: 'study-fail-dialog',
      })
      throw error
    }
  }
  return (
    <div className="relative">
      <DialogHeader message={title} dialogId={dialogId} />
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {label}
        </Typography>
        <FormTextField
          fullWidth
          form={form}
          name={label === '스터디명' ? 'studyName' : 'studyCode'}
          helperText={label === '스터디명' ? '*스터디는 최대 1년간 진행됩니다.' : ''}
        />

        <Typography variant="body1" sx={{ mt: 5, mb: 2 }}>
          참여 비밀번호
        </Typography>
        <FormTextField
          form={form}
          name="studyPassword"
          formTrigger="change"
          fullWidth
          type={label === '스터디명' ? 'text' : 'password'}
          helperText={label === '스터디명' ? '*비밀번호 분실 시 복구 불가합니다.' : '*스터디 모집이 마감 되었습니다. 스터디장에게 문의해주세요'}
        />
      </DialogContent>
      <DialogActions sx={{ p: 0 }}>
        <Button
          variant="outlined"
          onClick={() => {
            dialogClose(dialogId);
          }}
          sx={{ width: "101px", height: "52px" }}
        >
          <Typography variant="body1">취소</Typography>
        </Button>
        <Button variant="contained" sx={{ width: "101px", height: "52px" }}
          onClick={handleSubmit(onSubmit)}
        >
          <Typography variant="body1">확인</Typography>
        </Button>
      </DialogActions>
    </div>
  );
};

export default StudyDialog;
