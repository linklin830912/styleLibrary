import type { Meta, StoryObj } from "@storybook/react";
import BorderButton from "../../components/styles/buttons/BorderButton";
import StatusType from "../../components/enums/StatusType";
import HeaderType from "../../components/enums/HeaderType";

const meta = {
  title: "Buttons/border-button",
  component: BorderButton,
} satisfies Meta<typeof BorderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Border Button",
    isRoundCornered: true,
    isSub: false,
    isStretch: true,
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
