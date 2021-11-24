import React from 'react'
import NextImage from 'next/image'
import { Image as CloudinaryImage } from 'cloudinary-react'

const Image = (
  props: React.ComponentProps<typeof CloudinaryImage>
): JSX.Element => {
  if (
    process.env.NODE_ENV === 'production' ||
    /true/i.test(process.env.NEXT_PUBLIC_USE_CLOUDINARY)
  ) {
    return <CloudinaryImage {...props} width="1500" />
  } else {
    return <NextImage src="/about_us.jpg" alt="" layout="fill" />
  }
}

export default Image
