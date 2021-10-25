export const Router   = (data)=>{

    const arrayReviewBook = ['review-books'];
    const arrayLiterature = ['literature'];
    const arrayMentality = ['mentality'];
    const arrayBlog = ['blogs'];
    const arrayLibrary = ['library'];
    const arrayGoodBooks = ['good-book'];
    const arrayQuote = ['quote'];
    const arrayWork = ['work'];
    const arrayEconomic = ['economic'];
    const arrayChildrenBook = ['children-books'];


    const router = arrayReviewBook.indexOf(data.key) > -1 ? `/review-books/${data.slug}`

    : arrayLiterature.indexOf(data.key) > -1 ? `/review-books/literature/${data.slug}`

    : arrayMentality.indexOf(data.key) > -1 ? `/review-books/mentality/${data.slug}`

    : arrayEconomic.indexOf(data.key) > -1 ? `/review-books/economic/${data.slug}`

    : arrayChildrenBook.indexOf(data.key) > -1 ? `/review-books/children-books/${data.slug}`

    : arrayBlog.indexOf(data.key) > -1 ? `/blog/${data.slug}`

    : arrayLibrary.indexOf(data.key) > -1 ? `/library/${data.slug}`

    : arrayGoodBooks.indexOf(data.key) > -1 ? `/good-book/${data.slug}`

    : arrayQuote.indexOf(data.key) > -1 ? `/quote/${data.slug}`

    : arrayWork.indexOf(data.key) > -1 ? `/work-author/${data.slug}` : '';




    return router;
}