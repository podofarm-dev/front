import React, { useState } from 'react';
import {
    Button, ButtonProps,
    IconButton, FabProps,
    CircularProgress, Fab,
} from '@mui/material';

import './LoadingButton.scoped.scss';

interface LoadingButtonProps extends ButtonProps {
    isLoading?: boolean,
    // isIcon?: boolean,
    buttonType?: 'button' | 'icon' | 'fab',
}

export const LoadingButton = ({ isLoading = false, buttonType = 'button', ...props }: LoadingButtonProps) => {
    const Component = (props: ButtonProps) => {
        switch (buttonType) {
            case 'icon': return <IconButton {...props} />;
            case 'fab': return <Fab {...props as FabProps} sx={{
                '&.MuiFab-root.Mui-disabled': {
                    backgroundColor: 'var(--v-palette-common-background, #eee)',
                },
                ...props?.sx || {}
            }} />; // Todo: FabProps 와 ButtonProps 상호 비호환 문제 향후 fix 필요
            default: return <Button {...props} sx={{
                '&.MuiButton-sizeMedium': {
                    fontSize: 'var(--v-theme-typography-button-size, 0.875rem)'
                },
                ...props?.sx || {}
            }} />;
        }
    }

    return (
        <Component {...props} disabled={isLoading || props?.disabled} className={isLoading ? 'mui-loading-button is-loading' : 'mui-loading-button'}>
            <div className={'mui-loading-button__spinner-wrapper'}>
                {isLoading && (<CircularProgress size={props?.size} sx={{
                    color: 'var(--v-palette-text-disabled, rgba(0,0,0,1))',
                }} />)}
            </div>
            {/*<div className={'mui-loading-button__content-wrapper'}>{props.children}</div>*/}
            {props.children}
        </Component>
    )
}