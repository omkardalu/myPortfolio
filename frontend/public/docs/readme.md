# ***closed***
I am **Omkar**

I am developing this Portfolio to learn frontend development 

I am using `React, Tailwindcss` 

For version controling git, github

This is still in process. I don't understand how to do this markdown fully working.

# What i did -
- *Setup* 
- I installed the [react-markdown](https://www.npmjs.com/package/react-markdown) 
- and used the compnent and added the prose class provided by tailwind also
but still the headings and list are't styled at all.

```
import content from 'file';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
const blog = () => {
 return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
 )
}
```
but still its not working as expected
## *for source [**git**](https://github.com/omkardalu/myPortfolio/blob/main/frontend/src/pages/Blog.jsx)*