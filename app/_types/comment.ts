export interface CommentList {
  data: CommentType[];
}

export interface CommentType {
  commentNo: number;
  commentContent: string;
  commentDate: string;
  memberId: string;
  codeNo: number;
}

export interface CommentRequestBody {
  commentContent: string;
}
