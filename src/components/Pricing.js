import React from 'react'
import { Card } from './Card'


export const Pricing = () => {
  return (
    <div className='cards mt-3 text-center' id='pricing'>
      <div className='mb-3'> 
      <span className='heading'>Pricing</span>
      <div className='dots-wrapper'>
        <div className='dots'></div>
        <div className='dots'></div>
        <div className='dots'></div>
      </div>
      </div>
      <div className='row text-center'>

        <div className='col-md-4'>
          <div className='card-container'>
          < Card
          imageUrl="https://img.freepik.com/free-photo/attractive-fit-girl-doing-plank-using-dumbbells-while-exercising-mat-living-room_343059-837.jpg?w=1060&t=st=1685639068~exp=1685639668~hmac=e384e7daaba69e3c8dc9143b597d7915fb1d970dbe2d2cb2ad6514dc84502860"
          title="Home Workout"
          description="Home workout refers to a physical exercise routine that is performed within the confines of one's own home, without the need for specialized gym equipment or facilities."
          />
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card-container'>
          <Card imageUrl="https://img.freepik.com/free-photo/woman-holding-weights-near-barbells_651396-1617.jpg?w=1060&t=st=1685639106~exp=1685639706~hmac=3a5d82174e040c14ca03fd8304f2d54988fd80ffd1b5d70b5309daee793ab065"
          title="Gym Workout"
          description="Gym workouts involve physical exercises performed in a fitness facility, targeting various muscle groups and improving cardiovascular fitness to enhance strength"
          />
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card-container'>
          <Card imageUrl="https://img.freepik.com/free-photo/woman-doing-workout-gym-with-trainer_1303-25221.jpg?w=1060&t=st=1685638623~exp=1685639223~hmac=c6c2db115326aebbe4b90ce4503362c9ebc82738e321d6f2b038a6c57e512e20"
          title="Gym Workout With Trainer"
          description="Trainers play a crucial role in the gym by providing guidance, personalized workout plans, and ensuring proper form and technique, promoting safety for individuals of all fitness levels"
          />
          </div>
        </div>
        </div>

      </div>
  
  )
}
