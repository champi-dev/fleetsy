import { deliveryStatus } from './enums';

const mockData = generateData();

function generateData() {
  const user = {
    name: 'Admin',
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
      vehicle_id: 0,
      deliveries_id: [0, 1]
    },
    1: {
      id: 1,
      name: 'Carlos',
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