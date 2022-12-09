// YourComponent.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainCard from "../app/MainCard";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/MainCard",
  component: MainCard,
  args: {
    topTitle: "Front-end",
    mainTitle: "Valtech_",
    message:
      "Complexity, uncertainty and rapid technological change have transformed the business landscape. Historical performance is an unreliable indicator of future success and the way we connect to each other matters. The way we learn matters.",
    buttonText: "Explore More",
    imageUrl:
      "https://fqgiwjnywbpxoliwncof.supabase.co/storage/v1/object/public/valtech/others/asdasd%20(2).png",
  },
} as ComponentMeta<typeof MainCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MainCard> = (args) => (
  <MainCard {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
