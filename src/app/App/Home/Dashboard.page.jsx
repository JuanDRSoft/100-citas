import Calendar from '../../../components/Calendar/Calendar'
import CitasList from './components/CitasList'

const Dashboard = () => {
  return (
    <div className="grid gap-5 px-5">
      <Calendar />
      <CitasList />
    </div>
  )
}

export default Dashboard
