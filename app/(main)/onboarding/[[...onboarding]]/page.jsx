"use client";

import { OrganizationList, useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Onboarding() {
  const { organization } = useOrganization();
  const router = useRouter();
  
  useEffect(() => {
      console.log(organization,'organization');
      if (organization && organization.slug) {
        console.log(organization.slug, 'organization slug');
        router.push(`/organization/${organization.slug}`);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organization, router]);

  return (
    <div className="flex justify-center items-center pt-14">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/organization/:slug"
        afterSelectOrganizationUrl="/organization/:slug"
      />
    </div>
  );
}