const ShortCircuitComponent = ()=> {

    const addedtocart=true


    return(
        <>
        {
        addedtocart
        &&
        <button>addedtocart</button>
       
        }
</>
    );
    }
    export default ShortCircuitComponent;