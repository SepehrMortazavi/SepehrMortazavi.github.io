import type { Metadata } from "next";
import CaseStudy from "./CaseStudy";

export const metadata: Metadata = {
  title: "3D Print Manager — Case Study · Sepehr Mortazavi",
  description:
    "A public-safe visual case study of a university group project for shared 3D-print operations, from model upload to slicing, queues, and printer monitoring.",
};

export default function PrintManagerCaseStudyPage() {
  return <CaseStudy />;
}
