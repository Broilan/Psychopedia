import { Pencil, MessageCircle, Star, CircleAlert } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button, 
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components";

export function ArticleContent({ articleData }: { articleData: any }) {
  return (
    <article className="prose max-w-none">
      {/* Title */}
      <h1 className="text-4xl font-bold border-b-[1px] border-b-gray-300">
        {articleData.title}
      </h1>

      <div className="flex justify-end gap-2 border-b-[1px] p-[3px] border-b-gray-300">
        {/* Comments Dialog */}
        <Dialog>
          <DialogTrigger>
            <MessageCircle strokeWidth={1} className="w-[1.2rem]" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center">
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
                <Textarea placeholder="Write your comment..." />
              </DialogDescription>
            </DialogHeader>
            <Button variant="secondary" size="lg">
              Post comment
            </Button>
          </DialogContent>
        </Dialog>

        {/* Edit Page Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Pencil
              strokeWidth={1}
              className="w-[1.2rem] hover:cursor-pointer"
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit page</DialogTitle>
              <DialogDescription>
                You may suggest edits here, but they will need to be
                approved by an admin.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Textarea placeholder="Suggested changes..." />
            </div>
            <Button variant="secondary">Submit changes</Button>
          </DialogContent>
        </Dialog>

        {/* Save to Favorites */}
        <Star
          strokeWidth={1}
          className="w-[1.2rem] hover:cursor-pointer"
          onClick={() =>
            alert("Page saved to favorites.") // Replace with toast logic
          }
        />
      </div>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-8">{articleData.content.introduction}</p>

      {/* Sections */}
      {articleData.content.sections.map((section: any, index: number) => (
        <section key={index} className="mb-10">
          {/* Section Heading */}
          <h2 className="text-2xl font-semibold mb-4 border-b-[1px] border-b-gray-300">
            {section.title}
          </h2>
          {/* Section Content */}
          <p className="text-gray-600 text-base mb-6">{section.content}</p>

          {/* Media */}
          {section.media && (
            <div className="mb-6">
              {section.media.map((media: any, mediaIndex: number) => (
                <figure key={mediaIndex} className="mb-4">
                  {media.type === "image" && (
                    <img
                      src={media.source}
                      alt={media.caption || ""}
                      width={media.dimensions?.width}
                      height={media.dimensions?.height}
                      className="rounded-lg shadow"
                    />
                  )}
                  {media.caption && (
                    <figcaption className="text-sm text-gray-500">
                      {media.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {/* Subsections */}
          {section.subsections && (
            <div className="ml-6">
              {section.subsections.map((subsection: any, subIndex: any) => (
                <div key={subIndex} className="mb-4">
                  <h3 className="text-xl font-medium mb-2">
                    {subsection.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {subsection.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* References */}
      <section id="references" className="mt-8">
        <h2 className="text-xl font-semibold mb-4">References</h2>
        <ul className="list-disc list-inside">
          {articleData.references.map((ref: any, index: any) => (
            <li key={index} className="text-sm text-gray-700">
              <strong>{ref.title}</strong>{" "}
              {ref.author && <span>- {ref.author}</span>}{" "}
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  [Link]
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
