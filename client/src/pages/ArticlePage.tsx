import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { LeftBar } from "../components/LeftBar";
import { ArticleContent } from "@/components";
import { useParams } from 'react-router-dom';

import { seedArticleData, seedArticleData2, seedArticleData3, seedArticleData4 } from "../lib/seed";

export function ArticlePage() {
  const arr = [seedArticleData, seedArticleData2, seedArticleData3, seedArticleData4];
  const { id } = useParams();

  const contents = arr[1
  ].content.sections.map((section) => ({
    title: section.title,
    url: `#${section.title.replace(/\s+/g, "-").toLowerCase()}`,
    subsections: section.subsections?.map((sub) => ({
      title: sub.title,
      url: `#${sub.title.replace(/\s+/g, "-").toLowerCase()}`,
    })),
  }));
  
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Sidebar Column */}
      <div className="col-span-3 bg-gray-100 min-h-screen">
        <SidebarProvider>
          <LeftBar contents={contents} />
          <main>
            <SidebarTrigger />
          </main>
        </SidebarProvider>
      </div>

      {/* Article Column */}
      <div className="col-span-6 px-6 py-8">
        <ArticleContent articleData={arr[1]} />
      </div>

      {/* Empty Column */}
      <div className="col-span-3 bg-gray-50 min-h-screen"></div>
    </div>
  );
}
