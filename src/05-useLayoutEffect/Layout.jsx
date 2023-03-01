import { useFetch, useCounter } from "../hooks"
import { Quote, LoadingQuote } from "../03-examples";


export const Layout = () => {

    const { counter, increment } = useCounter(1);
  
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

    const { author, quote } = !!data && data[0];

    /* if ( isLoading ) {
        return (
            <h1>Loading...</h1>
        )
    } */
  
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />
            }

            <button 
                className="btn btn-primary mt-2"
                disabled={ isLoading }
                onClick={() => increment()}
            >
                Next quote
            </button>


        </>
    )
}
