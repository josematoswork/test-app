import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { TextInputComponent } from '../../my-library/src/lib/components/text-input/text-input.component';
import { TextInputModule } from '../../my-library/src/lib/modules';

export default {
  component: TextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TextInputModule],
    }),
  ],
  title: 'Design System/Atoms/Text Input',
} as Meta;

const Template: Story = args => ({
  props: { ...args },
});

export const Default = Template.bind({});
Default.args = {
  labelText: 'example label',
  value: '',
  placeholder: 'Placeholder text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: '',
  labelText: 'Disabled',
  placeholder: 'Placeholder text',
  isDisabled: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  value: '',
  placeholder: 'Placeholder text',
};

export const HelperText = Template.bind({});
HelperText.args = {
  value: '',
  labelText: 'Example label',
  placeholder: 'Placeholder text',
  helperText: 'Optional helper text',
};

export const LabelHelperText = Template.bind({});
LabelHelperText.args = {
  value: '',
  labelText: 'example label',
  placeholder: 'Placeholder text',
  labelHelperText: 'Optional label helper text',
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'some initial text',
  labelText: 'Example label',
  placeholder: 'Placeholder text',
};
