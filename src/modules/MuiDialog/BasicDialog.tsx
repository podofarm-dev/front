import { useEffect, useMemo, useState } from "react";
import { useStore } from "zustand";
import dialogStore from "./dialogStore";
import { generateUUIDv4 } from "@/utils/uuid";
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import { LoadingButton } from "@/components/LoadingButton";
import { Clear } from "@mui/icons-material";
import { dialogClose } from ".";

interface Props {
    dialogId: string;
    title?: string;
    message?: string;
    status?: boolean;
    isAllowHtml?: boolean;
}
const BasicDialog = ({
    id = '', title = '',
    message = '', status = true,
    isAllowHtml = false,
    ...props
}) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isWaitClose, setIsWaitClose] = useState(false);
    const [isWaitConfirm, setIsWaitConfirm] = useState(false);
    const [actionStatus, setActionStatus] = useState({});

    const { removeModal, dialogConfig } = useStore(dialogStore);
    const {
        onClose = () => { }, onExited, onConfirmed, actions, component, confirmText, closeText, innerElement,
        ButtonProps, closeButtonProps, confirmButtonProps, persistent = false,
        ...modalProps
    } = props;
    const initButtonProps = ButtonProps || {};

    useEffect(() => {
        setIsModalOpen(status)
    }, [status])

    useEffect(() => {
        const isActionLoaded = Object.values(actionStatus).findIndex(o => !!o) >= 0;

        setIsLoading(isWaitConfirm || isWaitClose || isActionLoaded);
    }, [isWaitConfirm, isWaitClose, actionStatus])

    const getActionLoading = (id: string) => {
        const status: Record<string, any> = actionStatus;
        return status[id] ? status[id] : false;
    }
    const setActionLoading = (id: string, value: boolean) => {
        const status: Record<string, any> = { ...actionStatus };

        status[id] = value;
        setActionStatus(status);
    }

    const computedActions = useMemo(() => {
        if (!actions) return [];

        let nActions = [...actions];
        nActions.forEach(item => {
            item.id = generateUUIDv4();
        })
        return nActions;
    }, [actions])

    const computedProps = useMemo(() => {
        // return Object.assign({}, dialogConfig, modalProps);
        return modalProps;
    }, [modalProps, dialogConfig])

    const handleExit = async (ev?: any) => {
        try {
            if (!onExited) return ev;

            return await onExited();
        } catch (e) {
            throw e;
        } finally {
            removeModal(id);
        }
    }


    const handleConfirm = async (ev?: any) => {
        setIsWaitConfirm(true);
        try {
            let result;
            if (onConfirmed) {
                result = await onConfirmed();
            }

            setIsModalOpen(false);
            return onConfirmed ? result : false;
        } catch (e) {
            throw e;
        } finally {
            setIsWaitConfirm(false);
        }
    }

    const handleClose = async (ev?: any) => {
        setIsWaitClose(true);
        try {
            let result;
            if (onClose) {
                result = await onClose();
            }

            setIsModalOpen(false);
            return onClose ? result : false;
        } catch (e) {
            throw e;
        } finally {
            setIsWaitClose(false);
        }
    }

    const TransitionProps = Object.assign({}, modalProps?.TransitionProps || {}, {
        onExited: handleExit
    });

    const actionType = (computedActions?.length ? 'custom' : undefined) || (onConfirmed ? 'confirm' : undefined) || 'alert';
    const AlertAction = () => <LoadingButton variant="outlined" onClick={handleClose} isLoading={isWaitClose} disabled={isLoading} {...Object.assign({}, initButtonProps, closeButtonProps || {})}>{closeText || 'dismiss'}</LoadingButton>;
    const ConfirmAction = () => (<>
        <LoadingButton variant="outlined" size="large" onClick={handleClose} isLoading={isWaitClose} disabled={isLoading} {...Object.assign({}, initButtonProps, closeButtonProps || {})}>{closeText || 'dismiss'}</LoadingButton>
        <LoadingButton variant="contained" size="large" onClick={handleConfirm} isLoading={isWaitConfirm} disabled={isLoading} {...Object.assign({}, initButtonProps, confirmButtonProps || {})}>{confirmText || 'submit'}</LoadingButton>
    </>)
    const CustomAction = () => (<>
        {computedActions.map((action: any, idx: number) => {
            const { buttonProps } = action;
            return (
                <LoadingButton variant="outlined" key={action?.id || idx} isLoading={getActionLoading(action?.id || idx)} disabled={isLoading} onClick={async () => {
                    setActionLoading(action?.id || idx, true)
                    try {
                        const result = await action.action();
                        if (!action?.isActiveAfterAction) setIsModalOpen(false);

                        return result;
                    } catch (e) {
                        console.error(e);
                    } finally {
                        setActionLoading(action?.id || idx, false)
                    }
                }} {...Object.assign({}, initButtonProps, action?.buttonProps || {})}>
                    {action?.label}
                </LoadingButton>
            )
        })}
    </>)

    return (
        <Dialog open={isModalOpen}
            onClose={!persistent ? handleClose : onClose}
            PaperProps={{
                sx: {
                    borderRadius: '24px',
                    p: 2,
                    m: 0,
                    bgcolor: '#111119',
                    backgroundColor: '#111119'
                }
            }}
            TransitionProps={TransitionProps}
            {...computedProps}>
            {innerElement ? innerElement : (
                <div className="relative">
                    <Box className="absolute" sx={{ top: '5px', right: '5px' }}>
                        <IconButton onClick={() => {
                            dialogClose(id)
                        }}>
                            <Clear />
                        </IconButton>
                    </Box>
                    {!!title && <DialogTitle textAlign={'center'}>{title}</DialogTitle>}
                    <DialogContent>
                        <DialogContentText textAlign={'center'}>
                            {isAllowHtml ? <div dangerouslySetInnerHTML={{ __html: message }} /> : message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {
                            {
                                'custom': <CustomAction />,
                                'confirm': <ConfirmAction />,
                                'alert': <AlertAction />
                            }[actionType]
                        }
                    </DialogActions>
                </div>
            )}
        </Dialog>
    )
}
export default BasicDialog