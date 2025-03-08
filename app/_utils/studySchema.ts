import * as yup from 'yup';

export const studySchema = yup.object().shape({
  studyTitle: yup.string().when('$studyLabel', {
    is: (studyLabel: string) => studyLabel === '스터디명',
    then: (schema) =>
      schema
        .required('스터디명을 입력해 주세요.')
        .max(20, '스터디명은 최대 20자까지 입력 가능합니다.'),
    otherwise: (schema) => schema.optional(),
  }),

  studyCode: yup.string().when('$studyLabel', {
    is: (studyLabel: string) => studyLabel === '스터디 코드',
    then: (schema) =>
      schema
        .required('스터디 코드를 입력해 주세요.')
        .max(5, '스터디 코드는 최대 5자까지 입력 가능합니다.'),
    otherwise: (schema) => schema.optional(),
  }),

  password: yup
    .string()
    .required('비밀번호는 필수입니다')
    .min(1, '비밀번호는 6글자 이내여야 합니다')
    .max(6, '비밀번호는 6글자 이내여야 합니다')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,6}$/,
      '알파벳과 숫자를 최소 1개씩 포함해야 합니다',
    ),
});
