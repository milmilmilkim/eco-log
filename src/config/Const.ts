import seed from '../assets/images/grow/1.png';
import root from '../assets/images/grow/2.png';
import cotyledon from '../assets/images/grow/3.png';
import leaf from '../assets/images/grow/4.png';
import flower from '../assets/images/grow/5.png';
import peapod from '../assets/images/grow/6.png';
import bean from '../assets/images/grow/7.png';

import badge_0 from '../assets/images/badge/0.png';
import badge_1 from '../assets/images/badge/1.png';
import badge_2 from '../assets/images/badge/2.png';
import badge_3 from '../assets/images/badge/3.png';
import badge_4 from '../assets/images/badge/4.png';
import badge_5 from '../assets/images/badge/5.png';
import badge_6 from '../assets/images/badge/6.png';
import badge_7 from '../assets/images/badge/7.png';
import badge_8 from '../assets/images/badge/8.png';
import badge_9 from '../assets/images/badge/9.png';

// 씨앗 관련
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
export const getGrowImage = (value: Number = 0): GrowImage => {
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

// 뱃지 관련

export const badgeInfo = [
  {
    index: 0,
    name: '작심삼일이 모이면',
    condition: '첫 3일 연속 실천 기록 입력 달성',
    desc: '작심삼일도 열 번이면 서른 개의 실천이 쌓여요',
    src: badge_0,
  },
  {
    index: 1,
    name: '꾸준함의 재능',
    condition: '첫 30일 연속 실천 기록 입력 달성',
    desc: '30일의 기록이 차곡차곡 쌓였어요',
    src: badge_1,
  },
  {
    index: 2,
    name: '왕 발자국',
    condition: '실천 입력 누적15개',
    desc: '실천을 향한 우리의 작지만 큰 첫 발',
    src: badge_2,
  },
  {
    index: 3,
    name: '실천가',
    condition: '실천 입력 40개',
    desc: '다짐한 건 꼭 지켜내는 당신',
    src: badge_3,
  },
  {
    index: 4,
    name: '제로 웨이스트 고수',
    condition: '실천 입력 누적 70개',
    desc: '말해모해',
    src: badge_4,
  },
  {
    index: 5,
    name: '나만의 기록',
    condition: '직접 입력 실천 누적 5개',
    desc: '직접 기록하는 나만의 실천',
    src: badge_5,
  },
  // {
  //   name: '뿌듯한 성취',
  //   condition: '에코레벨 열매 단계 도달',
  //   desc: '열매 레벨에 도달한 걸 축하해요',
  // },
  {
    index: 6,
    name: '웰컴 백',
    condition: '실천 미입력일 5일 후 실천 입력 재개',
    desc: '완벽하지 않아도 느슨하게 실천을 이어가요',
    src: badge_6,
  },
  {
    index: 7,
    name: '함께 갈 동료',
    condition: '첫 팔로잉/팔로워 달성',
    desc: '너, 내 동료가 되어라!',
    src: badge_7,
  },
  {
    index: 8,
    name: '작은 마음',
    condition: '팔로잉/팔로워에 응원 이모티콘 3개 이상 전송',
    desc: '동료를 응원하며 작은 마음을 보태요',
    src: badge_8,
  },
  {
    index: 9,
    name: '치어 업',
    condition: '팔로잉/팔로워에 응원 이모티콘 50개 이상 전송',
    desc: '지치지 않는 격려와 응원을 보내요',
    src: badge_9,
  },
];

// 실천 카테고리

export const categoryName = {
  spend: '소비',
  outdoor: '외출',
  living: '생활',
  eat: '식사',
  etc: '기타',
};
