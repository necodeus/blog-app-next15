import MarkdownIt from 'markdown-it'

import highlightLines from '@plugins/markdown-it/highlight-lines'
import codetabs from '@plugins/markdown-it/codetabs'
import taskLists from '@plugins/markdown-it/task-lists'
import anchor from '@plugins/markdown-it/anchor'
import emoji from '@plugins/markdown-it/emoji'

import hljs from 'highlight.js'

import 'highlight.js/styles/atom-one-dark-reasonable.css'

export const PostContent = ({ content }: any) => {
    const md = new MarkdownIt({
        highlight: function (str: string, lang: string) {
            const code = hljs.highlight(str, {
                language: lang,
                ignoreIllegals: true,
            }).value

            return `<pre class="hljs icon-${lang}"><code>${code}</code></pre>`
        }
    })
        .use(highlightLines)
        .use(codetabs)
        .use(taskLists)
        .use(anchor)
        .use(emoji)

    const convertMarkdownToHTML = (content: string) => md.render(content)

    return (
        <div
            className="content"
            dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(content) }}
        ></div>
    );
}
