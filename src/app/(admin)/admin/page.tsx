"use client";
import Button from "@/components/button/page";
import { SessionProvider } from "next-auth/react";

export default function AdminPage() {
  return (
    <SessionProvider>
      <PageContent />
    </SessionProvider>
  );
}

function PageContent() {
  const tabs = [
    { label: "Network Upgrades", link: "/admin/network_upgrades" },
    { label: "Blogs and Events", link: "/admin/blogs_events" },
    { label: "Youtube", link: "/admin/youtube" },
    { label: "Surveys", link: "/admin/surveys" },
  ];

  return (
    <>
      <div className="flex flex-wrap lg:flex-row flex-col justify-center w-full h-screen items-center gap-5">
        {tabs.map((tab, index) => {
          return (
            <span key={index}>
              <Button text={tab.label} link={tab.link} size="md" />
            </span>
          );
        })}
      </div>
    </>
  );
}