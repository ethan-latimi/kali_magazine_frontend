// images
import blogImg1 from "../images/blog/img-7.jpg";
import blogImg2 from "../images/blog/img-8.jpg";
import blogImg3 from "../images/blog/img-9.jpg";

import blogSingleImg1 from "../images/blog/blog-single/img-7.jpg";
import blogSingleImg2 from "../images/blog/blog-single/img-8.jpg";
import blogSingleImg3 from "../images/blog/blog-single/img-9.jpg";

import avater1 from "../images/blog/blog-avater/img-1.jpg";
import avater2 from "../images/blog/blog-avater/img-2.jpg";
import avater3 from "../images/blog/blog-avater/img-3.jpg";


const Video = [
    {
        id: '1',
        title: 'We provide advanced solution growin your online',
        slug:"We-provide",
        screens: blogImg1,
        thumb:'Fitness',
        description: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        author: 'Marilou Kelleher',
        authorTitle:'Sineor Consultant',
        avater:avater1,
        create_at: '25 Dec, 2023',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'We provide advanced solutions growin your online business',
        slug:"online-business",
        screens: blogImg2,
        thumb:'Technology',
        author: 'Konal Biry',
        avater:avater2,
        authorTitle:'Creative Director',
        description: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        create_at: '13 Dec,2023',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Many desktop publishing packag and web page editors use.',
        slug:"desktop-publishing",
        screens: blogImg3,
        thumb:'Food',
        description: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        author: 'Aliza',
        authorTitle:'Art Director',
        create_at: '22 Dec,2023',
        avater:avater3,
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    }
];
export default Video;