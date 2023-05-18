import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cars from './Cars/Cars';
import Trucks from './Trucks/Trucks';
import Busses from './Busses/Busses';

const ShopByCategory = () => {
    return (
        <div className='my-20'>
            <Tabs>
                <TabList>
                    <Tab>Cars</Tab>
                    <Tab>Trucks</Tab>
                    <Tab>Busses</Tab>
                </TabList>

                <TabPanel>
                    <Cars></Cars>
                </TabPanel>
                <TabPanel>
                    <Trucks></Trucks>
                </TabPanel>
                <TabPanel>
                    <Busses></Busses>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;