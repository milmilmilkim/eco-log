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
import { Behavior, Post } from '../typing/common';

const Write = () => {
  const Navigate = useNavigate();
  const [date] = useRecoilState(recoilDateState);
  const inputRef = useRef<HTMLInputElement>(null);
  const [behavior, setBehavior] = useState<Behavior[]>([]);
  const [clicked, setClicked] = useState(false);
  const [post, setPost] = useState<Post>({
    comment: '',
    doingDay: '',
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
    console.log('ㅎㅇㅎㅇ');
  };

  const addBehaviorId = (id: Number) => {
    const newBehaviorList: Number[] = post.behaviorList;
    newBehaviorList.push(id);

    setPost({
      ...post,
      behaviorList: newBehaviorList,
      doingDay: dayjs(date).format('YYYY-MM-dd'),
    });
  };

  const onFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    const comment = e.currentTarget.comment.value;
    setPost({
      ...post,
      comment,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPost(post);
    console.log(post);
    await axios.post('/api/post', post);
    //성공시
    Swal.fire({
      title: 'Success!',
      text: '저장되었습니다',
      icon: 'success',
      confirmButtonText: 'ok',
    });
    Navigate('/main');
  };

  useEffect(() => {
    getBehavior();
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [clicked]);

  return (
    <form onChange={onFormChange} onSubmit={onSubmit}>
      <PageTitle title={dayjs(date).format('YYYY년 MM월 DD일')}>
        <TextButton type="submit">기록</TextButton>
      </PageTitle>
      <div style={{ marginBottom: '20px' }}></div>
      <Section title="오늘의 실천">
        <ul>
          {behavior.map((item: Behavior) => (
            <Tag className={post.behaviorList.includes(item.behaviorId) ? 'active' : ''} key={`id_${item.behaviorId}`} backgroundColor="#fff" border>
              <div onClick={() => addBehaviorId(item.behaviorId)}>{item.name}</div>
            </Tag>
          ))}
          <Tag className="plus">{clicked ? <input ref={inputRef} type="text" onBlur={onBlur} maxLength={15} /> : <span onClick={activeInput}>직접 입력</span>}</Tag>
        </ul>
      </Section>
      <div style={{ marginBottom: '20px' }}></div>
      <Section title="오늘의 한마디">
        <Input name="comment" placeholder="목표했던 점이나 아쉬웠던 점을 입력해주세요" />
      </Section>
    </form>
  );
};

export default Write;
