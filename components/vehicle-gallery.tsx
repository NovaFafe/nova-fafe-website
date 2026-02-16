"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VehicleGalleryProps {
  images: {
    src: string
    alt: string
    category?: string
    badge?: string
  }[]
}

export function VehicleGallery({ images }: VehicleGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setOpen(true)
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 ease-out border border-gray-100"
            onClick={() => handleImageClick(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
            {/* Info on Hover */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full mb-2 border border-white/30">
                Ver imagem
              </span>
              {image.category && (
                <p className="text-white/80 text-sm font-medium">{image.category}</p>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl p-0 bg-black/95 border-0 overflow-hidden">
          <div className="relative w-full h-[85vh]">
            {selectedImage && (
              <>
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
