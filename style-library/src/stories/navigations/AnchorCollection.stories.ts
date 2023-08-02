import { Meta, StoryObj } from "@storybook/react";
import AnchorCollection from "../../components/styles/navigations/AnchorCollection";
import HeaderType from "../../components/enums/HeaderType";
import StatusType from "../../components/enums/StatusType";

const meta = {
  title: "Navigations/anchor-collection",
  component: AnchorCollection,
} satisfies Meta<typeof AnchorCollection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    referenceBranch: [
      {
        title: "anchor0",
        href: "anchorRef0_1",
        children: [
          { title: "fish2", href: "fishRef2_2" },
          { title: "fish3", href: "fishRef3_3" },
          { title: "fish4", href: "fishRef4_4" },
        ],
      },
      {
        title: "anchor1",
        href: "anchorRef1",
        children: [
          { title: "fish5", href: "fishRef5_5" },
          { title: "fish6", href: "fishRef6_6" },
          { title: "fish7", href: "fishRef7_7" },
          {
            title: "bigfish8",
            href: "bigfishRef8",
            children: [
              { title: "fish2", href: "fishRef2_8" },
              { title: "fish3", href: "fishRef3_9" },
              { title: "fish4", href: "fishRef4_10" },
            ],
          },
          {
            title: "fish9",
            href: "fishRef9",
            children: [
              { title: "fish2", href: "fishRef2_11" },
              { title: "fish3", href: "fishRef3_12" },
              { title: "fish4", href: "fishRef4_13" },
              { title: "fish5", href: "fishRef5_14" },
              { title: "fish6", href: "fishRef6_15" },
            ],
          },
        ],
      },
      {
        title: "anchor2",
        href: "anchorRef2",
        children: [
          { title: "fish10", href: "fishRef10_16" },
          { title: "fish11", href: "fishRef11_17" },
          {
            title: "bigfish13",
            href: "bigfishRef13",
            children: [{ title: "fish2", href: "fishRef2_18" }],
          },
          {
            title: "bigfish14",
            href: "bigfishRef14",
            children: [
              { title: "fish2", href: "fishRef2_19" },
              { title: "fish3", href: "fishRef3_20" },
              { title: "fish4", href: "fishRef4_21" },
            ],
          },
        ],
      },
      {
        title: "anchor3",
        href: "anchorRef3",
        children: [
          { title: "fish0", href: "fishRef0_22" },
          { title: "fish1", href: "fishRef1_23" },
        ],
      },
    ],
    size: HeaderType.h4,
    status: StatusType.basic,
  },
};
