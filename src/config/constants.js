export const CALL_HISTORY = [
    {
        id: 1,
        avatar: 'https://i.pravatar.cc/150?img=67',
        name: 'Jose Jackson',
        email : 'test1@test.com',
        time: '2:30 PM',
        lastCall: 'Incoming',
        missedCount: 3
    },
    {
        id: 2,
        avatar: 'https://i.pravatar.cc/150?img=1',
        name: 'Joan Palmer',
        email : 'test1@test.com',
        time: '2:00 PM',
        lastCall: 'Incoming',
        missedCount: 0
    },
    {
        id: 3,
        avatar: 'https://i.pravatar.cc/150?img=33',
        name: 'Jerry Stewart',
        email : 'test1@test.com',
        time: 'Wednesday',
        lastCall: 'Incoming',
        missedCount: 1
    },
    {
        id: 4,
        avatar: 'https://i.pravatar.cc/150?img=13',
        name: 'Alan Matthews',
        email : 'test1@test.com',
        time: 'Wednesday',
        lastCall: 'Incoming',
        missedCount: 0
    },
    {
        id: 5,
        avatar: 'https://i.pravatar.cc/150?img=32',
        name: 'Amanda Diaz',
        email : 'test1@test.com',
        time: 'Tuesday',
        lastCall: 'Outgoing',
        missedCount: 0
    },
    {
        id: 6,
        avatar: 'https://i.pravatar.cc/150?img=56',
        name: 'Aaron Hoffman',
        email : 'test1@test.com',
        time: '10/3/2021',
        lastCall: 'Incoming',
        missedCount: 1
    },
    {
        id: 7,
        avatar: 'https://i.pravatar.cc/150?img=7',
        name: 'Aaron Hoffman',
        email : 'test1@test.com',
        time: '10/3/2021',
        lastCall: 'Incoming',
        missedCount: 0
    }
];

export const CALL_TYPE = {
    outgoing : 'outgoing',
    incoming : 'incoming'
}

export const CALL_STATUS = {
    calling: 'calling',
    rejected: 'rejected',
    joined: 'joined',
    ended: 'ended',
    missed: 'missed',
    canceled: 'canceled'
};
