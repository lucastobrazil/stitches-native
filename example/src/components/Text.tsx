import { styled } from '@vitality-ds/system-rn';

export const Text = styled('Text', {
  color: '$primary12',
  fontSize: "$pageTitle",
  variants: {
    color: {
      primary: {
        color: "$primary9"
      }
    }
  }
});
