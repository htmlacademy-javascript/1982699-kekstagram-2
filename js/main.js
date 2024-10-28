const SUBJECTS = [
  'Батон',
  'Бездна',
  'Пейзаж',
  'Чашка',
  'Зонт',
  'Нота',
  'Храм',
  'Цитрус',
  'Лебедь',
  'Тигр',
];
const ADJECTIVES = [
  'красный',
  'универсальный',
  'зеленый',
  'оранжевый',
  'громкий',
  'прекрасный',
  'жемчужный',
  'милый',
  'королевский',
  'яркий',
];
const ACTIONS = [
  'играет в парке',
  'отдыхает на природе',
  'летает в небе',
  'светит в горах',
  'растет в лесу',
  'стоит у реки',
  'переходит дорогу',
  'цветет в огороде',
  'плавает в озере',
  'плавает в бассейне'
];
const PLACES = [
  'в городе',
  'в деревне',
  'на дороге',
  'в парке',
  'на пляже',
  'в лесу',
  'на острове',
  'в пустыне',
  'в горах',
  'в бассейне'
];
const SIMILAR_WIZARD_COUNT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const generateRandomComment = () => {
  const comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  return {
    id: this.generateUniqueIdentity(this.commentsMaxCout, this.commentsStore),
    avatar: `img/avatar-${this.generateRandomNumber(0, 6)}`,
    message: this.getRandomValueFromArray(comments),
    name: this.generateRandomName()
  };
}

const generateRandomComments = () => {
  const result = [];
  const commentsCout = this.generateRandomNumber(0, 30);
  for (let index = 0; index < commentsCout; index++) {
    const comment = this.generateRandomComment();
    result.push(comment);
    this.commentsStore.set(comment.id, comment);
  }

  return result;
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createWizard = (identity) => {
  return {
    id: identity,
    url: `photos/${identity}.jpg`,
    description: this.generateRandomDescription(),
    likes: this.generateRandomNumber(15, 200),
    comments: this.generateRandomComments()
  };
}

const generateRandomDescription = () => ({
  subjects: getRandomArrayElement(SUBJECTS),
  adjectives: getRandomArrayElement(ADJECTIVES),
  actions: getRandomArrayElement(ACTIONS),
  place: getRandomArrayElement(PLACES),
});

const similarWizards = Array.from({ length: SIMILAR_WIZARD_COUNT }, createWizard);

console.log(similarWizards);


