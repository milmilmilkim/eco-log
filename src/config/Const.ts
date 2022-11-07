import seed from '../assets/images/grow/1.png';
import root from '../assets/images/grow/2.png';
import cotyledon from '../assets/images/grow/3.png';
import leaf from '../assets/images/grow/4.png';
import flower from '../assets/images/grow/5.png';
import peapod from '../assets/images/grow/6.png';
import bean from '../assets/images/grow/7.png';

type Grow = [Number, String, String?][];

export const grow: Grow = [
  [57, '한 꼬투리 안에 5~6개의 콩이 들어있어요.'],
  [43, '콩을 품고 있는 꼬투리가 맺혔어요.'],
  [29, '흰색 꽃이 피었어요.'],
  [22, '떡잎 사이로 본잎이 자라요.'],
  [15, '씨가 싹틀 때 처음 나오는 떡잎이에요.'],
  [8, '작은 꼬리 같은 뿌리가 돋았어요.'],
  [0, '껍질의 보호를 받으며 성장을 기다려요.'],
];

const growImage: Grow = [
  [57, bean, '콩'],
  [43, peapod, '꼬투리'],
  [29, flower, '꽃'],
  [22, leaf, '본잎'],
  [15, cotyledon, '떡잎'],
  [8, root, '뿌리'],
  [0, seed, '씨앗'],
];

export const maxGrow = 57;

export const getGrowText = (value: Number): String => {
  let result: String = '';
  grow.forEach((item) => {
    if (value >= item[0]) {
      result = item[1];
    }
  });
  return result;
};

type GrowImage = {
  alt: String;
  src: String;
};
export const getGrowImage = (value: Number): GrowImage => {
  let result: GrowImage = {
    src: growImage[growImage.length - 1][1],
    alt: growImage[growImage.length - 1][2] as string,
  };
  for (let i = 0; i < growImage.length; i++) {
    if (value >= growImage[i][0]) {
      result = {
        src: growImage[i][1],
        alt: growImage[i][2] as string,
      };
      break;
    }
  }

  return result;
};
