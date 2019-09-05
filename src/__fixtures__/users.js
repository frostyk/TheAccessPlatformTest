const users = [
  {
    id: 395,
    name: 'Artem',
    avatar_id: 676,
    university_id: 2,
    balance: 0,
    created_at: '2019-04-22T13:42:19.000Z',
    updated_at: '2019-08-07T15:06:40.000Z',
    banned: false,
    introduction:
      'Hi, let me know if you have any questions. More than happy to help!',
    description: 'Test text fo test text',
    applied: null,
    resive_email: null,
    school: null,
    specialization_id: null,
    region: 'London',
    mailing: false,
    birthday: null,
    user_tags: {
      interests: [
        {
          id: 3686,
          name: 'Test',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_interests_Test',
          pivot: {
            tag_id: 3686,
            user_id: 395,
          },
        },
        {
          id: 3696,
          name: 'React',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_interests_React',
          code: null,
          pivot: {
            tag_id: 3696,
            user_id: 395,
          },
        },
      ],
      countries: [
        {
          id: 4522,
          name: 'United Kingdom',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_countries_United_kingdom',
          code: 'GB',
          pivot: {
            tag_id: 4522,
            user_id: 395,
          },
        },
      ],
      courses_types: [
        {
          id: 4917,
          name: 'BAEcon',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_courses_types_Baecon',
          code: null,
          pivot: {
            tag_id: 4917,
            user_id: 395,
          },
        },
      ],
      subject: [
        {
          id: 4190,
          name: 'English',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_subject_English',
          code: null,
          pivot: {
            tag_id: 4190,
            user_id: 395,
          },
        },
      ],
      student: [
        {
          id: 4779,
          name: 'international',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_student_international',
          code: null,
          pivot: {
            tag_id: 4779,
            user_id: 395,
          },
        },
        {
          id: 4782,
          name: 'First year',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_student_First_year',
          code: null,
          pivot: {
            tag_id: 4782,
            user_id: 395,
          },
        },
      ],
      content: [
        {
          id: 1379,
          name: 'student',
          is_active: true,
          is_hidden: false,
          created_at: '2019-03-18 10:10:16',
          updated_at: '2019-03-18 10:10:16',
          key: '_student',
          code: null,
          pivot: {
            tag_id: 1379,
            user_id: 395,
          },
        },
      ],
      profile: [
        {
          id: 1379,
          name: 'student',
          is_active: true,
          is_hidden: false,
          created_at: '2019-03-18 10:10:16',
          updated_at: '2019-03-18 10:10:16',
          key: '_student',
          code: null,
          pivot: {
            tag_id: 1379,
            user_id: 395,
          },
        },
      ],
    },
    permissions: [
      {
        id: 1,
        name: 'Chat',
        key: 'chat',
        is_enabled: true,
      },
      {
        id: 2,
        name: 'Content',
        key: 'content',
        is_enabled: true,
      },
      {
        id: 3,
        name: 'Faq',
        key: 'faq',
        is_enabled: true,
      },
    ],
    last_activity: '2019-04-22T13:55:49.000Z',
    avatar: {
      id: 676,
      uuid: 'c70a502d-669f-4126-acd5-81e7b8e7540b',
      original:
        'https://fs.tap.tf/images/676/c70a502d-669f-4126-acd5-81e7b8e7540b/original.jpeg',
      sizes: {
        '70x70':
          'https://fs.tap.tf/images/676/c70a502d-669f-4126-acd5-81e7b8e7540b/70x70.jpeg',
        '160x160':
          'https://fs.tap.tf/images/676/c70a502d-669f-4126-acd5-81e7b8e7540b/160x160.jpeg',
        '240x240':
          'https://fs.tap.tf/images/676/c70a502d-669f-4126-acd5-81e7b8e7540b/240x240.jpeg',
        '370x370':
          'https://fs.tap.tf/images/676/c70a502d-669f-4126-acd5-81e7b8e7540b/370x370.jpeg',
        '750x1400':
          'https://fs.tap.tf/images/676/c70a502d-669f-4126-acd5-81e7b8e7540b/750x1400.jpeg',
      },
      created_at: '2019-04-22 13:46:49',
      updated_at: '2019-07-19 08:14:00',
      original_background:
        'https://fs.tap.tf/images/676/c70a502d-669f-4126-acd5-81e7b8e7540b/original_background.jpeg',
    },
    university: {
      id: 2,
      name: 'Julia Test University',
      avatar_id: 1047,
      created_at: '2019-03-05 10:18:19',
      updated_at: '2019-07-25 08:32:16',
      university_url: 'file:///home/tap/Downloads/Demo%20University.html',
      privacy_policy: 'https://git-scm.com',
      invite_code: '93xxcfxmud',
    },
  },
  {
    id: 397,
    name: 'Huion',
    avatar_id: 677,
    university_id: 2,
    balance: 0,
    created_at: '2019-04-22T14:04:34.000Z',
    updated_at: '2019-08-07T15:06:40.000Z',
    banned: false,
    introduction:
      'Hi, let me know if you have any questions. More than happy to help!',
    description: 'Test test test test',
    applied: null,
    resive_email: null,
    school: null,
    specialization_id: null,
    region: 'London',
    mailing: false,
    birthday: null,
    user_tags: {
      interests: [
        {
          id: 3696,
          name: 'React',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_interests_React',
          pivot: {
            tag_id: 3696,
            user_id: 397,
          },
        },
      ],
      courses_types: [
        {
          id: 4793,
          name: 'BChem',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_courses_types_Bchem',
          pivot: {
            tag_id: 4793,
            user_id: 397,
          },
        },
      ],
      countries: [
        {
          id: 4522,
          name: 'United Kingdom',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_countries_United_kingdom',
          code: 'GB',
          pivot: {
            tag_id: 4522,
            user_id: 397,
          },
        },
      ],
      subject: [
        {
          id: 4254,
          name: 'Forestry',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_subject_Forestry',
          code: null,
          pivot: {
            tag_id: 4254,
            user_id: 397,
          },
        },
      ],
      student: [
        {
          id: 4787,
          name: 'Fourth year',
          is_active: true,
          is_hidden: false,
          created_at: '2019-05-10 18:02:12',
          updated_at: '2019-05-10 18:02:12',
          key: '_student_Fourth_year',
          code: null,
          pivot: {
            tag_id: 4787,
            user_id: 397,
          },
        },
      ],
      content: [
        {
          id: 1379,
          name: 'student',
          is_active: true,
          is_hidden: false,
          created_at: '2019-03-18 10:10:16',
          updated_at: '2019-03-18 10:10:16',
          key: '_student',
          code: null,
          pivot: {
            tag_id: 1379,
            user_id: 397,
          },
        },
      ],
      profile: [
        {
          id: 1379,
          name: 'student',
          is_active: true,
          is_hidden: false,
          created_at: '2019-03-18 10:10:16',
          updated_at: '2019-03-18 10:10:16',
          key: '_student',
          code: null,
          pivot: {
            tag_id: 1379,
            user_id: 397,
          },
        },
      ],
    },
    permissions: [
      {
        id: 1,
        name: 'Chat',
        key: 'chat',
        is_enabled: true,
      },
      {
        id: 2,
        name: 'Content',
        key: 'content',
        is_enabled: true,
      },
      {
        id: 3,
        name: 'Faq',
        key: 'faq',
        is_enabled: true,
      },
    ],
    last_activity: '2019-04-26T14:50:11.000Z',
    avatar: {
      id: 677,
      uuid: '4de1a7f1-cf56-42f2-a257-24577b18f5ec',
      original:
        'https://fs.tap.tf/images/677/4de1a7f1-cf56-42f2-a257-24577b18f5ec/original.jpeg',
      sizes: {
        '70x70':
          'https://fs.tap.tf/images/677/4de1a7f1-cf56-42f2-a257-24577b18f5ec/70x70.jpeg',
        '240x240':
          'https://fs.tap.tf/images/677/4de1a7f1-cf56-42f2-a257-24577b18f5ec/240x240.jpeg',
        '160x160':
          'https://fs.tap.tf/images/677/4de1a7f1-cf56-42f2-a257-24577b18f5ec/160x160.jpeg',
        '370x370':
          'https://fs.tap.tf/images/677/4de1a7f1-cf56-42f2-a257-24577b18f5ec/370x370.jpeg',
        '750x1400':
          'https://fs.tap.tf/images/677/4de1a7f1-cf56-42f2-a257-24577b18f5ec/750x1400.jpeg',
      },
      created_at: '2019-04-22 14:05:47',
      updated_at: '2019-07-03 16:27:50',
      original_background:
        'https://fs.tap.tf/images/677/4de1a7f1-cf56-42f2-a257-24577b18f5ec/original_background.jpeg',
    },
    university: {
      id: 2,
      name: 'Julia Test University',
      avatar_id: 1047,
      created_at: '2019-03-05 10:18:19',
      updated_at: '2019-07-25 08:32:16',
      university_url: 'file:///home/tap/Downloads/Demo%20University.html',
      privacy_policy: 'https://git-scm.com',
      invite_code: '93xxcfxmud',
    },
  },
]

export default users;
