import type { Meta, StoryObj } from "@storybook/react";
import MockPagingContent from "./MockPagingContent";
import StatusType from "../../components/enums/StatusType";
import VerticalPaging from "../../components/styles/pagings/VerticalPaging";

const meta = {
  title: "Pagings/vertical-paging",
  component: VerticalPaging,
} satisfies Meta<typeof VerticalPaging>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultTop: 250,
    defaultBottom: 150,
    status: StatusType.basic,
    top: MockPagingContent({ height: "100%" }),
    mid: MockPagingContent({ height: "100%" }),
    bottom: MockPagingContent({ height: "100%" }),
  },
  argTypes: {
    status: {
      control: "select",
      options: Object.keys(StatusType),
    },
  },
};
