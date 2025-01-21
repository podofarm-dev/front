import React from 'react';

import { useStore } from 'zustand';
import store, { DialogInitOptions, DialogOptions } from './dialogStore';

import BasicDialog from "./BasicDialog";

export const DialogContainer = () => {
    const { dialogList } = useStore(store);

    return (
        (
            <>
                {dialogList.map((item, index) => {
                    return (
                        <BasicDialog key={item?.id || index} {...item} />
                    )
                })}
            </>
        )
    )
}



export const dialogInit = (options: DialogInitOptions) => {
    try {
        const { init } = store.getState();

        init(options);
    } catch (e) {
        throw e;
    }
}

export const dialogOpen = (option: DialogOptions) => {
    try {
        const { modalOpen, dialogConfig } = store.getState();

        const nProps = Object.assign({}, dialogConfig, option);

        return modalOpen(nProps);
    } catch (e) {
        throw e;
    }
}

export const dialogClose = (id?: string | undefined) => {
    const { modalClose } = store.getState();

    if (modalClose) modalClose(id);
}

export const dialogClear = () => {
    const { clearModal } = store.getState();

    if (clearModal) clearModal();
}

const MuiDialog = {
    init: dialogInit,
    open: dialogOpen,
    close: dialogClose,
    clear: dialogClear,
    DialogContainer,
}

export default MuiDialog;