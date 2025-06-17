import React, { useEffect, useState } from 'react';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../firebase/firebaseConfig';

const FanArtGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const folderRef = ref(storage, 'fanart');
      const res = await listAll(folderRef);
      const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
      setImages(urls);
    };
    loadImages();
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl gothic mb-4">🖼 Fan Art Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((url, i) => (
          <div key={i} className="bg-gray-900 p-2 rounded shadow">
            <img src={url} alt="fan art" className="rounded object-cover w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FanArtGallery;
