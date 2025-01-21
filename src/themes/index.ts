import defaultTheme from "./defaultTheme";
import redTheme from "./redTheme";
import greenTheme from "./greenTheme";
import userStore from "@/store/userStore";
// 이 파일에서는 테마 별 theme을 조정 후 export 하여 main.tsx 파일에서 적용한다.
const current = userStore.getState()?.userTheme  
export const primaryColor = {
    red: '#ff3f3f',
    green: '#1fc62a',
    default: '#015eff'
}
export const currentColor = current === 'red'
    ? primaryColor.red
    : current === 'green'
        ? primaryColor.green
        : primaryColor.default
const currentTheme = current === 'red'
    ? redTheme
    : current === 'green'
        ? greenTheme
        : defaultTheme

export default currentTheme