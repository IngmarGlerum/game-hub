export const getCroppedImageUrl = (originalImageSource: string) => {
  const cropAddition = "crop/600/400/";
  return (
    originalImageSource.slice(0, 28) +
    cropAddition +
    originalImageSource.slice(28)
  );
};
