import React from "react";
import type { Metadata } from "next";
import PrivacyPolicy from "@/components/policy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | SmartBiz AI",
  description:
    "Privacy policy for SmartBiz AI - Learn how we collect, use, and protect your data.",
};

const page = () => {
  return <PrivacyPolicy />;
};

export default page;
