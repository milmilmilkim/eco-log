import PageTitle from '../../components/PageTitle';
import Input from '../../components/Form/Input';
import styled from 'styled-components';
import axios from '../../config/Axios';
import { useState, useEffect, useCallback } from 'react';
import FriendItem from '../../components/Friend/Search/FriendItem';
import { FriendItem as FriendItemType } from '../../typing/common';
import { recoilMyProfileState } from '../../state/recoilLoginState';
import { useRecoilState } from 'recoil';

const Search = () => {
  const [myProfile] = useRecoilState(recoilMyProfileState);

  const [searchList, setSearchList] =
    useState<Array<FriendItemType> | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget.searchInput as HTMLFormElement;

    searchFriend(target.value as string);
  };

  const searchFriend = useCallback(
    async (keyword: string = '') => {
      const { data } = await axios.get('/api/user/search', {
        params: {
          keyword,
        },
      });

      const filteredData = data?.filter(
        (item: FriendItemType) =>
          item.userId.toString() !== myProfile.userId.toString()
      );
      setSearchList(filteredData);
    },
    [myProfile.userId]
  );

  const followNewFriend = useCallback(async (userId: Number) => {
    const {data} = await axios.post('/api/user/follow', {
      targetId: userId.toString()
    })
    console.log(data);
  }, []);

  useEffect(() => {
    searchFriend();
  }, [searchFriend]);

  return (
    <>
      <PageTitle title='동료 검색' prevButton />
      <StyledSearch>
        <form onSubmit={onSubmit}>
          <Input name='searchInput' placeholder='동료의 닉네임을 입력하세요' />
        </form>
      </StyledSearch>
      {searchList ? (
        searchList.length > 0 ? (
          <>
            {searchList.map((item: FriendItemType, index: number) => {
              return (
                <FriendItem {...item} key={index}>
                  <>
                    {!item.alreadyFollow && (
                      <FollowButton
                        onClick={() => followNewFriend(item.userId)}
                      >
                        팔로우
                      </FollowButton>
                    )}
                  </>
                </FriendItem>
              );
            })}
          </>
        ) : (
          '검색 결과 없음'
        )
      ) : (
        'loading..'
      )}
    </>
  );
};

const StyledSearch = styled.div`
  width: 90%;
`;

const FollowButton = styled.button`
  background-color: #fff;
  border: 2px solid ${(props) => props.theme.color.lightColor};
  color: ${(props) => props.theme.color.primaryColor};
  border-radius: 15px;
  font-weight: bold;
  padding: 5px 10px;
`;

export default Search;
