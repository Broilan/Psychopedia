import { LeftBar } from "@/components";
import { SidebarProvider } from "@/components/ui/sidebar";

export function AboutPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Left Sidebar */}
      <div className="col-span-2 min-h-screen">
        <SidebarProvider>
          <LeftBar contents={[{ title: "x", url: "x" }]} />
        </SidebarProvider>
      </div>

      {/* Main Content */}
      <div className="col-span-8 min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg leading-7">
            Welcome to our platform! We are dedicated to providing a comprehensive and collaborative space for sharing knowledge and fostering learning. Our goal is to create a community-driven resource that empowers users to explore, contribute, and grow together.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-600 leading-7">
              Our mission is to democratize access to knowledge and provide a space where anyone can learn and contribute. We believe in the power of collaboration to create a more informed and educated world.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-gray-600 leading-7">
              We envision a world where knowledge is freely accessible and easily shared. Our platform is designed to break down barriers to information and enable people from all backgrounds to connect, learn, and innovate.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
            <p className="text-gray-600 leading-7">
              Have questions, feedback, or ideas? We’d love to hear from you! Reach out to us at{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-500 hover:underline"
              >
                support@example.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
