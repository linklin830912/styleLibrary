import type { Meta, StoryObj } from "@storybook/react";
import PressButton from "../../components/styles/buttons/PressButton";
import StatusType from "../../components/enums/StatusType";
import HeaderType from "../../components/enums/HeaderType";
const meta = {
  title: "Buttons/press-button",
  component: PressButton,
} satisfies Meta<typeof PressButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Press Button",
    isRoundCornered: true,
    isStretch: true,
    isOffset: true,
    isSub: false,
    status: StatusType.main,
    size: HeaderType.h4,
  },
  argTypes: {
    status: {
      control: "select",
      options: Object.keys(StatusType),
    },
    size: {
      control: "select",
      options: Object.keys(HeaderType),
    },
  },
};
