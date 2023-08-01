import { Meta, StoryObj } from "@storybook/react";
import ShowMoreText from "../../components/styles/typologies/ShowMoreText";
import HeaderType from "../../components/enums/HeaderType";
import StatusType from "../../components/enums/StatusType";

const meta = {
  title: "Typologies/show-more-text",
  component: ShowMoreText,
} satisfies Meta<typeof ShowMoreText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: HeaderType.h4,
    status: StatusType.basic,
    value: `dgdtvrevyyfnsoidyguseeiufdkfhekhrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhrtrt rtvrevyyfnsoidyguseeiufdkfhekhrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvrtvrevyyfnsoidyguseeiufdkfhekhvv`,
    limitTextCount: 100,
  },
};
