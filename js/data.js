import { MESSAGES, NAMES, PHOTOS_NAMES, MIN_LIKES, MAX_LIKES, PHOTO_POSTS, MAX_COMMENTS, MIN_NUMBER_AVATARS, MAX_NUMBER_AVATARS } from './variables';
import { createId, getRandomInteger, getRandomArrayElement } from './functions';


const createIdPhoto = createId();
const createUrlPhoto = createId();
const descriptionIndex = createId();
const createIdUser = createId();


const comment = () => ({
  id: createIdUser(),
  avatar: `img/avatar-${getRandomInteger(MIN_NUMBER_AVATARS, MAX_NUMBER_AVATARS)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoPost = () => ({
  id: createIdPhoto(),
  url: `photos/${createUrlPhoto()}.jpg`,
  description: PHOTOS_NAMES[descriptionIndex() - 1],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(0, MAX_COMMENTS) }, comment)
});

const galleryPhoto = () => Array.from({ length: PHOTO_POSTS }, createPhotoPost);

export { galleryPhoto };
