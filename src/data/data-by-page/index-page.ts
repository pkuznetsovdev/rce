export default {
  options: [
    {
      image: {
        src: "https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea057.jpg",
        srcSet: {
          xs: "https://www.investopedia.com/thmb/9wQ2rMbSd2QX2qniP7JRHZTBBvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/option-597b2316d56041998fc9e48583fea058.jpg",
        }
      },
      title: "Option #1",
      // TODO FAQ: How to make it work?
      // title: {
      //   rawContent: "Option #1",
      // },
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