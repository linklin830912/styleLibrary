import type { Meta, StoryObj } from "@storybook/react";
import HorizontalPaging from "../../components/formattings/pagings/HorizontalPaging";
import MockPagingContent from "./MockPagingContent";
import StatusType from "../../components/generals/enums/StatusType";

const meta = {
  title: "Pagings/horizontal-paging",
  component: HorizontalPaging,
} satisfies Meta<typeof HorizontalPaging>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultLeft: 250,
    defaultRight: 150,
    status: StatusType.basic,
    left: MockPagingContent({ width: "100%" }),
    mid: MockPagingContent({ width: "100%" }),
    right: MockPagingContent({ width: "100%" }),
  },
  argTypes: {
    status: {
      control: "select",
      options: Object.keys(StatusType),
    },
  },
};
