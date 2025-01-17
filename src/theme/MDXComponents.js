import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import DocCardList from "@theme/DocCardList";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add globally available components
  Tabs,
  TabItem,
  DocCardList,
};
