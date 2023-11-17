export const timeSlots = (): any => {
  const x = 15 //minutes interval
  const times: any = [] // time array
  let tt = 0 // start time

  //loop to increment the time and push results in array
  for (let i = 0; tt < 24 * 60; i++) {
    const hh = Math.floor(tt / 60) // getting hours of day in 0-24 format
    const mm = tt % 60 // getting minutes of the hour in 0-55 format
    times[i] = ('0' + (hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2)
    tt = tt + x
  }

  return times
}

// timeSlots()?.map((timeslot: any)=> ({

// }))

export const mockData = [
  {
    timeslot: '01:15',
    date: '7th-Oct',
    data: [
      {
        code: 'SAND100003R',
        dropoff_counter: {
          code: 'LO100006',
          name: 'San Diego',
          attribute: {
            location_code: 'SAND'
          }
        },
        guest_id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
        pickup_address: {
          data: {
            code: 'LO100006',
            image_url: '',
            lid: '',
            coordinates: {
              lng: -117.1933038,
              lat: 32.7338006
            },
            status_date_activity: {
              Draft: 1666269083564,
              Active: 1666269144164
            },
            location_extra_ids: ['7fd0bd76-c2fa-488f-8e96-830195daca82'],
            type: 'Counter',
            created_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            version: 5,
            schema_version: 'v4',
            location_extras: [],
            entity_code: '',
            updated_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            name: 'San Diego',
            updated_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_date: 1666269083568,
            updated_date: 1666269144642,
            id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
            status: 'Active'
          },
          provider: 'gorentals',
          location_code: 'SAND',
          id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
          display_name: 'San Diego'
        },
        id: 'f82648b3-c007-4976-acc5-2753897bc8e1',
        attribute: {
          dropoff_timezone: 'America/Los_Angeles',
          notes: '',
          duration_type: '24-hour',
          category_status: 'Reservation',
          dropoff_time: 18000000,
          vehicle_class_location_code: 'SAND',
          guest_tier: 'Non Member Guest',
          pickup_timezone: 'America/Los_Angeles',
          counter_type: 'Pickup',
          notification: [
            {
              primary_phone_number: '1436876869',
              last_name: 'Grey',
              primary_email: 'jeangrey@gmail.com',
              id: 'guest-4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
              contact_id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
              first_name: 'Jean',
              entity: 'guest',
              content: '',
              selected: false
            }
          ],
          category_strings: ['Reservation'],
          pickup_date: 1666195200000,
          duration_hour: 0,
          dropoff_date: 1666281600000,
          duration_days: 1,
          booking_type: {
            data: {
              duration_type: '24-hour',
              name: 'Retail',
              id: '5c6ccc09-5124-4ec2-b10e-c547dea5a8ac'
            },
            id: '5c6ccc09-5124-4ec2-b10e-c547dea5a8ac',
            label: 'Retail'
          },
          categories: [
            {
              name: 'Reservation',
              category_type: 'Reservation',
              id: 'reservation'
            }
          ],
          pickup_time: 82800000,
          category: 'Reservation',
          addon_charges: {},
          entity: 'booking',
          vehicle_search_selected_counter_name: 'San Diego'
        },
        created_date: 1666273447367,
        updated_date: 1666277421227,
        dropoff_address: {
          data: {
            code: 'LO100006',
            image_url: '',
            lid: '',
            coordinates: {
              lng: -117.1933038,
              lat: 32.7338006
            },
            status_date_activity: {
              Draft: 1666269083564,
              Active: 1666269144164
            },
            location_extra_ids: ['7fd0bd76-c2fa-488f-8e96-830195daca82'],
            type: 'Counter',
            created_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            version: 5,
            schema_version: 'v4',
            location_extras: [],
            entity_code: '',
            updated_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            name: 'San Diego',
            updated_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_date: 1666269083568,
            updated_date: 1666269144642,
            id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
            status: 'Active'
          },
          provider: 'gorentals',
          location_code: 'SAND',
          id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
          display_name: 'San Diego'
        },
        pickup_counter: {
          code: 'LO100006',
          name: 'San Diego',
          attribute: {
            location_code: 'SAND'
          }
        },
        booking_vehicle_classes: [
          {
            vehicle_class_id: '4dc7f6c0-0fc7-465a-b631-a90146b7b4f8',
            is_primary: true,
            name: 'Original',
            booking_vehicle_ids: ['f95c53d1-384d-47ba-936b-a7c20615a0fb'],
            id: '08abe81f-e234-4b48-9fa0-1818cfd304fe'
          },
          {
            vehicle_class_id: '',
            is_primary: false,
            name: 'Upgrade',
            booking_vehicle_ids: [],
            id: '170ce47b-956e-459c-b1c4-84bf2963deb7'
          }
        ],
        entity: 'booking',
        guest: {
          primary_phone_number: '1436876869',
          last_name: 'Grey',
          primary_email: 'jeangrey@gmail.com',
          id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
          first_name: 'Jean'
        },
        rates: [
          {
            amount: 59.989999999999995,
            name: 'Daily Rate',
            sub_total: 59.989999999999995,
            id: '47be57b5-039c-405d-9eb4-9aa7924a62b3'
          }
        ]
      },
      {
        code: 'SAND100003R',
        dropoff_counter: {
          code: 'LO100006',
          name: 'San Diego',
          attribute: {
            location_code: 'SAND'
          }
        },
        guest_id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
        pickup_address: {
          data: {
            code: 'LO100006',
            image_url: '',
            lid: '',
            coordinates: {
              lng: -117.1933038,
              lat: 32.7338006
            },
            status_date_activity: {
              Draft: 1666269083564,
              Active: 1666269144164
            },
            location_extra_ids: ['7fd0bd76-c2fa-488f-8e96-830195daca82'],
            type: 'Counter',
            created_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            version: 5,
            schema_version: 'v4',
            location_extras: [],
            entity_code: '',
            updated_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            name: 'San Diego',
            updated_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_date: 1666269083568,
            updated_date: 1666269144642,
            id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
            status: 'Active'
          },
          provider: 'gorentals',
          location_code: 'SAND',
          id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
          display_name: 'San Diego'
        },
        id: 'f82648b3-c007-4976-acc5-2753897bc8e1',
        attribute: {
          dropoff_timezone: 'America/Los_Angeles',
          notes: '',
          duration_type: '24-hour',
          category_status: 'Reservation',
          dropoff_time: 18000000,
          vehicle_class_location_code: 'SAND',
          guest_tier: 'Non Member Guest',
          pickup_timezone: 'America/Los_Angeles',
          counter_type: 'Pickup',
          notification: [
            {
              primary_phone_number: '1436876869',
              last_name: 'Grey',
              primary_email: 'jeangrey@gmail.com',
              id: 'guest-4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
              contact_id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
              first_name: 'Jean',
              entity: 'guest',
              content: '',
              selected: false
            }
          ],
          category_strings: ['Reservation'],
          pickup_date: 1666195200000,
          duration_hour: 0,
          dropoff_date: 1666281600000,
          duration_days: 1,
          booking_type: {
            data: {
              duration_type: '24-hour',
              name: 'Retail',
              id: '5c6ccc09-5124-4ec2-b10e-c547dea5a8ac'
            },
            id: '5c6ccc09-5124-4ec2-b10e-c547dea5a8ac',
            label: 'Retail'
          },
          categories: [
            {
              name: 'Reservation',
              category_type: 'Reservation',
              id: 'reservation'
            }
          ],
          pickup_time: 82800000,
          category: 'Reservation',
          addon_charges: {},
          entity: 'booking',
          vehicle_search_selected_counter_name: 'San Diego'
        },
        created_date: 1666273447367,
        updated_date: 1666277421227,
        dropoff_address: {
          data: {
            code: 'LO100006',
            image_url: '',
            lid: '',
            coordinates: {
              lng: -117.1933038,
              lat: 32.7338006
            },
            status_date_activity: {
              Draft: 1666269083564,
              Active: 1666269144164
            },
            location_extra_ids: ['7fd0bd76-c2fa-488f-8e96-830195daca82'],
            type: 'Counter',
            created_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            version: 5,
            schema_version: 'v4',
            location_extras: [],
            entity_code: '',
            updated_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            name: 'San Diego',
            updated_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_date: 1666269083568,
            updated_date: 1666269144642,
            id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
            status: 'Active'
          },
          provider: 'gorentals',
          location_code: 'SAND',
          id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
          display_name: 'San Diego'
        },
        pickup_counter: {
          code: 'LO100006',
          name: 'San Diego',
          attribute: {
            location_code: 'SAND'
          }
        },
        booking_vehicle_classes: [
          {
            vehicle_class_id: '4dc7f6c0-0fc7-465a-b631-a90146b7b4f8',
            is_primary: true,
            name: 'Original',
            booking_vehicle_ids: ['f95c53d1-384d-47ba-936b-a7c20615a0fb'],
            id: '08abe81f-e234-4b48-9fa0-1818cfd304fe'
          },
          {
            vehicle_class_id: '',
            is_primary: false,
            name: 'Upgrade',
            booking_vehicle_ids: [],
            id: '170ce47b-956e-459c-b1c4-84bf2963deb7'
          }
        ],
        entity: 'booking',
        guest: {
          primary_phone_number: '1436876869',
          last_name: 'Grey',
          primary_email: 'jeangrey@gmail.com',
          id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
          first_name: 'Jean'
        },
        rates: [
          {
            amount: 59.989999999999995,
            name: 'Daily Rate',
            sub_total: 59.989999999999995,
            id: '47be57b5-039c-405d-9eb4-9aa7924a62b3'
          }
        ]
      },
      {
        code: 'SAND100003R',
        dropoff_counter: {
          code: 'LO100006',
          name: 'San Diego',
          attribute: {
            location_code: 'SAND'
          }
        },
        guest_id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
        pickup_address: {
          data: {
            code: 'LO100006',
            image_url: '',
            lid: '',
            coordinates: {
              lng: -117.1933038,
              lat: 32.7338006
            },
            status_date_activity: {
              Draft: 1666269083564,
              Active: 1666269144164
            },
            location_extra_ids: ['7fd0bd76-c2fa-488f-8e96-830195daca82'],
            type: 'Counter',
            created_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            version: 5,
            schema_version: 'v4',
            location_extras: [],
            entity_code: '',
            updated_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            name: 'San Diego',
            updated_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_date: 1666269083568,
            updated_date: 1666269144642,
            id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
            status: 'Active'
          },
          provider: 'gorentals',
          location_code: 'SAND',
          id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
          display_name: 'San Diego'
        },
        id: 'f82648b3-c007-4976-acc5-2753897bc8e1',
        attribute: {
          dropoff_timezone: 'America/Los_Angeles',
          notes: '',
          duration_type: '24-hour',
          category_status: 'Reservation',
          dropoff_time: 18000000,
          vehicle_class_location_code: 'SAND',
          guest_tier: 'Non Member Guest',
          pickup_timezone: 'America/Los_Angeles',
          counter_type: 'Pickup',
          notification: [
            {
              primary_phone_number: '1436876869',
              last_name: 'Grey',
              primary_email: 'jeangrey@gmail.com',
              id: 'guest-4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
              contact_id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
              first_name: 'Jean',
              entity: 'guest',
              content: '',
              selected: false
            }
          ],
          category_strings: ['Reservation'],
          pickup_date: 1666195200000,
          duration_hour: 0,
          dropoff_date: 1666281600000,
          duration_days: 1,
          booking_type: {
            data: {
              duration_type: '24-hour',
              name: 'Retail',
              id: '5c6ccc09-5124-4ec2-b10e-c547dea5a8ac'
            },
            id: '5c6ccc09-5124-4ec2-b10e-c547dea5a8ac',
            label: 'Retail'
          },
          categories: [
            {
              name: 'Reservation',
              category_type: 'Reservation',
              id: 'reservation'
            }
          ],
          pickup_time: 82800000,
          category: 'Reservation',
          addon_charges: {},
          entity: 'booking',
          vehicle_search_selected_counter_name: 'San Diego'
        },
        created_date: 1666273447367,
        updated_date: 1666277421227,
        dropoff_address: {
          data: {
            code: 'LO100006',
            image_url: '',
            lid: '',
            coordinates: {
              lng: -117.1933038,
              lat: 32.7338006
            },
            status_date_activity: {
              Draft: 1666269083564,
              Active: 1666269144164
            },
            location_extra_ids: ['7fd0bd76-c2fa-488f-8e96-830195daca82'],
            type: 'Counter',
            created_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            version: 5,
            schema_version: 'v4',
            location_extras: [],
            entity_code: '',
            updated_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            name: 'San Diego',
            updated_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_date: 1666269083568,
            updated_date: 1666269144642,
            id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
            status: 'Active'
          },
          provider: 'gorentals',
          location_code: 'SAND',
          id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
          display_name: 'San Diego'
        },
        pickup_counter: {
          code: 'LO100006',
          name: 'San Diego',
          attribute: {
            location_code: 'SAND'
          }
        },
        booking_vehicle_classes: [
          {
            vehicle_class_id: '4dc7f6c0-0fc7-465a-b631-a90146b7b4f8',
            is_primary: true,
            name: 'Original',
            booking_vehicle_ids: ['f95c53d1-384d-47ba-936b-a7c20615a0fb'],
            id: '08abe81f-e234-4b48-9fa0-1818cfd304fe'
          },
          {
            vehicle_class_id: '',
            is_primary: false,
            name: 'Upgrade',
            booking_vehicle_ids: [],
            id: '170ce47b-956e-459c-b1c4-84bf2963deb7'
          }
        ],
        entity: 'booking',
        guest: {
          primary_phone_number: '1436876869',
          last_name: 'Grey',
          primary_email: 'jeangrey@gmail.com',
          id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
          first_name: 'Jean'
        },
        rates: [
          {
            amount: 59.989999999999995,
            name: 'Daily Rate',
            sub_total: 59.989999999999995,
            id: '47be57b5-039c-405d-9eb4-9aa7924a62b3'
          }
        ]
      }
    ]
  },
  {
    timeslot: '02:45',
    date: '9th-Oct',
    data: [
      {
        code: 'SAND100003R',
        dropoff_counter: {
          code: 'LO100006',
          name: 'San Diego',
          attribute: {
            location_code: 'SAND'
          }
        },
        guest_id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
        pickup_address: {
          data: {
            code: 'LO100006',
            image_url: '',
            lid: '',
            coordinates: {
              lng: -117.1933038,
              lat: 32.7338006
            },
            status_date_activity: {
              Draft: 1666269083564,
              Active: 1666269144164
            },
            location_extra_ids: ['7fd0bd76-c2fa-488f-8e96-830195daca82'],
            type: 'Counter',
            created_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            version: 5,
            schema_version: 'v4',
            location_extras: [],
            entity_code: '',
            updated_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            name: 'San Diego',
            updated_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_date: 1666269083568,
            updated_date: 1666269144642,
            id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
            status: 'Active'
          },
          provider: 'gorentals',
          location_code: 'SAND',
          id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
          display_name: 'San Diego'
        },
        id: 'f82648b3-c007-4976-acc5-2753897bc8e1',
        attribute: {
          dropoff_timezone: 'America/Los_Angeles',
          notes: '',
          duration_type: '24-hour',
          category_status: 'Reservation',
          dropoff_time: 18000000,
          vehicle_class_location_code: 'SAND',
          guest_tier: 'Non Member Guest',
          pickup_timezone: 'America/Los_Angeles',
          counter_type: 'Pickup',
          notification: [
            {
              primary_phone_number: '1436876869',
              last_name: 'Grey',
              primary_email: 'jeangrey@gmail.com',
              id: 'guest-4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
              contact_id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
              first_name: 'Jean',
              entity: 'guest',
              content: '',
              selected: false
            }
          ],
          category_strings: ['Reservation'],
          pickup_date: 1666195200000,
          duration_hour: 0,
          dropoff_date: 1666281600000,
          duration_days: 1,
          booking_type: {
            data: {
              duration_type: '24-hour',
              name: 'Retail',
              id: '5c6ccc09-5124-4ec2-b10e-c547dea5a8ac'
            },
            id: '5c6ccc09-5124-4ec2-b10e-c547dea5a8ac',
            label: 'Retail'
          },
          categories: [
            {
              name: 'Reservation',
              category_type: 'Reservation',
              id: 'reservation'
            }
          ],
          pickup_time: 82800000,
          category: 'Reservation',
          addon_charges: {},
          entity: 'booking',
          vehicle_search_selected_counter_name: 'San Diego'
        },
        created_date: 1666273447367,
        updated_date: 1666277421227,
        dropoff_address: {
          data: {
            code: 'LO100006',
            image_url: '',
            lid: '',
            coordinates: {
              lng: -117.1933038,
              lat: 32.7338006
            },
            status_date_activity: {
              Draft: 1666269083564,
              Active: 1666269144164
            },
            location_extra_ids: ['7fd0bd76-c2fa-488f-8e96-830195daca82'],
            type: 'Counter',
            created_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            version: 5,
            schema_version: 'v4',
            location_extras: [],
            entity_code: '',
            updated_by: {
              last_name: 'Admin',
              first_name: 'Super'
            },
            name: 'San Diego',
            updated_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_by_id: '24ef3333-e6b6-47f7-988e-22223f0cd477',
            created_date: 1666269083568,
            updated_date: 1666269144642,
            id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
            status: 'Active'
          },
          provider: 'gorentals',
          location_code: 'SAND',
          id: 'fb4e7b93-4a24-4e6b-99ed-815411574fb7',
          display_name: 'San Diego'
        },
        pickup_counter: {
          code: 'LO100006',
          name: 'San Diego',
          attribute: {
            location_code: 'SAND'
          }
        },
        booking_vehicle_classes: [
          {
            vehicle_class_id: '4dc7f6c0-0fc7-465a-b631-a90146b7b4f8',
            is_primary: true,
            name: 'Original',
            booking_vehicle_ids: ['f95c53d1-384d-47ba-936b-a7c20615a0fb'],
            id: '08abe81f-e234-4b48-9fa0-1818cfd304fe'
          },
          {
            vehicle_class_id: '',
            is_primary: false,
            name: 'Upgrade',
            booking_vehicle_ids: [],
            id: '170ce47b-956e-459c-b1c4-84bf2963deb7'
          }
        ],
        entity: 'booking',
        guest: {
          primary_phone_number: '1436876869',
          last_name: 'Grey',
          primary_email: 'jeangrey@gmail.com',
          id: '4ee9c8d2-52e3-4c39-bf14-39d4cef21b8a',
          first_name: 'Jean'
        },
        rates: [
          {
            amount: 59.989999999999995,
            name: 'Daily Rate',
            sub_total: 59.989999999999995,
            id: '47be57b5-039c-405d-9eb4-9aa7924a62b3'
          }
        ]
      }
    ]
  }
]
