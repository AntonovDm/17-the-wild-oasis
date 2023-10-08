import { formatCurrency } from '../../utils/helpers'
import Stat from './Stat'
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2'

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBooking = bookings?.length

  // 2.
  const sales = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0)

  // 3.
  const chekins = confirmedStays.length

  // 4.
  // num checked in nights / all available nights (num days * num cabins)
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount)

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={numBooking}
        color={'blue'}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
        color={'green'}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check ins"
        value={chekins}
        color={'indigo'}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        value={Math.round(occupation * 100) + '%'}
        color={'yellow'}
      />
    </>
  )
}
export default Stats
