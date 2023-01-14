import React from 'react';

function ArticleList(props) {
    return (
        <div>
            <Article 
        key={article.id} 
        title={article.title} 
        preview={article.preview} 
        date={article.date} 
        minutes={article.minutes}
        />
        </div>
    );
}

export default ArticleList;