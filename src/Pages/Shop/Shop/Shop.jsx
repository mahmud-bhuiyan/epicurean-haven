import { useState } from "react";
import shopCoverImg from "../../../assets/shop/shop.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import ShopTab from "../ShopTab/ShopTab";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover
        img={shopCoverImg}
        title={"OUR SHOP"}
        text={"Would you like to try a dish?"}
      ></Cover>

      <div className="my-16 max-w-screen-xl mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <ShopTab items={salad}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={pizza}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={soup}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={desserts}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={drinks}></ShopTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
