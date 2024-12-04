"use client";
import ImageFallback from "@layouts/components/ImageFallback";
import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const ImageGrid = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const imageWidth = rect.width;

    if (clickX < imageWidth / 2) {
      prevImage();
    } else {
      nextImage();
    }
  };

  return (
    <>
      <div className="p-4">
        {/* Griglia per le immagini */}
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full pt-[100%] bg-gray-100 rounded overflow-hidden shadow cursor-pointer"
              onClick={() => openModal(index)}
            >
              <ImageFallback
                src={image.img}
                alt={`grid-image-${image.img}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                loading="lazy"
                sizes="100vw"
                fill={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modale */}
      <Dialog open={isOpen} onClose={setIsOpen} closeModal className="relative z-100" onClick={handleOverlayClick}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <div className="relative">
            {/* Pulsante Chiudi */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Freccia Sinistra */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
              onClick={prevImage}
            >
              ◀
            </button>

            {/* Freccia Destra */}
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
              onClick={nextImage}
            >
              ▶
            </button>

            {/* Immagine */}
            <img
              src={images[currentIndex].img}
              alt={`modal-image-${currentIndex}`}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ImageGrid;
