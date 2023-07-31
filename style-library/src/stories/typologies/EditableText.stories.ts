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
    defaultValue: `dkfhekhv; dkglfgh ;jdglshlgh djglsdhgh dlsljl kg djlkshgl f;kjgwhglk dlkjgsno i gusougo dif yrgrdg fdgd rtrt rtvrev yyfns oi dyguseeiuf dkfhekhv; dkg lfgh ;jdglshlgh djgl sdhgh dlsljlkgdjlk shgl f;kjgwhglk f yrgrdg fdgd rtrt rtvrev yyfns   dlkj gsnoigusougo difyrgr dg fdgdr trt 'rtvrevyyf n soi dyguseeiuf dkfhekhv;  dkglfgh ;jdglshlgh dj glsd hgh dlsljlkgdjlkshg f;kjghglk  dl kjgs noigu sou go difyrg rdgf dgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv`,
  },
};
