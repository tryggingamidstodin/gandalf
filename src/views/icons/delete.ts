export const createDelete = m =>
    m(
        'svg.delete-icon',
        {
            height: '64',
            viewBox: '0 0 64 64',
            width: '64',
        },
        [
            m('g', [
                m(
                    'g',
                    {
                        transform: 'translate(232.000000, 228.000000)',
                    },
                    [
                        m('polygon', {
                            points:
                                '-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1    ',
                        }),
                        m('path', {
                            d:
                                'M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3     c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6',
                        }),
                        m('path', {
                            d:
                                'M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18     c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1',
                        }),
                    ]
                ),
            ]),
        ]
    )