import type { Meta, StoryObj } from "@storybook/react";

import Home from "@/pages/index.page";

const meta = {
  component: Home,
  tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
