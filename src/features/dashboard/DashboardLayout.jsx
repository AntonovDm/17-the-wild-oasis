import styled from 'styled-components'
import Spinner from '../../ui/Spinner'
import Stats from './Stats'
import { useRecentStays } from './useRecentStays'
import { useRecentBookings } from './useRecentBookings'
import { useCabins } from '../cabins/useCabins'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings()
  const {
    stays,
    confirmedStays,
    isLoading: isLoadingStays,
    numDays,
  } = useRecentStays()
  const { cabins, isLoading: isLoadingCabin } = useCabins()

  if (isLoadingBookings || isLoadingStays || isLoadingCabin) return <Spinner />

  console.log(bookings, confirmedStays)

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
