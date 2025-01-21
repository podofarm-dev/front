import { ModalComponentsPropsOverrides, DialogProps, InternalStandardProps, ButtonProps } from '@mui/material';
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ReactElement } from "react";
import { generateUUIDv4 } from '@/utils/uuid';
import { create } from 'zustand';

interface DialogAction {
    label: string | ReactJSXElement;
    action: Function;
    isActiveAfterAction?: boolean;
    buttonProps?: ButtonProps;
}

export interface DialogOptions extends InternalStandardProps<DialogProps, 'open'> {
    id: string;
    title?: string;
    message?: string;
    onExited?: (arg: any) => void | undefined;
    onConfirmed?: (arg: any) => void;
    confirmText?: string;
    closeText?: string;
    confirmButtonProps?: ButtonProps;
    closeButtonProps?: ButtonProps;
    actions?: DialogAction[] | undefined;
    innerElement?: ReactElement | undefined;
    isAllowHtml?: boolean;
    persistent?: boolean;
}

export type DialogInitOptions = InternalStandardProps<DialogProps, 'open'> & {
    confirmText?: string;
    closeText?: string;
    ButtonProps?: ButtonProps;
    closeButtonProps?: ButtonProps;
    confirmButtonProps?: ButtonProps;
}

export interface DialogObject extends DialogOptions {
    id: string;
    status: boolean;
}

interface ModalStore {
    dialogConfig: ModalComponentsPropsOverrides;
    dialogList: DialogObject[];
    init: (options: InternalStandardProps<DialogProps, 'open'>) => void;
    modalClose: (id?: string) => void;
    modalOpen: Function;
    removeModal: (id: string) => void;
    clearModal: () => void;
}

const initialConfig: DialogInitOptions = {
    fullWidth: true,
    confirmText: 'confirm',
    confirmButtonProps: {},
    closeText: 'dismiss',
    closeButtonProps: {},
    ButtonProps: {},
}



const dialogStore = create<ModalStore>()((set, getState) => ({
    dialogConfig: initialConfig,
    dialogList: [],

    init(options) {
        set((state) => {
            const baseConfig = { ...state.dialogConfig }
            const config = Object.assign({}, baseConfig, options);

            return {
                dialogConfig: config,
            }
        })
    },

    modalOpen(option: DialogOptions) {
        set((state) => {
            const nList: DialogObject[] = [...state.dialogList];

            nList.push({
                // id: option.id,
                status: true,
                ...option
            });

            console.log('nList', nList)

            return ({
                dialogList: nList,
            })
        })

        const dialogs = getState().dialogList;
        return dialogs[dialogs.length - 1];
    },

    modalClose(id?: string) {
        try {
            set(state => {
                const nList: DialogObject[] = [...state.dialogList];

                const filtered = id ? nList.filter(o => {
                    return o.id === id;
                }) : [nList[nList.length - 1]];

                filtered.forEach(item => {
                    item.status = false;
                })

                return ({
                    dialogList: nList,
                })
            })
        } catch (e) {
            console.error(e);
        }
    },

    removeModal(id: string) {
        set((state) => {
            const nList: DialogObject[] = [...state.dialogList];

            const filtered = nList.filter(item => {
                return item.id !== id;
            })

            return ({
                dialogList: filtered,
            });
        })
    },

    clearModal() {
        set(state => ({
            dialogList: [],
        }))
    }
}))

const { getState, setState, subscribe } = dialogStore;

export default dialogStore;
