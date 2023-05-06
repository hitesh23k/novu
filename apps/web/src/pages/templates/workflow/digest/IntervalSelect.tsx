import { DigestUnitEnum } from '@novu/shared';
import { Controller } from 'react-hook-form';
import { Select } from '../../../../design-system';
import { inputStyles } from '../../../../design-system/config/inputs.styles';

const options = [
  { value: DigestUnitEnum.SECONDS, label: 'sec (s)' },
  { value: DigestUnitEnum.MINUTES, label: 'min (s)' },
  { value: DigestUnitEnum.HOURS, label: 'hour (s)' },
  { value: DigestUnitEnum.DAYS, label: 'day (s)' },
];

export const IntervalSelect = ({ control, name, showErrors, readonly, testId = 'time-unit' }) => {
  return (
    <Controller
      control={control}
      name={name}
      shouldUnregister
      render={({ field, fieldState }) => {
        return (
          <Select
            rightSectionWidth={20}
            disabled={readonly}
            data={options}
            dataTestId={testId}
            error={showErrors && fieldState.error?.message}
            inputProps={{
              styles: (theme) => ({
                ...inputStyles,
                input: {
                  ...inputStyles(theme).input,
                  margin: 0,
                  minHeight: '30px',
                  height: 30,
                  lineHeight: '32px',
                },
              }),
            }}
            {...field}
          />
        );
      }}
    />
  );
};
