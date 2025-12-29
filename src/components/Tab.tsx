import type { FC, ReactNode } from "react";

interface TabProps {
  children: ReactNode;
  label: string
};

const Tab: FC<TabProps> = ({ children }) => {
  return (
    <div className="tab-content">{children}</div>
  )
}

export default Tab;