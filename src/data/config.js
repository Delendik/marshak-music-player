import Jamming from './audio/jamming.mp3';
import Nobody from './audio/Nobody.mp3';
import KagdbiyRaz from './audio/KagdbiyRaz.mp3';
import pic1 from './cover/id_1.jpg';
import pic2 from './cover/id_2.jpg';
import pic3 from './cover/id_3.jpg';

const playList = [
  {
    id: 1,
    title: 'Jamming',
    author1: 'Bob Marly',
    author2: 'The Wailers ',
    file: Jamming,
    cover: pic1
  },
  {
    id: 2,
    title: 'Nobody',
    author1: 'Skin',
    author2: 'dred',
    file: Nobody,
    cover: pic2
  },
  {
    id: 3,
    title: 'Каждый раз',
    author1: 'Моне',
    author2: 'точка',
    file: KagdbiyRaz,
    cover: pic3
  }
]

export default playList;