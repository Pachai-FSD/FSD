import React from 'react'
import './App.css'
import PricingCart from './components/PricingCart'

function App() {
const data = [
  {
  'Plan' : 'FREE',
  'Amount' : 0,
  'Features' : [
    {
      'FeaturesTitle' : 'Single User',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : '5GB Storage',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Unlimited Public Projects',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Community Access',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Unlimited Private Projects',
      'isAvailable' : false,
    },
    {
      'FeaturesTitle' : 'Dedicated Phone Support',
      'isAvailable' : false,
    },
    {
      'FeaturesTitle' : 'Free Subdomain',
      'isAvailable' : false,
    },
    {
      'FeaturesTitle' : 'Monthly Status Reports',
      'isAvailable' : false,
    }
  ]
},
{
  'Plan' : 'PLUS',
  'Amount' : 10,
  'Features' : [
    {
      'FeaturesTitle' : 'Single User',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : '5GB Storage',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Unlimited Public Projects',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Community Access',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Unlimited Private Projects',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Dedicated Phone Support',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Free Subdomain',
      'isAvailable' : false,
    },
    {
      'FeaturesTitle' : 'Monthly Status Reports',
      'isAvailable' : false,
    }
  ]
},
{
  'Plan' : 'PRO',
  'Amount' : 20,
  'Features' : [
    {
      'FeaturesTitle' : 'Single User',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : '5GB Storage',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Unlimited Public Projects',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Community Access',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Unlimited Private Projects',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Dedicated Phone Support',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Free Subdomain',
      'isAvailable' : true,
    },
    {
      'FeaturesTitle' : 'Monthly Status Reports',
      'isAvailable' : true,
    }
  ]
}
]
  return (
    <>
      <div className="pricingCart">
        {
          data.map((element, index) =>  <PricingCart data={element} />  )
        }
      </div>
    </>
  )
}

export default App
