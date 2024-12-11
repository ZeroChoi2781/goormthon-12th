import { toast } from '@goorm-dev/vapor-components';

const useCopyTokenWithToast = (value: string) => {
    const token = `var(--${value})`;

    const onToast = async () => {
        try {
            await navigator.clipboard.writeText(token);
            toast('token 값을 복사했습니다 :)', {
                type: 'primary',
            });
        } catch (e) {
            toast('token 값 복사에 실패했습니다 :(', {
                type: 'danger',
            });
        }
    };

    return onToast;
};

export default useCopyTokenWithToast;
