import { useState, type FC, type ReactElement } from 'react';


interface TabChildProps {
  label: string;
}

interface TabsProps {
  children: ReactElement<TabChildProps>[];
}


const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='tabs'>
      {/* Panels */}
      <div>
        {children.map((child, index) => (
          <div
            key={index}
            hidden={activeTab !== index}
            className={`tab-panel ${activeTab === index ? 'active' : ''}`}
          >
            {child}
          </div>
        ))}
      </div>
      {/* Tabs */}
      <div className='flex items-center justify-between gap-4 mt-7'>
        {children.map((child, index) => (
          <button
            onClick={() => setActiveTab(index)}
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
          >
            {child.props.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
