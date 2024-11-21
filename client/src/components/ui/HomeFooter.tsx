import React from "react";
import googlePlayBadge from "../../assets/GooglePlay.png";
import AppleStoreBadge from "../../assets/AppleStore.webp";
import NoeticaLogo from "../../assets/Noetica.webp";
import cognimetricsLogo from "../../assets/cognimetrics.png";
import CognitiveTestingLogo from "../../assets/CognitiveTesting.jpg";
import PsychometricLogo from "../../assets/Psychometric.webp";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 border-gray-400 border-t-2 w-full overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Donate and Download Section */}
          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-700 mb-4">
              <strong>Psychopedia</strong> is hosted by a non-profit organization that also supports a range of other projects. You can support our work with a donation.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 mb-6">
              Donate Now
            </button>
            <div className="flex flex-col items-start">
              <p className="text-sm mb-4 text-gray-700 font-bold">Download the Psychopedia app</p>
              <div className="flex gap-2">
                <a href="#" className="block">
                  <img
                    src={googlePlayBadge}
                    alt="Google Play"
                    className="w-32"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src={AppleStoreBadge}
                    alt="App Store"
                    className="w-32"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Psychometric",
                description: "NPM package for Psychometricians",
                image: PsychometricLogo
            },
              { name: "Cognimetrics", 
                description: "Our official testing site",
                image: cognimetricsLogo 
            },
              { name: "Noetica (Discord)", 
                description: "Our official Discord Server",
                image: NoeticaLogo 
            },
              { name: "Noetica (App)", 
                description: "Collection of testing paradigms",
                image: NoeticaLogo 
              },
              { name: "Cognitive Testing", 
                description: "Our official Reddit",
                image: CognitiveTestingLogo

            },
            ].map((project, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 h-16 text-white">
                    {project.image ? (
                        <img src={project.image} alt={project.name} className="rounded-full shadow-xl" />
                    ) : (
                        project.name[0]
                    )}
                </div>
                <div>
                  <h3 className="text-blue-600 font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
