import imagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp";

export const getCroppedImageUrl = (originalImageSource: string) => {
  if (!originalImageSource) return imagePlaceholder;
  const cropAddition = "crop/600/400/";
  return (
    originalImageSource.slice(0, 28) +
    cropAddition +
    originalImageSource.slice(28)
  );
};
