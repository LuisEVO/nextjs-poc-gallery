import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    description: 'Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    description: 'Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    description: 'Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!'
  },
];

export default function MyGallery () {
    return <ImageGallery items={images} />;
}

