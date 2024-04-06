export default function Paginator({ count, limit, page, setPage }) {
    const pagesCount = Math.ceil(count / limit);
    const buttons = Array.from({ length: pagesCount}, ((_, i) => i + 1));
    return (
        <div>
            <p>Page: { page } of { pagesCount }</p>
            <div>
                <button 
                    disabled={ page === 1 }
                    onClick={ () => setPage(page - 1)}
                    >Previous</button>
                {
                    buttons.map((el, ix) => 
                        <button
                            disabled={ el === page } 
                            key={ ix } 
                            onClick={() => setPage(el)}>
                        { el }</button>
                    )
                }
                <button disabled={ page === pagesCount }>Next</button>
            </div>
            <hr />
            <p>Count: {count}; Limit: {limit}</p>
        </div>
    );
}