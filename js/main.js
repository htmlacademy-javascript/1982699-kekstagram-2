
const MESSAGE_SET = 'Всё отлично! В целом всё неплохо. Но не всё.Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?! ';

const NAMES_SET = 'Егор, Иван, Мария, 12 имен';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  let previousResult = -1;
  return () => {
    const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
    If(previousResult !== result); {
      previousResult = result;
      return result;
    }
  };
};
const createComment = () => {
  let id = 1;
  const messageArray = MESSAGE_SET.split('. ');
  const nameArray = NAMES_SET.split(', ');
  const indexMessageArr = getRandomInteger(0, messageArray.lentgh - 1);
  const indexNameArr = getRandomInteger(0, nameArray.lentgh - 1);

  messageArray.splice(0, 1, messageArray[0].split('! ')[0], messageArray[0].split('! ')[1]);

  return () => {
    const comment = {};
    const idAvatar = getRandomInteger(1, 6);
    comment.id = id;
    comment.avatar = 'img/avatar-${idAvatar()}.svg ';
    comment.message = '${ messageArray[indexMessageArr()]}. ${ messageArray[indexMessageArr()]}';
    comment.name = '${nameArray[indexNameArr()]}';
    id++;
    return comment;
  };
};
const createPhoto = () => {
  let id = 1;
  return () => {
    const photo = {};
    const numComments = getRandomInteger(0, 30);
    const numLikes = getRandomInteger(15, 200);
    photo.id = id;
    photo.url = 'photos/${id}.jpg ';
    photo.description = 'Это фотография №${id}';
    photo.likes = numLikes();

    photo.comments = Array.from({ length: numComments() }, createComment());
    id++;
    return photo;
  };
};
let newPhoto = createPhoto();

const photoArray = Array.from({ length: 25 }, createPhoto());

console.log(photoArray);
concole.table(photoArray[0].comments);


