import React from "react";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";

export default function ArticlePage() {
  const articleData = {
    title: "The Psychology of Learning",
    intro: `Learning is a fundamental cognitive process that enables humans and animals to adapt to their environments. It involves acquiring, storing, and applying information.`,
    sections: [
      {
        heading: "Introduction",
        content: `The study of learning encompasses disciplines such as psychology, neuroscience, and education. It focuses on understanding the mechanisms that drive behavior and cognition.`,
        subsections: [
          {
            heading: "History",
            content: `The field of learning has a rich history, with key figures such as Ivan Pavlov, B.F. Skinner, and Albert Bandura making significant contributions to our understanding of how learning occurs.`,
          },
          {
            heading: "Theories",
            content: `There are various theories of learning, including behaviorism, cognitivism, and constructivism. These theories offer different perspectives on how learning takes place and how it can be facilitated.`,
          },
        ],
      },
      {
        heading: "Types of Learning",
        content: `Learning can be categorized into various types, including classical conditioning, operant conditioning, observational learning, and experiential learning.`,
      },
      {
        heading: "Applications",
        content: `Research on learning has practical applications in areas such as education, training, therapy, and artificial intelligence. It informs teaching methods, learning models, and intervention strategies.`,
      },
    ],
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Sidebar Column */}
      <div className="col-span-3 bg-gray-100 min-h-screen">
        <SidebarProvider>
          <AppSidebar  />
        </SidebarProvider>
      </div>

      {/* Article Column */}
      <div className="col-span-6 px-6 py-8">
        <article className="prose max-w-none">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-6 border-b-[1px] border-b-gray-300">
            {articleData.title}
          </h1>

          {/* Introduction */}
          <p className="text-lg text-gray-700 mb-8">{articleData.intro}</p>

          {/* Sections */}
          {articleData.sections.map((section, index) => (
            <section key={index} className="mb-10">
              {/* Section Heading */}
              <h2 className="text-2xl font-semibold mb-4 border-b-[1px] border-b-gray-300">
                {section.heading}
              </h2>
              {/* Section Content */}
              <p className="text-gray-600 text-base mb-6">{section.content}</p>

              {/* Subsections */}
              {section.subsections && (
                <div className="ml-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="mb-4">
                      <h3 className="text-xl font-medium mb-2">{subsection.heading}</h3>
                      <p className="text-gray-600 text-base">{subsection.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>
      </div>

      {/* Empty Column (for future use) */}
      <div className="col-span-3 bg-gray-50 min-h-screen"></div>
    </div>
  );
}
