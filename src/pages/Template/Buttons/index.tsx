import StudyDialog from "@/dialogs/StudyDialog";
import { dialogClose, dialogOpen } from "@/modules/MuiDialog";
import { Button } from "@mui/material";

const ButtonDemos = () => {
  return (
    <>
      <div>Buttons</div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Button
          variant="contained"
          onClick={() => {
            dialogOpen({
              innerElement: <>dialog</>,
              id: "dialog-test-id",
            });
          }}
        >
          Dialog Test
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dialogOpen({
              title: "title",
              message: "message",
              id: "dialog-test-id2",
            });
          }}
        >
          Dialog Test
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dialogOpen({
              id: "study-create-dialog",
              innerElement: (
                <StudyDialog
                  title="스터디 생성하기"
                  label="스터디명"
                  dialogId="study-create-dialog"
                />
              ),
            });
          }}
        >
          Dialog Test
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dialogOpen({
              id: "study-search-dialog",
              innerElement: (
                <StudyDialog
                  title="스터디 검색하기"
                  label="스터디 코드"
                  dialogId="study-search-dialog"
                />
              ),
            });
          }}
        >
          Dialog Test
        </Button>
      </div>
    </>
  );
};
export default ButtonDemos;
