import type { Meta, StoryObj } from "@storybook/react";
import StatusType from "../../components/enums/StatusType";
import EditableText from "../../components/styles/typologies/EditableText";
import HeaderType from "../../components/enums/HeaderType";

const meta = {
  title: "Typologies/editable-text",
  component: EditableText,
} satisfies Meta<typeof EditableText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    status: StatusType.main,
    size: HeaderType.h4,
    limitTextCount: 1000,
    defaultValue: `dgdtvrevyyfnsoidyguseeiufdkfhekhrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhrtrt rtvrevyyfnsoidyguseeiufdkfhekhrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvv`,
  },
};
