export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            title: 'Type',
            name: 'type',
            type: 'string',
            initialValue: 'front-end',
            options: {
              list: [
                { title: 'Front-End', value: 'front-end' },
                { title: 'Back-End', value: 'back-end' },
                { title: 'Miscellaneous',  value: 'miscellaneous' },
              ],
            }
        },
    ]
}