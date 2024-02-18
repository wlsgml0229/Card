import { useInfiniteQuery, useIsFetching } from "react-query"
import ListRow from "@shared/ListRow"
import { getCards } from "@/remote/card"
import InfiniteScroll from "react-infinite-scroll-component"
import { useCallback } from "react"

const CardList = () => {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["cards"],
    ({ pageParam }) => {
      return getCards(pageParam)
    },
    {
      getNextPageParam: (snapShot) => {
        return snapShot.lastVisible
      },
    },
  )

  const loadMore = useCallback(() => {
    if (!hasNextPage || isFetching) return
    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  if (!data) {
    return null
  }

  const cards = data?.pages.flatMap(({ items }) => items)

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
      >
        {cards.map((card, idx) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${idx + 1}위`} subTitle={card.name} />
              }
              right={card?.payback ? <div>{card.payback}</div> : null}
              withArrow={true}
            ></ListRow>
          )
        })}
      </InfiniteScroll>
    </div>
  )
}

export default CardList
