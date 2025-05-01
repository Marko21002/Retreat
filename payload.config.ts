import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { buildConfig } from 'payload'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    {
        slug: 'places',
        fields: [
          {
            name: 'country',
            type: 'text',
          },
          {
            name: 'city',
            type: 'text',
          },
        ],
      },
      {
        slug: 'portfolio',
        fields: [
          {
            name: 'heading',
            type: 'text',
            required: true,
          },
          {
            name: 'description',
            type: 'textarea',
          },
          {
            name: 'tags',
            type: 'array',
            fields: [
              {
                name: 'label',
                type: 'text',
                required: true,
              },
              {
                name: 'url',
                type: 'text',
                required: true,
              },
            ],
          },
          {
            name: 'image',
            type: 'group',
            fields: [
              {
                name: 'src',
                type: 'text',
                required: true,
              },
              {
                name: 'alt',
                type: 'text',
              },
            ],
          },
        ],
      },
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})