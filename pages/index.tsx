import { ReactElement } from 'react';

import { Item } from '@/apis/notice/notice.type';
import { useGetNoticeList } from '@/apis/notice/useNoticeService';
import PostList from '@/components/feature/Post/PostList/PostList';
import Pagination from '@/components/feature/pagination/pagination';
import usePagination from '@/hooks/usePagination';
import OnlytagLayout from '@/layouts/OnlytageLayout';
import styles from '@/pages/index.module.scss';

const ITEMS_PER_PAGE = 6; // 페이지 당 아이템 수

function Home() {
  const { currentPage, totalPages, onPageChange, currentItems } = usePagination(useGetNoticeList, ITEMS_PER_PAGE);
  const { data } = useGetNoticeList({ limit: 3 });
  const twoDimensionalArray = currentItems.map((item: Item) => {
    return item.item;
  });
  const customList = data.items.map((item: Item) => {
    return item.item;
  });
  console.log(customList);
  return (
    <>
      <section className={styles.customContainer}>
        <article>
          <h2>맞춤 공고</h2>
          {/* 임시 데이터 사용 */}
          <PostList datas={customList} />
        </article>
      </section>
      <section className={styles.noticeContainer}>
        <PostList datas={twoDimensionalArray} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </section>
    </>
  );
}

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <OnlytagLayout>{page}</OnlytagLayout>;
};
