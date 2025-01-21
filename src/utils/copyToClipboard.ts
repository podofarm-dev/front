export const copyToClipboard = async (value: any, successText?: string, errorText?: string) => {
    try {
        if (typeof value !== 'string') {
            throw ''
        }
        await navigator.clipboard.writeText(value);
    } catch (error) {
        console.error('클립보드 복사 실패:', error);
    }
};