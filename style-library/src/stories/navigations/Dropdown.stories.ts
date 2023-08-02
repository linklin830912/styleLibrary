import { Meta, StoryObj } from "@storybook/react";
import Dropdowm from "../../components/styles/navigations/Dropdown";
import HeaderType from "../../components/enums/HeaderType";
import StatusType from "../../components/enums/StatusType";

const meta = {
  title: "Navigations/dropdown",
  component: Dropdowm,
} satisfies Meta<typeof Dropdowm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultOption: "select flavor",
    options: ["vanilla", "chocolate", "mocha", "coffee", "mint-chocolate"],
    size: HeaderType.h4,
    status: StatusType.basic,
    onValueChange: (value: string) => {
      console.log(value);
    },
  },
};
