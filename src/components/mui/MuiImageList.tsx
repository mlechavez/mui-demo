/* eslint-disable @next/next/no-img-element */
import { Stack, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const MuiImageList = () => {
  const [images, setImages] = useState<
    { id: number; author: string; download_url: string }[]
  >([]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={`${item.download_url}`}
              alt={item.author}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

export default MuiImageList;
