import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

// config driven UI

const TabForm = () => {
  const [formData, setFormData] = useState({
    name: "Sanyam",
    age: "26",
    email: "sanyam@gmail.com",
    theme: "dark",
    interests: ["chess", "coding"],
  });
  const [activeTab, setActiveTab] = useState(0);
  const [err, setErr] = useState({});

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const error = {};
        if (!formData.name || formData.name.length < 2) {
          error.name = "Name is not valid";
        }
        if (!formData.age || formData.age < 18) {
          error.age = "Age is not valid";
        }
        if (!formData.email || formData.email.length < 2) {
          error.email = "Email is not valid";
        }

        setErr(error);
        return error.name || error.age || error.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const error = {};
        if (formData.interests.length < 1) {
          error.interests = "Select atleast one interest.";
        }
        setErr(error);
        return error.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmitClick = () => {
    console.log({ formData });
  };
  return (
    <>
      <h1>TabForm</h1>
      <div className="heading-container">
        {tabs.map((tab, index) => {
          return (
            <div
              key={tab.name}
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
              className="heading"
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="tab-body">
        <ActiveTabComponent
          data={formData}
          setData={setFormData}
          errors={err}
        />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </>
  );
};

export default TabForm;
