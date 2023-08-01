import { Meta, StoryObj } from "@storybook/react";
import DuplicateText from "../../components/styles/typologies/DuplicateText";
import HeaderType from "../../components/enums/HeaderType";
import StatusType from "../../components/enums/StatusType";

const meta = {
  title: "Typologies/duplicate-text",
  component: DuplicateText,
} satisfies Meta<typeof DuplicateText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "https://copy.@example.com",
    size: HeaderType.h4,
    status: StatusType.basic,
  },
  argTypes: {},
};
