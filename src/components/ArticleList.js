import React from "react";
import Article from "./Article";


function ArticleList({posts}){
    const articleArray = posts.map(e=> <Article title={e.title} date={e.date} preview={e.preview} key={e.id} />)
return(
        <main>
            {articleArray}
        </main>

    )
}

export default ArticleList