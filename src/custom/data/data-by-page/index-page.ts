export default {
    header: {
        rawContent: "React Content Elements",
        modifiers: ["main-header"],
    },
    subHeader: "Your first Web Content Factory",
    textBlocks: [
        {
            title: 'Web Content Development(WCD)',
            text: {
                rawContent:
                    '<b>Web Content Development</b> is appliance of your  <i>content data</i> to the digital page' +
                    '</br>It stands for CRUD operations with the <i>content data</i> of the page',
            },
            caption: ''
        },
        {
            title: 'How did you solve it before?',
            items: [
                'Use UX lib or develop basic structures internally to get basic reusable structures',
                'Apply UI lib or develop style system internally to describe the outlook of the code structures',
                'Maintain the code structures and style system on a daily base',
                'Refactor it due to changed requirements'
            ],
            caption: undefined
        },
        {
            title: 'Why bother?',
            items: [
                'Custom approach for basic structures architecture by company/team/developer',
                'Custom approach for style system by company/team/developer',
                'Duplicating same patterns by project',
                'Endless refactoring to meet new requirements',
            ],
            caption: undefined
        },
        {
            title: 'Why React Content Elements?',
            items: [
                'Formalized HTML and CSS development pattern',
                'Predefined and reusable basic HTML structures for content elements',
                'Single and simple CSS styles structure',
                'Scalable with custom solutions both in HTML and CSS structures',
            ],
            caption: undefined
        },
    ],
    options: [
        {
            image: {
                src: "https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",
                srcSet: {
                    xs: "https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea058.jpg",
                }
            },
            // title: "Option #1",
            // TODO FAQ: How to make it work?
            title: {
                rawContent: "Option #1",
            },
            description: "Description of option"
        },
        {
            image: "https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",
            title: "Option #2",
            description: "Description of option"
        },
        {
            image: "https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",
            title: "Option #3",
            description: "Description of option"
        },
    ]
} as const;