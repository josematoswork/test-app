import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TextInputComponent } from '../../../my-library/src/lib/components/text-input/text-input.component';
import { TextInputModule } from '../../../my-library/src/lib/modules';

export default {
  component: TextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TextInputModule],
    }),
  ],
  title: 'Design System/Atoms/Text Input',
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onClear: { action: 'cleared' },
  },
} as Meta;

const Template: Story = args => ({
  props: { ...args, onChange: action('changed'), onClear: action('cleared') },
});

export const Default = Template.bind({});
Default.args = {
  labelText: 'example label',
  placeholder: 'Placeholder text',
  type: 'text',
  isDisabled: false,
  isReadOnly: false,
  isLoading: false,
  showClearButton: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  labelText: 'Disabled',
  placeholder: 'Placeholder text',
  isDisabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  labelText: 'Read Only',
  placeholder: 'Placeholder text',
  isReadOnly: true,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  labelText: 'Loading',
  placeholder: 'Placeholder text',
  isLoading: true,
};

export const ClearButton = Template.bind({});
ClearButton.args = {
  labelText: 'With Clear Button',
  placeholder: 'Placeholder text',
  showClearButton: true,
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  labelText: 'Password',
  placeholder: 'Enter password',
  type: 'password',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  placeholder: 'Placeholder text',
};

export const HelperText = Template.bind({});
HelperText.args = {
  labelText: 'Example label',
  placeholder: 'Placeholder text',
  helperText: 'Optional helper text',
};

export const LabelHelperText = Template.bind({});
LabelHelperText.args = {
  labelText: 'example label',
  placeholder: 'Placeholder text',
  labelHelperText: 'Optional label helper text',
};

export const WithValue = Template.bind({});
WithValue.args = {
  labelText: 'Example label',
  placeholder: 'Placeholder text',
  value: 'some initial text',
};
