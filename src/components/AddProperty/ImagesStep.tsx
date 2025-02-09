import { useState } from "react";
import { Text, Image, SimpleGrid } from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";

// top main carouesl images section of the add proprty stepper

export default function ImagesStep() {
  // component states
  const [files, setFiles] = useState<FileWithPath[]>([]);

  // preview function
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
        className="rounded-sm shadow-md"
        alt="preview images"
      />
    );
  });

  return (
    // Main gallery images (max 5 images)
    <div className="flex flex-col space-y-4">
      <label className="text-sm">Main gallery images (Max 5 images)</label>
      <div>
        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onDrop={setFiles}
          className="flex h-32 items-center justify-center border border-dashed border-black dark:border-white/90"
        >
          <Text ta="center">Drop images here</Text>
        </Dropzone>

        <SimpleGrid
          cols={{ base: 1, sm: 4 }}
          mt={previews.length > 0 ? "xl" : 0}
        >
          {previews}
        </SimpleGrid>
      </div>
    </div>
  );
}
