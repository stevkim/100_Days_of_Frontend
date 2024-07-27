export const toImageArray = (files: FileList | null) => {
  if (!files) {
    return [];
  }

  const imageArray = [];

  for (let i = 0; i < files.length; i++) {
    imageArray.push(files.item(i));
  }

  return imageArray;
};
