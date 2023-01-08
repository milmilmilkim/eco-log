import { useRecoilState } from 'recoil';
import { recoilDateState } from '../state/recoilDateState';
import dayjs from 'dayjs';
import axios from '../config/Axios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//components
import PageTitle from '../components/PageTitle';
import TextButton from '../components/Common/TextButton';
import Section from '../components/Section';
import Tag from '../components/Tag';
import Input from '../components/Form/Input';

//type
import { Behavior, BehaviorCategory, Post } from '../typing/common';

// const
import { categoryName } from '../config/Const';

// 뱃지
import { badgeInfo } from '../config/Const';

const Write = () => {
  const Navigate = useNavigate();
  const [date] = useRecoilState(recoilDateState);
  const inputRef = useRef<HTMLInputElement>(null);
  const [behavior, setBehavior] = useState<BehaviorCategory | null>(null);
  const [clicked, setClicked] = useState(false);
  const [customBehavior, setCustomBehavior] = useState<Array<string>>([]);
  const [post, setPost] = useState<Post>({
    comment: '',
    doingDay: dayjs(date).format('YYYY-MM-DD'),
    behaviorList: [],
    customizedBehaviors: [],
  });

  const getBehavior = async () => {
    const { data } = await axios.get('/api/behavior');
    setBehavior(data);
  };

  const activeInput = () => {
    setClicked(true);
  };

  const onBlur = () => {
    setClicked(false);
  };

  const addBehaviorId = (id: Number) => {
    let newBehaviorList: Number[] = post.behaviorList;
    if (post.behaviorList.includes(id)) {
      newBehaviorList = [...post.behaviorList.filter((v) => v !== id)];
    } else {
      newBehaviorList.push(id);
    }
    setPost({
      ...post,
      behaviorList: newBehaviorList,
    });
  };

  const addCustomBehavior = (item: string) => {
    let nextBehaviors;
    if (customBehavior.includes(item)) {
      //삭제
      nextBehaviors = customBehavior.filter((v) => v !== item);
    } else {
      //추가
      nextBehaviors = post.customizedBehaviors as string[];
      nextBehaviors.push(item);
    }

    setCustomBehavior(nextBehaviors);
    setPost({ ...post, customizedBehaviors: nextBehaviors });
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (post.behaviorList.length < 1 && post.customizedBehaviors.length < 1) {
        throw new Error('실천 내용을 입력하세요');
      }
    } catch (err: any) {
      Swal.fire({
        text: err.message,
        icon: 'warning',
        confirmButtonText: 'ok',
      });
      return;
    }

    const { data } = await axios.post('/api/post', post);
    //성공시
    await Swal.fire({
      title: 'Success!',
      text: '저장되었습니다',
      icon: 'success',
      confirmButtonText: 'ok',
    });

    const { badgeAchieveList } = data;
    if (badgeAchieveList?.length > 0) {
      const badgeIndex = Number(badgeAchieveList[0]);
      await Swal.fire({
        icon: 'info',
        text: '새로운 뱃지를 획득했습니다',
        title: `${badgeInfo[badgeIndex].name}`,
        confirmButtonText: 'ok',
      });
      Navigate(`/badge/${badgeIndex}`);
    }

    Navigate('/main');
  };

  /**
   * @description: 커스텀 behavior 입력 후 엔터
   */
  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      let value = inputRef.current!.value;
      if (!customBehavior.includes(value) && value.trim() !== '') addCustomBehavior(value);
      inputRef.current!.value = '';
      setClicked(false);
    }
  };

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: comment } = e.currentTarget;
    setPost({
      ...post,
      comment,
    });
  };

  useEffect(() => {
    getBehavior();
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [clicked]);

  const BehaviorTag = () => {
    const result: JSX.Element[] = [];
    for (let category in behavior) {
      const behaviorList = behavior[category as keyof BehaviorCategory];
      const categoryKor = categoryName[category as keyof BehaviorCategory];

      if (behaviorList.length > 0 || category === 'etc') {
        result.push(
          <div key={category}>
            <span className="category-title" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>
              {categoryKor}
            </span>
            <ul>
              {behaviorList.map((item: Behavior) => (
                <Tag className={post.behaviorList.includes(item.behaviorId) ? 'active' : ''} key={`id_${item.behaviorId}`} backgroundColor="#fff" border>
                  <div onClick={() => addBehaviorId(item.behaviorId)}>{item.name}</div>
                </Tag>
              ))}
              {category === 'etc' && (
                <>
                  {customBehavior.map((item) => (
                    <Tag onClick={() => addCustomBehavior(item)} className={customBehavior.includes(item) ? 'active' : ''}>
                      {item}
                    </Tag>
                  ))}
                  <Tag className="plus">
                    {clicked ? (
                      <>
                        <input ref={inputRef} type="text" onBlur={onBlur} maxLength={15} onKeyDown={handleKeyUp} />
                      </>
                    ) : (
                      <span onClick={activeInput}>직접 입력</span>
                    )}
                  </Tag>
                </>
              )}
            </ul>
          </div>
        );
      }
    }
    return result;
  };

  return (
    <div style={{ width: '100%' }}>
      <PageTitle prevButton={true} title={dayjs(date).format('YYYY년 MM월 DD일')}>
        <TextButton onClick={onSubmit}>기록</TextButton>
      </PageTitle>
      <div style={{ marginBottom: '20px' }}></div>
      <Section title="오늘의 실천">
        <ul>{behavior && BehaviorTag()}</ul>
      </Section>
      <div style={{ marginBottom: '20px' }}></div>
      <Section title="오늘의 한마디">
        <Input name="comment" placeholder="목표했던 점이나 아쉬웠던 점을 입력해주세요" onChange={onCommentChange} />
      </Section>
    </div>
  );
};

export default Write;
