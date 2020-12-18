import client from './client';

const endpoint = '/listings'
// get listings request
const getListings = () => client.get(endpoint);

const addListings = (listing, onUploadProgress) => {
  // t’s encoded and sent out with Content-Type: multipart/form-data
  const data = new FormData();
  // append title, description, price, categoryid, images, location
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);
  
  // since we can have more than one image
  listing.images.forEach((image, index) => {
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    })
  });

  // location is optional
  if (listing.location) data.append('location', JSON.stringify(listing.location));
  // call post request
  return client.post(endpoint, data, {
    onUploadProgress: progress => onUploadProgress(progress.loaded / progress.total)
  });
}

export default {
  addListings,
  getListings,
}