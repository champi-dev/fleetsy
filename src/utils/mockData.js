import { deliveryStatus } from './enums';

const mockData = generateData();

function generateData() {
  const user = {
    name: 'Admin User',
    avatarUrl: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
  };

  const vehicles = {
    0: {
      id: 0,
      plate: 'abc',
      model: '2010'
    },
    1: {
      id: 1,
      plate: 'qwe',
      model: '2012'
    }
  };

  const drivers = {
    0: {
      id: 0,
      name: 'Andres',
      avatarUrl: 'https://api.thedrive.com/wp-content/uploads/2019/09/best-truck-driver-headsets.jpg?quality=85',
      vehicle_id: 0,
      deliveries_id: [0, 1]
    },
    1: {
      id: 1,
      name: 'Carlos',
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAsWmc_9O1yUQkA6M26XWlcZNRfkWbcuXH11qJToKFZATrmttJw&s',
      vehicle_id: 1,
      deliveries_id: [2]
    }
  };

  const deliveries = {
    0: {
      id: 0,
      status: deliveryStatus.completed,
      origin_address: 'Fake address 1234',
      destination_address: 'Ciq. 54 #45 - 32',
      driver_id: 0
    },
    1: {
      id: 1,
      status: deliveryStatus.onTrack,
      origin_address: 'Fake address 654',
      destination_address: 'Ciq. 78 #20 - 09',
      driver_id: 0
    },
    2: {
      id: 2,
      status: deliveryStatus.onTrack,
      origin_address: 'Cll 33 # 56 - 33',
      destination_address: 'Cll 80 # 20 - 56',
      driver_id: 1
    },
    3: {
      id: 3,
      status: deliveryStatus.pending,
      origin_address: 'Cll 23 # 22 - 33',
      destination_address: 'Cll 80 # 26 - 46',
      driver_id: 1
    }
  };

  return {
    user,
    vehicles,
    drivers,
    deliveries
  };
}

export default mockData;