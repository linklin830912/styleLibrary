import type { Meta, StoryObj } from "@storybook/react";
import HeaderType from "../../components/generals/enums/HeaderType";
import BorderButton from "../../components/formattings/buttons/BorderButton";
import StatusType from "../../components/generals/enums/StatusType";

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
