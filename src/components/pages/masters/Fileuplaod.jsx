
import { getDownloadURL, listAll, ref, uploadBytes, } from "firebase/storage";
import "./FileUpload.scss";
import { storage } from "../../../setup/firebase/firebase";
import { useState } from "react";
import { v4 } from "uuid";
import { useEffect } from "react";

const Fileuplaod = () => {
  const [image, setImage] = useState(null)
  const [imagesUrl, setImagesUrl] = useState([])
  const imagesListRef = ref(storage, "images/")
  const handleFileUpload = () => {
    if (image === null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);

    uploadBytes(imageRef, imagesUrl).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImagesUrl((prev) => [...prev, url])
        console.log(imagesUrl);
      })
    })

  };

  useEffect(() => {
    listAll(imagesListRef).then(imgs => {
      console.log(imgs)
      imgs.items.forEach((item) => {
        getDownloadURL(item).then(url => {
          setImagesUrl((prev) => [...prev, url])
        })
      })
    })
}, [])
return (
  <>
    <div>
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={(handleFileUpload)}>send</button>
      {imagesUrl.map((item, index) => (
        <img src={item} key={index} alt="" />
      ))}
    </div>
  </>
)
}




export default Fileuplaod;
