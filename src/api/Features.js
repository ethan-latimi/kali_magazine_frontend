// images
import blogImg1 from "../images/features/img-1.jpg";
import blogImg2 from "../images/features/img-2.jpg";
import blogImg3 from "../images/features/img-3.jpg";

import blogSingleImg1 from "../images/features/features-single/img-1.jpg";
import blogSingleImg2 from "../images/features/features-single/img-2.jpg";
import blogSingleImg3 from "../images/features/features-single/img-3.jpg";



const Features = [
    {
        id: '1',
        title: 'Full Body Dumbbell Workout Results Achieved',
        slug:"Full-Body",
        screens: blogImg1,
        thumb:'Fitness',
        description: 'You can customize the view Blog posts with a simple mouse click and immediately see the result of your changes.',
        author: 'Marilou Kelleher',
        authorTitle:'Sineor Consultant',
        create_at: '25 Dec, 2023',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Positioning your company as an authority ',
        slug:"Positioning-your",
        screens: blogImg2,
        thumb:'Technology',
        author: 'Konal Biry',
        authorTitle:'Creative Director',
        create_at: '13 Dec,2022',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Restaurant-related events locally or internationally ',
        slug:"Restaurant-related",
        screens: blogImg3,
        thumb:'Food',
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Aliza',
        authorTitle:'Art Director',
        create_at: '22 Dec,2022',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    }
];
export default Features;