export interface StudyData {
  code: string;
  name: string;
  startDate: string;
  endDate: string;
}

export interface StudyEnterData {
  message: string;
}

export interface StudyCreateBody {
  name: string;
  password: string;
}

export interface StudyEnterBody {
  code: string;
  password: string;
}
