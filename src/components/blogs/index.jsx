import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-cards";
import Blog1 from "../../images/blogs/GFG_Profile.png";
import Blog2 from "../../images/blogs/Leetcode_Profile.png";
import Blog3 from "../../images/blogs/Leetcode_75.png";



import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Prashant Kumar"
                    date="July 8 2023"
                    image={Blog1}
                    title="GFG Profile"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCard
                    user="Prashant Kumar"
                    date="October 23 2022"
                    image={Blog2}
                    title="Leetcode Profile"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCard
                    user="Prashant Kumar"
                    date="Jan 22 2024"
                    image={Blog3}
                    title="Leetcode-75 Completion Batch"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                
            </div>
        </Section>
    );
};

export default Blogs;