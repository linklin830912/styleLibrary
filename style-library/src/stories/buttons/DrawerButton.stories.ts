import type { Meta, StoryObj } from "@storybook/react";
import DrawerButton from "../../components/formattings/buttons/DrawerButton";

const meta: Meta<typeof DrawerButton> = {
  component: DrawerButton,
  title: "Buttons/drawerbutton",
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {},
};
