// images
import blogImg1 from "../images/hero/img-1.jpg";
import blogImg2 from "../images/hero/img-2.jpg";
import blogImg3 from "../images/hero/img-3.jpg";
import blogImg4 from "../images/hero/img-4.jpg";
import blogImg5 from "../images/slider/slide-1.jpg";
import blogImg6 from "../images/slider/slide-2.jpg";

import blogSingleImg1 from "../images/slider/hero-single/img-1.jpg";
import blogSingleImg2 from "../images/slider/hero-single/img-2.jpg";
import blogSingleImg3 from "../images/slider/hero-single/img-3.jpg";
import blogSingleImg4 from "../images/slider/hero-single/img-4.jpg";


import avater1 from "../images/blog/blog-avater/img-1.jpg";
import avater2 from "../images/blog/blog-avater/img-2.jpg";
import avater3 from "../images/blog/blog-avater/img-3.jpg";



const heroBlogs = [
    {
        id: '1',
        title: 'What’s In Trend In Womens Fashion Summer?',
        slug:"Fashion-Summer",
        screens: blogImg1,
        avater:avater1,
        thumb:'Fasion',
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
        title: 'Traveling Makes You More Interesting',
        slug:"Traveling-Makes",
        screens: blogImg2,
        avater:avater2,
        thumb:'Fasion',
        author: 'Konal Biry',
        authorTitle:'Creative Director',
        create_at: '13 Dec,2022',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Top 10 Healthy Food',
        slug:"Top-10-Healthy-Food",
        screens: blogImg3,
        avater:avater3,
        thumb:'Travel',
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Aliza',
        authorTitle:'Art Director',
        create_at: '22 Dec,2022',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '4',
        title: 'What Makes a Leader?',
        slug:"What-Makes",
        screens: blogImg4,
        avater:avater1,
        thumb:'Business',
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Anny',
        authorTitle:'Art Director',
        create_at: '22 Dec,2022',
        blogSingleImg:blogSingleImg4,
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '5',
        title: 'Full Body Dumbbell Workout – Results Achieved Only in 3 Days',
        slug:"Body-Dumbbell-Workout",
        screens: blogImg5,
        avater:avater1,
        thumb:'Fitness',
        description: 'Bloggar is commonly understood as a system of rules that are created and enforced through social or government.',
        author: 'Anny',
        authorTitle:'Art Director',
        create_at: '22 Dec,2022',
        blogSingleImg:blogImg5,
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '6',
        title: 'Why it is important to complete a variety of exercises when working out?',
        slug:"exercises",
        screens: blogImg6,
        avater:avater1,
        thumb:'Fitness',
        description: 'Bloggar is commonly understood as a system of rules that are created and enforced through social or government.',
        author: 'Anny',
        authorTitle:'Art Director',
        create_at: '22 Dec,2022',
        blogSingleImg:blogImg6,
        comment:'95',
        blClass:'format-video',
    },
];
export default heroBlogs;