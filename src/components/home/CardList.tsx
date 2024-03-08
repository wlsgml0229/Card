import { useInfiniteQuery, useIsFetching } from "react-query"
import ListRow from "@shared/ListRow"
import { getCards } from "@/remote/card"
import InfiniteScroll from "react-infinite-scroll-component"
import { useCallback } from "react"
import Badge from "@shared/Badge"
import { useNavigate } from "react-router-dom"

const CardList = () => {
  const navigate = useNavigate()
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
        scrollThreshold="100px"
      >
        <ul>
          {cards.map((card, idx) => {
            return (
              <ListRow
                key={card.id}
                contents={
                  <ListRow.Texts title={`${idx + 1}위`} subTitle={card.name} />
                }
                right={card?.payback && <Badge label={card.payback} />}
                withArrow={true}
                onClick={() => {
                  console.log("click")
                  navigate(`/card/${card.id}`)
                }}
              />
            )
          })}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default CardList
