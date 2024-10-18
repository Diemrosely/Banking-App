import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance bg-total-balance-gradient bg-opacity-50 p-6 rounded-lg' >
        <div className='total-balance-chart'>
            <DoughnutChart accounts={accounts} />
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2 text-white'>
                Bank Accounts: {totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
            <p className='total-balance-label text-white'>
                Total Current Balance
            </p>
            <div className='total-balance-amount flex-center gap-2 text-white'>
                <AnimatedCounter amount={totalCurrentBalance} />
            </div>
        </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox