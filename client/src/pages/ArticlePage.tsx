import React from "react";
import { SidebarProvider } from "../components/ui/sidebar";
import { useToast } from "../hooks/use-toast"
import { AppSidebar } from "../components/app-sidebar";
import { Pencil, MessageCircle, Star, CircleAlert } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ArticlePage() {
    const { toast } = useToast()
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
          <h1 className="text-4xl font-bold border-b-[1px] border-b-gray-300">
            {articleData.title}
          </h1>
          <div className="flex justify-end gap-2 border-b-[1px] p-[3px] border-b-gray-300">
            

            <Dialog>
              <DialogTrigger>            
                <MessageCircle 
                    strokeWidth={1} 
                    className="w-[1.2rem]"
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex align-center text-center">
                    Leave a comment 
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>                    
                          <CircleAlert 
                            strokeWidth={1} 
                            className="h-4 w-4 ml-2"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Vulgarity will <br /> not be tolerated.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </DialogTitle>
                  <DialogDescription>
                    <Textarea />
                  </DialogDescription>
                </DialogHeader>
                  <Button variant="secondary" size="lg">Post comment</Button>
              </DialogContent>
            </Dialog>

            <Dialog>
                  <DialogTrigger asChild>
                    <Pencil strokeWidth={1} className="w-[1.2rem] hover:cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit page</DialogTitle>
                      <DialogDescription>
                        You may suggest edits here, but they will need to be approved by an admin.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                      </div>
                    </div>
                      <Button variant="secondary">Save changes</Button>
                  </DialogContent>
                </Dialog>

            <Star 
            strokeWidth={1} 
            className="w-[1.2rem] hover:cursor-pointer"  
            onClick={() => toast({description: "Page saved to favorites."})} 
            />

          </div>

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
