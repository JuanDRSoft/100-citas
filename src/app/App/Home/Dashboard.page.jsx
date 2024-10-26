import Calendar from '../../../components/Calendar/Calendar'
import CitasList from './components/CitasList'

const Dashboard = () => {
  return (
    <div className="grid gap-5 px-5 pb-10 h-[88vh] overflow-y-auto">
      <Calendar />
      <CitasList />
    </div>
  )
}

export default Dashboard
