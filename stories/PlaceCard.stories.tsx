// YourComponent.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import PlaceCard from "../app/PlaceCard";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/PlaceCard",
  component: PlaceCard,
  args: {
    topTitle: "Brazil",
    mainTitle: "Brasilia",
    message:
      "Complexity, uncertainty and rapid technological change have transformed the business landscape. Historical performance is an unreliable indicator of future success and the way we connect to each other matters. The way we learn matters.",
    buttonText: "Explore More",
    imageUrl:"https://fqgiwjnywbpxoliwncof.supabase.co/storage/v1/object/public/valtech/placesImages/Capital-of-Brazil-Brasilia-Cathedral.jpg",
  },
} as ComponentMeta<typeof PlaceCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PlaceCard> = (args) => (
  <PlaceCard {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
