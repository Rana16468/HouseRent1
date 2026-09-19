import HouseListringTrack from '@/components/MyHouseList/HouseListringTrack'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/live-house-listing')({
  component: HouseListringTrack,
})

