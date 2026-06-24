"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function ProjectsGalleryClient({ htmlContent }: { htmlContent: string }) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        setLightboxImg((target as HTMLImageElement).src);
      }
    };

    const container = document.getElementById("projects-gallery-container");
    if (container) {
      container.addEventListener("click", handleImageClick);
    }
    return () => {
      if (container) container.removeEventListener("click", handleImageClick);
    };
  }, []);

  return (
    <>
      <div 
        id="projects-gallery-container"
        className="prose max-w-none columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 prose-p:break-inside-avoid prose-img:w-full prose-img:h-56 prose-img:object-cover prose-img:rounded-xl prose-img:shadow-md prose-img:cursor-pointer hover:prose-img:opacity-90 prose-img:transition-opacity prose-img:m-0 prose-p:text-center prose-p:text-sm prose-p:font-medium prose-p:text-gray-600 prose-p:mt-2"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />

      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-[101] bg-white/10 p-2 rounded-full transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={lightboxImg} 
            alt="Full screen gallery" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}
