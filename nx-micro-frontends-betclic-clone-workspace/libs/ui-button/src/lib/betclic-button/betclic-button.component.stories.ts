import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BetclicButtonComponent } from './betclic-button.component';

export default {
  title: 'BetclicButtonComponent',
  component: BetclicButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<BetclicButtonComponent>;

// const Template: Story<BetclicButtonComponent> = (args: BetclicButtonComponent) => ({
//   component: BetclicButtonComponent,
//   props: args,
// });

const Template: Story<BetclicButtonComponent> = (args: BetclicButtonComponent) => ({
  props: args,
  template: `
  <div style="width: 250px;">
      <nx-micro-frontends-betclic-clone-workspace-betclic-button 
      [name]="'test'"
      [isActive]="false"
      [isPrimary]="true"
      [isMedium]="true"
      >
      Test
      </nx-micro-frontends-betclic-clone-workspace-betclic-button>
  </div>
  `,
});


export const Primary = Template.bind({});
Primary.args = {
  name: '',
  isActive: false,
  isPrimary: false,
  isSecondary: false,
  isTertiary: false,
  isQuaternary: false,
  isLarge: false,
  isMedium: false,
  isSmall: false,
}