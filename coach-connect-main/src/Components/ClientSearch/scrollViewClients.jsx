import { clientListItem } from './clientCard';
import { RegularList } from '../../ListMapping/regularList';
import { RoundedSearchBar } from './roundedSearchBar';

const client = [{
    name: 'Jeremiah Williams',
    age: 22,
    race: 'Half-marathon',
    goal: 'Sub 1hr 45min'
  }, {
    name: 'Danica Barnes',
    age: 21,
    race: '50k',
    goal: 'Finish'
  }, {
    name: 'Evan Davidson',
    age: 24,
    race: 'Ironman',
    goal: 'Convince Kara'
  }, {
    name: 'Kara Travers',
    age: 24,
    race: 'N/A',
    goal: 'Avoid caving to peer pressure'
  }
  ]

export const ScrollViewClients = () => {
    return (
      <div className="bg-off-white h-screen w-auto pt-16 shadow-rs" style={{
        position: "relative",
        left: 0,
        top: 0,
      
      }}>
        <RoundedSearchBar />
        <RegularList
          items={client}
          resourceName="client"
          itemComponent={clientListItem} />
      </div>
    )
    
}
