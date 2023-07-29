import type { Meta, StoryObj } from "@storybook/react";
import PressButton from "../../components/formattings/buttons/PressButton";
import HeaderType from "../../components/generals/enums/HeaderType";
import StatusType from "../../components/generals/enums/StatusType";

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
