"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

export default function Example() {
 return (
   <TabGroup manual defaultIndex={2}>
     <TabList>
       <Tab>Tab 1</Tab>
       <Tab>Tab 2</Tab>
       <Tab>Tab 3</Tab>
     </TabList>
     <TabPanels>
       <TabPanel>Content 1</TabPanel>
       <TabPanel>Content 2</TabPanel>
       <TabPanel>Content 3</TabPanel>
     </TabPanels>
   </TabGroup>
 );
}
