import { BaseTextFieldProps, Box, InputProps, TextField, Typography } from "@mui/material"
import { get } from 'lodash';
import { forwardRef, useEffect } from "react"
import { UseFormReturn } from "react-hook-form";

export interface Props extends BaseTextFieldProps {
    name: string,
    form: UseFormReturn,
    // rules?: Omit<
    //     RegisterOptions,
    //     "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    // >,

    rules?: ((value: any, formValues?: any) => string | true)[],
    // rules?: Function[],

    validator?: (value: any, formValues?: any) => string | true;

    formTrigger?: 'change' | 'blur',
    onChange?: Function,
    onBlur?: (value: any, event?: Event) => void | {},
    InputProps?: InputProps,
    counter?: number,
    isDisplayCharacterCount?: boolean,
}


const FormTextField = forwardRef(({
    form, name, rules = [], formTrigger,
    onChange, validator = (v: any) => true, helperText,
    isDisplayCharacterCount, counter, ...props
}: Props, ref: any) => {
    const {
        register, watch,
        control, formState: {
            errors, isValid, isValidating,
            isLoading, isSubmitting, isSubmitted, isDirty
        }, trigger, getValues, setValue, resetField
    } = form;
    const valueAsOptions = props.type === 'number' ? {
        valueAsNumber: true,
    } : (props.type === 'date' || props?.type === 'datetime-local' ? {
        valuesAsDate: true,
    } : {})
    const formValue = watch(name);

    const counterFormatter = () => {
        const value = getValues(name) || props.defaultValue || '';
        const currentLength = value.length || 0;

        if (!!counter) {
            return `${currentLength}/${counter}`
        } else {
            return `${currentLength}`
        }
    }
    useEffect(() => {
        // console.log('get', getValues(name))
        if (!isDirty) {
            const emptyValue = props?.type === 'number' ? 0 : '';
            // setValue(name, props.defaultValue || emptyValue);
            resetField(name, {
                defaultValue: props.defaultValue || getValues(name) || emptyValue,
            })
        }
    }, [props.defaultValue])
    return (
        <TextField
            error={!!get(errors, name)}
            helperText={(
                <Box component={'span'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography component={'span'} variant={'caption'} sx={{
                        // color: !!props?.color ? `var(--v-palette-${props.color}-main)` : 'inherit',
                        color: (!get(errors, name) && !!props?.color) ? `var(--v-palette-${props.color}-main)` : 'inherit',
                        mt: 1
                    }}>
                        {!!get(errors, name) ? (get(errors, name)?.message as string || 'some error') : helperText}
                    </Typography>
                    {(isDisplayCharacterCount || counter) && (
                        <Box component={'span'} sx={{ ml: 1 }}>{counterFormatter()}</Box>
                    )}
                </Box>
            )}
            InputProps={{ sx: { borderRadius: '12px' } }}
            value={formValue || ''}
            {...props}
            {...register(name, {
                onChange: async (event) => {
                    try {
                        const result = (formTrigger === 'change' || !!get(errors, name)) && await trigger(name);
                        const value = getValues(name);

                        if (!!onChange) await onChange(value, event);
                    } catch (e) {
                        console.error(e);
                    }
                },
                onBlur: async (event) => {
                    try {
                        const result = (formTrigger === 'blur' && !isValid) && await trigger(name);
                        const value = getValues(name);

                        if (!!props?.onBlur) await props.onBlur(value, event);
                    } catch (e) {
                        console.error(e);
                    }
                },
                // valueAsDate: (props.type === 'date' || props.type === 'datetime-local') && props.type !== 'number',
                validate: async (value, formValues) => {
                    try {
                        const results: string[] = [];

                        rules.forEach(f => {
                            if (f(value, formValues) !== true) results.push(f(value, formValues) as string);
                        })

                        return results?.length ? results[0] : validator(value, formValues);
                    } catch (e: any) {
                        console.error(e);
                        return e?.message || 'Some Error!';
                    }
                },
                ...valueAsOptions,
            })} inputRef={ref}
        />
    )
})
export default FormTextField