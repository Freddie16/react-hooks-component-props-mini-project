import React from 'react';

function Article(props) {
    return (
        <div>
            <article>
                <h3>{title}</h3>
                <small>
                  {date} • {emojis} {minutes} min read
                </small>
                <p>{preview}</p>
            </article>
        </div>
    );
}

export default Article;