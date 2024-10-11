import React, {useState} from "react";
import PricingPlan from "./PricingPlan";

const pricingPlans = [[
        {
          label: "Basic",
          price: 0,
          description: "Our most popular plan for small teams.",
          features_label: "Everything in our <b>free plan</b>.",
          features: [
            "Access to basic features",
            "Attend events",
            "Basic reporting + analytics",
            "Automatic updates",
            "Up to 10 individual users",
            "Backup your account",
            "20GB individual data",
            "Audit log and notes",
            "Basic chat support",
            "Feature requests",
          ],
          period: "month",
          isPopular: false,
        },
        {
          label: "Business",
          price: 20,
          description: "Advanced features and reporting.",
          features_label: "Everything in our <b>basic plan</b> plus....",
          features: [
            "200+ integrations",
            "Advanced custom fields",
            "Advanced reporting",
            "Audit log and data history",
            "Up to 20 individual users",
            "Backup your account",
            "40GB individual data",
            "Personalised service",
            "Priority chat support",
            "+ many more...",
          ],
          period: "month",
          isPopular: true,
        },
      ],[
        {
          label: "Basic",
          price: 0,
          description: "Our most popular plan for small teams.",
          features_label: "Everything in our <b>free plan</b>.",
          features: [
            "Access to basic features",
            "Attend events",
            "Basic reporting + analytics",
            "Automatic updates",
            "Up to 10 individual users",
            "Backup your account",
            "20GB individual data",
            "Audit log and notes",
            "Basic chat support",
            "Feature requests",
          ],
          period: "year",
          isPopular: false,
        },
        {
          label: "Business",
          price: 192,
          description: "Advanced features and reporting.",
          features_label: "Everything in our <b>basic plan</b> plus....",
          features: [
            "200+ integrations",
            "Advanced custom fields",
            "Advanced reporting",
            "Audit log and data history",
            "Up to 20 individual users",
            "Backup your account",
            "40GB individual data",
            "Personalised service",
            "Priority chat support",
            "+ many more...",
          ],
          period: "year",
          isPopular: true,
        },
      ]
    ]

const PricingSection = () => {
    const [tabIndex,setTabIndex] = useState(0)

    const handleTabChange = (index: number) => {
        setTabIndex(index)
    }
  return (
    <section
      className="flex flex-col  py-16 items-center  sectionWrapper"
      id="Pricing"
    >
      <div className="pt-4  text-center pb-16">
        <span className="text-xs text-purple">Pricing</span>
        <h3 className="text-xl font-semibold text-black ">
          Plans that fit your scale
        </h3>
        <p className="text-sm mt-2  text-secondary">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
      </div>
      <div className="flex my-4 bg-[#F9FAFB] gap-x-4  mb-8 border border-[#F2F4F7] rounded-md px-4 py-2">
        <button className={ tabIndex === 0 ? "px-3 py-2 bg-white text-sm text-[#667085] font-semibold shadow-md rounded-md":''} onClick={()=>{handleTabChange(0)}}>Monthly billing</button>
        <button  className={ tabIndex === 1 ? "px-3 py-2 bg-white text-sm text-[#667085] font-semibold shadow-md rounded-md":''}  onClick={()=>{handleTabChange(1)}} >Annual billing <span className="text-xs bg-[#F2F4F7] p-1 rounded-full text-[#344054] px-2">save 20%</span></button>
      </div>
      <div className="flex gap-x-8">
      {pricingPlans[tabIndex].map((plan, index) => (
        <PricingPlan
          key={index}
          label={plan.label}
          price={plan.price}
          description={plan.description}
          features_label={plan.features_label}
          features={plan.features}
          period={plan.period}
          isPopular={plan.isPopular}
        />
      ))}
      </div>
    </section>
  );
};

export default PricingSection;
