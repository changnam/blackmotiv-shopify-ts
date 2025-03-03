import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function Example() {
  return (
    <TabGroup>
      <TabList>
        <Tab className="data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:underline">
          Tab 1
        </Tab>
        <Tab className="data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:underline">
          Tab 2
        </Tab>
        <Tab className="data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:underline">
          Tab 3
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
