import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsCard from './TabsCard';

const Tabss = ({ tobs }) => {
  return (
    <div className='flex justify-center z-50'>
      <Tabs>
        <TabList>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphic Design</Tab>
          <Tab>Digital Marketing</Tab>
        </TabList>

        <TabPanel>
         <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 gap-3'>
         {tobs
         .filter( j => j.category === 'Digital Marketing')
         .map(tob => ( <TabsCard key={tob._id}  tob={ tob} />
          ))
          }
         </div>

        </TabPanel>

        <TabPanel>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
         {tobs
         .filter( j => j.category === 'Graphic Design')
         .map(tob => ( <TabsCard key={tob._id}  tob={ tob} />
          ))
          }
         </div>
        </TabPanel>

        <TabPanel>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
         {tobs
         .filter( j => j.category === 'Graphic Design')
         .map(tob => ( <TabsCard key={tob._id}  tob={ tob} />
          ))
          }
         </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabss;